import { useState } from "react";
import { Link } from "react-router-dom";
import { Shield, Sparkles, ArrowLeft, Upload, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Demo = () => {
  const [deepCheck, setDeepCheck] = useState(false);
  const [showExample, setShowExample] = useState(false);

  const handleDemoClick = () => {
    setShowExample(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              SafeLens AI
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
              </Button>
            </Link>
            <Link to="/auth">
              <Button>Sign Up Free</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Demo Badge */}
        <div className="text-center mb-8">
          <Badge variant="outline" className="text-lg px-4 py-2 bg-primary/10 border-primary/20">
            🎭 Demo Mode - Sign up to analyze real content
          </Badge>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            SafeLens AI Security Scanner
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Analyze suspicious content using advanced AI. Upload screenshots or check links for potential threats.
          </p>
          
          <div className="flex items-center justify-center gap-3 pt-4">
            <Switch
              id="deep-check-demo"
              checked={deepCheck}
              onCheckedChange={setDeepCheck}
            />
            <Label htmlFor="deep-check-demo" className="flex items-center gap-2 cursor-pointer">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-foreground">Deep Check Mode</span>
            </Label>
          </div>
        </div>

        {/* Analysis Tools */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Screenshot Analyzer */}
          <Card className="border-2 border-border hover:border-primary/50 transition-all">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Upload className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-bold text-foreground">Screenshot Analyzer</h2>
              </div>
              <p className="text-sm text-muted-foreground mb-6">
                Upload a screenshot to detect fake content, phishing attempts, and edited images
              </p>
              
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center mb-4 bg-muted/20">
                <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <p className="text-sm text-muted-foreground mb-2">
                  Click to upload or drag and drop
                </p>
                <p className="text-xs text-muted-foreground">
                  PNG, JPG up to 10MB
                </p>
              </div>
              
              <Button 
                className="w-full" 
                disabled
              >
                <Upload className="mr-2 h-4 w-4" />
                Upload Screenshot (Demo Mode)
              </Button>
            </CardContent>
          </Card>

          {/* Link Checker */}
          <Card className="border-2 border-border hover:border-primary/50 transition-all">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Search className="h-5 w-5 text-secondary" />
                <h2 className="text-xl font-bold text-foreground">Link & Message Checker</h2>
              </div>
              <p className="text-sm text-muted-foreground mb-6">
                Check URLs, messages, and text for phishing attempts and scams
              </p>
              
              <Textarea
                placeholder="Paste a URL, suspicious message, or any text you want to check...

Example:
• https://example.com
• Click here to claim your prize!
• Verify your account immediately"
                className="mb-4 min-h-[200px]"
                disabled
              />
              
              <Button 
                className="w-full"
                onClick={handleDemoClick}
              >
                <Search className="mr-2 h-4 w-4" />
                Analyze Content
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Demo Result */}
        {showExample && (
          <div className="mt-8 p-6 rounded-lg border-2 border-primary/50 bg-primary/5 animate-in fade-in slide-in-from-bottom-4">
            <div className="flex items-start gap-4 mb-4">
              <div className="h-12 w-12 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">⚠️</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  High Risk Detected
                </h3>
                <p className="text-muted-foreground mb-4">
                  This is an example result. The actual analysis uses advanced AI to detect:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-0.5">•</span>
                    <span>Phishing attempts and fake login pages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-0.5">•</span>
                    <span>Suspicious URLs and redirects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-0.5">•</span>
                    <span>Manipulated screenshots and deepfakes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-0.5">•</span>
                    <span>Scam messages and malicious content</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-background rounded-lg border border-border">
              <p className="text-sm text-center text-muted-foreground mb-3">
                Ready to protect yourself from real threats?
              </p>
              <Link to="/auth" className="block">
                <Button className="w-full" size="lg">
                  Sign Up Free - Start Analyzing
                </Button>
              </Link>
            </div>
          </div>
        )}

        {/* Info Section */}
        <div className="mt-12 p-6 rounded-lg bg-muted/50 border border-border">
          <h3 className="font-semibold text-lg mb-2 text-foreground">How it works</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Our AI analyzes screenshots and URLs for phishing attempts, malicious content, and suspicious patterns. 
            Enable <span className="text-primary font-semibold">Deep Check</span> for comprehensive multi-layered analysis 
            that examines content structure, visual elements, and behavioral patterns for maximum protection.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">SafeLens AI</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
              <Link to="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <span className="hidden md:inline">•</span>
              <Link to="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <span className="hidden md:inline">•</span>
              <Link to="/contact" className="hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2025 SafeLens AI. Protecting users worldwide.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Demo;
