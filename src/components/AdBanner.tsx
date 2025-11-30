import { useEffect } from "react";

const AdBanner = () => {
  useEffect(() => {
    // Create and inject the first ad script
    const script1 = document.createElement("script");
    script1.src = "//pl28164834.effectivegatecpm.com/5b3eb380361c574ece05204390812293/invoke.js";
    script1.async = true;
    script1.setAttribute("data-cfasync", "false");
    
    // Create and inject the second ad script
    const script2 = document.createElement("script");
    script2.src = "//pl28165442.effectivegatecpm.com/a8/7a/79/a87a7988cd7c41f72c1f307747d5e5fd.js";
    script2.async = true;
    script2.type = "text/javascript";
    
    document.body.appendChild(script1);
    document.body.appendChild(script2);
    
    return () => {
      // Cleanup scripts on unmount
      if (document.body.contains(script1)) {
        document.body.removeChild(script1);
      }
      if (document.body.contains(script2)) {
        document.body.removeChild(script2);
      }
    };
  }, []);

  return (
    <div className="w-full py-4 bg-background/50 border-t border-border/50">
      <div className="container mx-auto flex justify-center">
        <div id="container-5b3eb380361c574ece05204390812293"></div>
      </div>
    </div>
  );
};

export default AdBanner;
