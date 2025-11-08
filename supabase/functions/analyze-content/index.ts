import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { mode, text, imageBase64, mimeType, deepCheck } = await req.json();
    
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    // Select model based on deepCheck flag
    const model = deepCheck ? "google/gemini-2.5-pro" : "google/gemini-2.5-flash";

    console.log(`Analyzing content in ${mode} mode using ${model}`);

    // System prompt for SafeLens AI
    const systemPrompt = `You are SafeLens AI, a multimodal security analyzer specializing in detecting fake screenshots, phishing links, and scam messages. 

Your task is to analyze the provided content and return a strict JSON response with the following structure:

{
  "mode": "IMAGE_MODE" or "QUERY_MODE",
  "overall": {
    "safety_score": number (0-100, where 100 is completely safe),
    "category": "SAFE" or "SUSPICIOUS" or "DANGEROUS",
    "verdict_one_liner": "string (clear, concise verdict in one sentence)",
    "confidence": "low" or "medium" or "high"
  },
  "findings": {
    "extracted_urls": ["array of URLs found in text or image"],
    "reasons": ["array of specific reasons for the verdict"],
    "tips": ["array of actionable safety tips for the user"]
  },
  "image_annotations": {
    "highlight_regions": ["array of descriptions of suspicious areas if analyzing an image"]
  }
}

Analysis Guidelines:
- For images: Look for signs of manipulation (inconsistent shadows, fonts, colors, resolution), fake UI elements, suspicious URLs, phishing indicators
- For text/links: Check for suspicious domains, urgency tactics, spelling errors, fake sender patterns, known scam phrases
- Be specific in your reasons - cite exact red flags found
- Provide practical, actionable tips
- Use high confidence only when multiple clear indicators are present
- SAFE: 70-100 score, no significant red flags
- SUSPICIOUS: 40-69 score, some concerning elements but not definitively malicious
- DANGEROUS: 0-39 score, clear indicators of scam/phishing/fake content`;

    // Build the messages array
    const messages: any[] = [
      { role: "system", content: systemPrompt }
    ];

    if (mode === 'image' && imageBase64) {
      messages.push({
        role: "user",
        content: [
          {
            type: "text",
            text: "Analyze this screenshot for fake content, phishing attempts, and security threats. Return your analysis in the specified JSON format."
          },
          {
            type: "image_url",
            image_url: {
              url: `data:${mimeType};base64,${imageBase64}`
            }
          }
        ]
      });
    } else if (mode === 'text' && text) {
      messages.push({
        role: "user",
        content: `Analyze this text/URL for phishing, scams, and security threats: "${text}". Return your analysis in the specified JSON format.`
      });
    } else {
      throw new Error("Invalid request: missing required parameters");
    }

    // Call Lovable AI Gateway
    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        messages,
        temperature: 0.3, // Lower temperature for more consistent analysis
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      
      if (response.status === 429) {
        throw new Error("Rate limit exceeded. Please try again in a moment.");
      }
      if (response.status === 402) {
        throw new Error("AI service requires payment. Please check your account.");
      }
      
      throw new Error(`AI gateway error: ${response.status}`);
    }

    const aiResponse = await response.json();
    const content = aiResponse.choices?.[0]?.message?.content;

    if (!content) {
      throw new Error("No response from AI");
    }

    // Parse the JSON response from AI
    let analysisResult;
    try {
      // Extract JSON from markdown code blocks if present
      const jsonMatch = content.match(/```(?:json)?\s*(\{[\s\S]*\})\s*```/);
      const jsonString = jsonMatch ? jsonMatch[1] : content;
      analysisResult = JSON.parse(jsonString);
    } catch (parseError) {
      console.error("Failed to parse AI response:", content);
      throw new Error("Failed to parse AI analysis result");
    }

    console.log("Analysis complete:", analysisResult.overall.category);

    return new Response(
      JSON.stringify(analysisResult),
      { 
        headers: { 
          ...corsHeaders, 
          "Content-Type": "application/json" 
        } 
      }
    );

  } catch (error) {
    console.error("Error in analyze-content:", error);
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : "Unknown error occurred" 
      }),
      { 
        status: 500,
        headers: { 
          ...corsHeaders, 
          "Content-Type": "application/json" 
        } 
      }
    );
  }
});
