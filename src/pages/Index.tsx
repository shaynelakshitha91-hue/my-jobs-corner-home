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
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight animate-fade-in">
                  Looking for flexible work-from-home options near you?
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground animate-fade-in-delay leading-relaxed">
                  Discover new ways to connect with legitimate job openings that fit your schedule and location — no experience required.
                </p>
                
                {/* CTA Button */}
                <div className="pt-4 animate-fade-in-delay">
                  <Button 
                    variant="hero" 
                    size="lg" 
                    className="text-lg w-full sm:w-auto px-8 py-6 text-base font-bold animate-pulse-glow"
                    onClick={handleCTAClick}
                  >
                    Find Work Opportunities →
                  </Button>
                </div>
                
                <div className="space-y-4 py-6 animate-fade-in-delay">
                  <p className="text-lg text-foreground font-semibold">
                    Tired of scrolling through endless listings that lead nowhere?
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    MyJobsCorner helps everyday people connect with real opportunities from verified employers in their area. Simply share a few quick details and explore available openings that match your interests — all from the comfort of home.
                  </p>
                </div>

                {/* Benefits */}
                <div className="space-y-3 py-4 animate-fade-in-delay">
                  {[
                    "Connect with remote or local job opportunities",
                    "No prior experience required",
                    "Simple and quick sign-up",
                    "Get matched with employers hiring now"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3 justify-center lg:justify-start p-3 rounded-lg hover:bg-secondary/50 transition-all duration-200">
                      <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                      <p className="text-base text-foreground font-medium">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Image */}
              <div className="relative animate-fade-in">
                <div className="rounded-2xl overflow-hidden shadow-soft hover:shadow-[0_20px_60px_-15px_hsl(213_94%_48%/0.3)] transition-all duration-500">
                  <img 
                    src={heroImage} 
                    alt="Woman working from home on laptop in comfortable home office"
                    className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Decorative gradient blob */}
                <div className="absolute -z-10 -top-10 -right-10 w-72 h-72 bg-gradient-accent opacity-20 rounded-full blur-3xl"></div>
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
              <strong>Disclaimer:</strong> This opportunity is for U.S. residents only. MyJobsCorner is a job search platform that connects users with employment listings and related offers. Results and availability may vary by location. This page is not affiliated with or endorsed by any employer or brand mentioned directly.
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
