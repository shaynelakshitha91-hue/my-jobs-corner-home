import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-home-worker.jpg";

const Index = () => {
  const handleCTAClick = () => {
    window.location.href = "https://uplevelrewarded.com/aff_c?offer_id=2899&aff_id=139288";
  };

  return (
    <div className="min-h-screen bg-gradient-subtle flex flex-col">
      {/* Main Content */}
      <main className="flex-grow flex items-center">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-6 text-center lg:text-left">
                {/* CTA Button - First */}
                <div className="pb-2">
                  <Button 
                    variant="hero" 
                    size="lg" 
                    className="text-lg w-full sm:w-auto"
                    onClick={handleCTAClick}
                  >
                    Find Work Opportunities
                  </Button>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Looking for flexible work-from-home options near you?
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground">
                  Discover new ways to connect with legitimate job openings that fit your schedule and location — no experience required.
                </p>
                
                <div className="space-y-4 py-6">
                  <p className="text-lg text-foreground font-medium">
                    Tired of scrolling through endless listings that lead nowhere?
                  </p>
                  <p className="text-base text-muted-foreground">
                    MyJobsCorner helps everyday people connect with real opportunities from verified employers in their area. Simply share a few quick details and explore available openings that match your interests — all from the comfort of home.
                  </p>
                </div>

                {/* Benefits */}
                <div className="space-y-3 py-4">
                  {[
                    "Connect with remote or local job opportunities",
                    "No prior experience required",
                    "Simple and quick sign-up",
                    "Get matched with employers hiring now"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3 justify-center lg:justify-start">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <p className="text-base text-foreground">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Image */}
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-soft">
                  <img 
                    src={heroImage} 
                    alt="Woman working from home on laptop in comfortable home office"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer with Disclaimer */}
      <footer className="bg-muted/50 border-t border-border py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-3">
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
              <strong>Disclaimer:</strong> This opportunity is for U.S. residents only. MyJobsCorner is a job search platform that connects users with employment listings and related offers. Results and availability may vary by location. This page is not affiliated with or endorsed by any employer or brand mentioned. No employment is guaranteed.
            </p>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} MyJobsCorner. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
