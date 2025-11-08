import { Button } from "@/components/ui/button";
import { Shield, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Terms = () => {
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
        <h1 className="text-4xl font-bold mb-8">Terms of Service & Disclaimer</h1>
        <div className="space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing and using SafeLens AI, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">2. Service Description</h2>
            <p>
              SafeLens AI provides AI-powered analysis of screenshots, URLs, and text content to detect potential security threats, phishing attempts, and malicious content. Our service is provided "as is" without warranties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">3. Disclaimer of Warranties</h2>
            <p className="font-semibold text-foreground">
              IMPORTANT: SafeLens AI is a tool to assist in identifying potential threats, but it is not infallible.
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>We do not guarantee 100% accuracy in threat detection</li>
              <li>AI analysis may produce false positives or miss certain threats</li>
              <li>Users should exercise their own judgment and not rely solely on our analysis</li>
              <li>We are not responsible for any damages resulting from undetected threats</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">4. Limitation of Liability</h2>
            <p>
              SafeLens AI and its operators shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the service. This includes, but is not limited to, financial losses, data breaches, or security incidents.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">5. User Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Do not submit illegal, harmful, or inappropriate content</li>
              <li>Do not attempt to manipulate or abuse the AI analysis system</li>
              <li>Maintain the confidentiality of your account credentials</li>
              <li>Use the service in compliance with all applicable laws</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">6. Acceptable Use Policy</h2>
            <p>
              You agree not to use SafeLens AI to analyze content that violates laws, infringes on intellectual property rights, or contains malicious software intended to harm others.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">7. Service Modifications</h2>
            <p>
              We reserve the right to modify, suspend, or discontinue any part of the service at any time without prior notice. We may also update these terms periodically.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">8. Termination</h2>
            <p>
              We reserve the right to terminate or suspend access to our service immediately, without prior notice, for any reason, including breach of these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">9. Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with applicable laws. Any disputes shall be resolved through appropriate legal channels.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">10. Contact Information</h2>
            <p>
              For questions about these terms or to report violations, contact us at{" "}
              <a href="mailto:nilayraj712@gmail.com" className="text-primary hover:underline">
                nilayraj712@gmail.com
              </a>
            </p>
          </section>

          <p className="text-sm pt-6 border-t border-border mt-8">
            Last updated: January 2025
          </p>
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

export default Terms;
