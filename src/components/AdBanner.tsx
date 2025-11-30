import { useEffect } from "react";

const AdBanner = () => {
  useEffect(() => {
    // Create and inject the ad script
    const script = document.createElement("script");
    script.src = "//pl28164834.effectivegatecpm.com/5b3eb380361c574ece05204390812293/invoke.js";
    script.async = true;
    script.setAttribute("data-cfasync", "false");
    
    document.body.appendChild(script);
    
    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
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
