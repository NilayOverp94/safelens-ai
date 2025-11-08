import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Search, Loader2, Link } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface LinkCheckerProps {
  onAnalysisComplete: (result: any) => void;
  deepCheck: boolean;
}

export const LinkChecker = ({ onAnalysisComplete, deepCheck }: LinkCheckerProps) => {
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState("");
  const { toast } = useToast();

  const handleAnalyze = async () => {
    if (!text.trim()) {
      toast({
        title: "No input",
        description: "Please enter a URL, message, or text to analyze",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('analyze-content', {
        body: {
          mode: 'text',
          text: text.trim(),
          deepCheck,
        },
      });

      if (error) throw error;
      
      onAnalysisComplete(data);
      toast({
        title: "Analysis complete",
        description: "Your content has been analyzed",
      });
    } catch (error: any) {
      console.error('Analysis error:', error);
      toast({
        title: "Analysis failed",
        description: error.message || "Failed to analyze content",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-foreground">
          <Link className="w-5 h-5 text-primary" />
          Link & Message Checker
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          Check URLs, messages, and text for phishing attempts and scams
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Textarea
          placeholder="Paste a URL, suspicious message, or any text you want to check...&#10;&#10;Example:&#10;• https://example.com&#10;• Click here to claim your prize!&#10;• Verify your account immediately"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="min-h-[150px] bg-muted border-border focus:border-primary"
          disabled={loading}
        />
        
        <Button 
          onClick={handleAnalyze}
          disabled={loading || !text.trim()}
          className="w-full bg-primary hover:bg-primary/90 transition-colors"
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Analyzing...
            </>
          ) : (
            <>
              <Search className="mr-2 h-4 w-4" />
              Analyze Content
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
};
