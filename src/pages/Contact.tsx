import { Button } from "@/components/ui/button";
import { Shield, ArrowLeft, Mail, MessageSquare, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/50 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              SafeLens AI
            </span>
          </Link>
          <Link to="/">
            <Button variant="ghost">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Button>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-muted-foreground">
            Have questions? We're here to help.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-lg border border-border bg-card text-center">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Email Support</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Get in touch via email
            </p>
            <a
              href="mailto:nilayraj712@gmail.com"
              className="text-primary hover:underline font-medium"
            >
              nilayraj712@gmail.com
            </a>
          </div>

          <div className="p-6 rounded-lg border border-border bg-card text-center">
            <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 mx-auto">
              <MessageSquare className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">General Inquiries</h3>
            <p className="text-sm text-muted-foreground">
              Questions about our service, features, or partnership opportunities
            </p>
          </div>

          <div className="p-6 rounded-lg border border-border bg-card text-center">
            <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 mx-auto">
              <HelpCircle className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Technical Support</h3>
            <p className="text-sm text-muted-foreground">
              Having issues? Report bugs or request technical assistance
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
          <h2 className="text-2xl font-bold mb-4">Before You Contact Us</h2>
          <div className="space-y-3 text-muted-foreground">
            <p>To help us assist you better, please include:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>A clear description of your issue or question</li>
              <li>Screenshots if reporting a bug or visual issue</li>
              <li>Your account email (if applicable)</li>
              <li>Steps to reproduce the issue (for technical problems)</li>
            </ul>
            <p className="pt-4 font-semibold text-foreground">
              We typically respond within 24-48 hours.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="/privacy">
              <Button variant="outline">Privacy Policy</Button>
            </Link>
            <Link to="/terms">
              <Button variant="outline">Terms of Service</Button>
            </Link>
            <Link to="/auth">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </main>

      <footer className="border-t border-border/50 mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">SafeLens AI</span>
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

export default Contact;
