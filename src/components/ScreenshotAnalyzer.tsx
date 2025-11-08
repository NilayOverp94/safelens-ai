import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, Loader2, Image as ImageIcon } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface ScreenshotAnalyzerProps {
  onAnalysisComplete: (result: any) => void;
  deepCheck: boolean;
}

export const ScreenshotAnalyzer = ({ onAnalysisComplete, deepCheck }: ScreenshotAnalyzerProps) => {
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const { toast } = useToast();

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      toast({
        title: "Invalid file type",
        description: "Please upload an image file (JPEG, PNG, etc.)",
        variant: "destructive",
      });
      return;
    }

    // Validate file size (10MB max)
    if (file.size > 10 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Image must be less than 10MB",
        variant: "destructive",
      });
      return;
    }

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64String = reader.result as string;
      setImagePreview(base64String);
      
      setLoading(true);
      try {
        const { data, error } = await supabase.functions.invoke('analyze-content', {
          body: {
            mode: 'image',
            imageBase64: base64String.split(',')[1], // Remove data:image/jpeg;base64, prefix
            mimeType: file.type,
            deepCheck,
          },
        });

        if (error) throw error;
        
        onAnalysisComplete({ ...data, imagePreview: base64String });
        toast({
          title: "Analysis complete",
          description: "Your screenshot has been analyzed",
        });
      } catch (error: any) {
        console.error('Analysis error:', error);
        toast({
          title: "Analysis failed",
          description: error.message || "Failed to analyze screenshot",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };
    
    reader.readAsDataURL(file);
  };

  return (
    <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-foreground">
          <ImageIcon className="w-5 h-5 text-primary" />
          Screenshot Analyzer
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          Upload a screenshot to detect fake content, phishing attempts, and edited images
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col items-center justify-center border-2 border-dashed border-border rounded-lg p-8 hover:border-primary/50 transition-all duration-300 cursor-pointer"
          onClick={() => document.getElementById('screenshot-upload')?.click()}>
          {imagePreview ? (
            <div className="w-full">
              <img src={imagePreview} alt="Preview" className="w-full h-48 object-contain rounded-lg" />
            </div>
          ) : (
            <>
              <Upload className="w-12 h-12 text-muted-foreground mb-4" />
              <p className="text-sm text-muted-foreground mb-2">Click to upload or drag and drop</p>
              <p className="text-xs text-muted-foreground">PNG, JPG up to 10MB</p>
            </>
          )}
        </div>
        
        <input
          id="screenshot-upload"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageUpload}
          disabled={loading}
        />
        
        <Button 
          onClick={() => document.getElementById('screenshot-upload')?.click()}
          disabled={loading}
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-50"
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Analyzing...
            </>
          ) : (
            <>
              <Upload className="mr-2 h-4 w-4" />
              Upload Screenshot
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
};
