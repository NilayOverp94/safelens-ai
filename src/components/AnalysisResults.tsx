import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { AlertCircle, CheckCircle, AlertTriangle, ExternalLink, Lightbulb, Shield } from "lucide-react";

interface AnalysisResultsProps {
  result: any;
}

export const AnalysisResults = ({ result }: AnalysisResultsProps) => {
  if (!result) return null;

  const { overall, findings, imagePreview } = result;
  
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'SAFE':
        return 'bg-success text-success-foreground';
      case 'SUSPICIOUS':
        return 'bg-warning text-warning-foreground';
      case 'DANGEROUS':
        return 'bg-destructive text-destructive-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'SAFE':
        return <CheckCircle className="w-5 h-5" />;
      case 'SUSPICIOUS':
        return <AlertTriangle className="w-5 h-5" />;
      case 'DANGEROUS':
        return <AlertCircle className="w-5 h-5" />;
      default:
        return <Shield className="w-5 h-5" />;
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 70) return 'bg-gradient-to-r from-success to-success/80';
    if (score >= 40) return 'bg-gradient-to-r from-warning to-warning/80';
    return 'bg-gradient-to-r from-destructive to-destructive/80';
  };

  return (
    <div className="space-y-6 animate-in fade-in-50 duration-500">
      {imagePreview && (
        <Card className="bg-card border-border overflow-hidden">
          <CardContent className="p-4">
            <img src={imagePreview} alt="Analyzed" className="w-full h-auto rounded-lg" />
          </CardContent>
        </Card>
      )}

      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-foreground">
              <Shield className="w-6 h-6 text-primary" />
              Analysis Results
            </span>
            <Badge className={getCategoryColor(overall?.category)} variant="outline">
              {getCategoryIcon(overall?.category)}
              <span className="ml-2">{overall?.category}</span>
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Safety Score */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-foreground">Safety Score</span>
              <span className="text-2xl font-bold text-foreground">{overall?.safety_score}/100</span>
            </div>
            <Progress value={overall?.safety_score} className="h-3" indicatorClassName={getScoreColor(overall?.safety_score)} />
            <p className="text-xs text-muted-foreground">Confidence: {overall?.confidence}</p>
          </div>

          {/* Verdict */}
          <div className="p-4 rounded-lg bg-muted/50 border border-border">
            <p className="text-lg font-semibold text-foreground">{overall?.verdict_one_liner}</p>
          </div>

          {/* Extracted URLs */}
          {findings?.extracted_urls && findings.extracted_urls.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-sm font-semibold flex items-center gap-2 text-foreground">
                <ExternalLink className="w-4 h-4 text-primary" />
                Extracted URLs
              </h3>
              <div className="space-y-2">
                {findings.extracted_urls.map((url: string, idx: number) => (
                  <div key={idx} className="p-3 rounded-lg bg-muted/50 border border-border">
                    <code className="text-sm text-primary break-all">{url}</code>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Reasons */}
          {findings?.reasons && findings.reasons.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-sm font-semibold flex items-center gap-2 text-foreground">
                <AlertCircle className="w-4 h-4 text-warning" />
                Findings
              </h3>
              <ul className="space-y-2">
                {findings.reasons.map((reason: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2 p-3 rounded-lg bg-muted/50 border border-border">
                    <span className="text-warning mt-0.5">•</span>
                    <span className="text-sm text-foreground">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tips */}
          {findings?.tips && findings.tips.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-sm font-semibold flex items-center gap-2 text-foreground">
                <Lightbulb className="w-4 h-4 text-secondary" />
                Safety Tips
              </h3>
              <ul className="space-y-2">
                {findings.tips.map((tip: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2 p-3 rounded-lg bg-muted/50 border border-border">
                    <span className="text-secondary mt-0.5">💡</span>
                    <span className="text-sm text-foreground">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
