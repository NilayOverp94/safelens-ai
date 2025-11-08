import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { ScreenshotAnalyzer } from "@/components/ScreenshotAnalyzer";
import { LinkChecker } from "@/components/LinkChecker";
import { AnalysisResults } from "@/components/AnalysisResults";
import { Shield, Sparkles, LogOut } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { User } from "@supabase/supabase-js";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [deepCheck, setDeepCheck] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<any>(null);

  useEffect(() => {
    // Check if user is logged in
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        navigate("/auth");
      } else {
        setUser(session.user);
      }
    });

    // Listen for auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (!session) {
        navigate("/auth");
      } else {
        setUser(session.user);
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error("Error signing out");
    } else {
      toast.success("Signed out successfully");
      navigate("/");
    }
  };

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              SafeLens AI
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground hidden sm:inline">
              {user.email}
            </span>
            <Button variant="outline" size="sm" onClick={handleSignOut}>
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
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
              id="deep-check"
              checked={deepCheck}
              onCheckedChange={setDeepCheck}
            />
            <Label htmlFor="deep-check" className="flex items-center gap-2 cursor-pointer">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-foreground">Deep Check Mode</span>
            </Label>
          </div>
        </div>

        {/* Analysis Tools */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
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
    </div>
  );
};

export default Dashboard;
