import { useState } from "react";
import { Shield, Sparkles } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { ScreenshotAnalyzer } from "@/components/ScreenshotAnalyzer";
import { LinkChecker } from "@/components/LinkChecker";
import { AnalysisResults } from "@/components/AnalysisResults";

const Index = () => {
  const [deepCheck, setDeepCheck] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<any>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Shield className="w-8 h-8 text-primary" />
              <h1 className="text-3xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                SafeLens AI
              </h1>
            </div>
            
            <div className="flex items-center gap-3 bg-muted/50 px-4 py-2 rounded-full border border-border">
              <Label htmlFor="deep-check" className="text-sm font-medium cursor-pointer text-foreground">
                Deep Check
              </Label>
              <Switch
                id="deep-check"
                checked={deepCheck}
                onCheckedChange={setDeepCheck}
              />
              {deepCheck && (
                <Sparkles className="w-4 h-4 text-secondary animate-pulse" />
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Hero Section */}
          <div className="text-center space-y-4 py-8">
            <h2 className="text-4xl font-bold text-foreground">
              Detect Fake Screenshots & Phishing Links
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Powered by advanced AI to protect you from scams, fake images, and malicious content
            </p>
          </div>

          {/* Analysis Tools */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ScreenshotAnalyzer 
              onAnalysisComplete={setAnalysisResult} 
              deepCheck={deepCheck}
            />
            <LinkChecker 
              onAnalysisComplete={setAnalysisResult}
              deepCheck={deepCheck}
            />
          </div>

          {/* Results */}
          {analysisResult && (
            <AnalysisResults result={analysisResult} />
          )}

          {/* Info Footer */}
          <div className="mt-12 p-6 rounded-lg bg-card border border-border">
            <h3 className="text-lg font-semibold mb-3 text-foreground">How it works</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
              <div>
                <span className="font-semibold text-success">✓ Screenshot Analysis:</span> Detects edited images, fake UI elements, and suspicious content in screenshots
              </div>
              <div>
                <span className="font-semibold text-warning">⚠ Link Checking:</span> Identifies phishing URLs, scam messages, and suspicious domains
              </div>
              <div>
                <span className="font-semibold text-secondary">⚡ Deep Check:</span> Uses advanced AI (Gemini 2.5 Pro) for more thorough analysis
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
