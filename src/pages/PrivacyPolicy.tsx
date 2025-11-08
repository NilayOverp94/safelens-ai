import { Button } from "@/components/ui/button";
import { Shield, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
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
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">1. Information We Collect</h2>
            <p>
              SafeLens AI collects information you provide directly, including screenshots, URLs, and text content submitted for analysis. We also collect usage data to improve our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">2. How We Use Your Information</h2>
            <p>
              We use the collected information to provide threat detection and analysis services, improve our AI models, and enhance user experience. Your data is processed securely and never shared with third parties without your consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">3. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your data. All submitted content is encrypted in transit and at rest. Analysis results are stored temporarily and can be deleted upon request.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">4. User Rights</h2>
            <p>
              You have the right to access, modify, or delete your personal data at any time. You can also request a copy of all data we have collected about you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">5. Cookies and Tracking</h2>
            <p>
              We use cookies to maintain user sessions and improve site functionality. You can disable cookies in your browser settings, though this may affect service functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">6. Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. Users will be notified of significant changes via email or through our platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">7. Contact Us</h2>
            <p>
              If you have questions about this privacy policy, please contact us at{" "}
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

export default PrivacyPolicy;
