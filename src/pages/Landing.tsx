import { Button } from "@/components/ui/button";
import { Shield, Scan, Lock, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Landing = () => {
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
          <nav className="flex items-center gap-4">
            <Link to="/auth">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link to="/auth">
              <Button>Get Started</Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-block">
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20">
              🛡️ AI-Powered Security
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Detect Threats Before
            <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              They Detect You
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Analyze suspicious screenshots, phishing links, and malicious content in seconds with advanced AI technology.
          </p>

          <div className="flex gap-4 justify-center pt-4">
            <Link to="/auth">
              <Button size="lg" className="text-lg px-8 py-6">
                Start Scanning <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/demo">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                View Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">
          Why Choose SafeLens AI?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-lg border border-border bg-card hover:border-primary/50 transition-all">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Scan className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold mb-3">Screenshot Analysis</h3>
            <p className="text-muted-foreground">
              Upload suspicious screenshots and get instant AI-powered analysis to identify potential phishing attempts and scams.
            </p>
          </div>

          <div className="p-8 rounded-lg border border-border bg-card hover:border-primary/50 transition-all">
            <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
              <Lock className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="text-2xl font-semibold mb-3">Link Verification</h3>
            <p className="text-muted-foreground">
              Check URLs before clicking. Our AI examines links for malicious patterns, redirects, and suspicious domains.
            </p>
          </div>

          <div className="p-8 rounded-lg border border-border bg-card hover:border-primary/50 transition-all">
            <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-2xl font-semibold mb-3">Deep Analysis Mode</h3>
            <p className="text-muted-foreground">
              Enable deep check for comprehensive scanning that examines content at multiple layers for maximum protection.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-12 text-center border border-primary/20">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Secure Your Digital Life?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of users protecting themselves from online threats with SafeLens AI.
          </p>
          <Link to="/auth">
            <Button size="lg" className="text-lg px-10 py-6">
              Get Started for Free <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                <span className="font-bold text-lg">SafeLens AI</span>
              </div>
              <p className="text-sm text-muted-foreground">
                AI-powered security analysis to protect you from online threats.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/dashboard" className="hover:text-primary transition-colors">Dashboard</Link></li>
                <li><Link to="/auth" className="hover:text-primary transition-colors">Get Started</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
                <li>
                  <a href="mailto:nilayraj712@gmail.com" className="hover:text-primary transition-colors">
                    nilayraj712@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-border/50 text-center">
            <p className="text-muted-foreground text-sm">
              © 2025 SafeLens AI. Protecting users worldwide.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
