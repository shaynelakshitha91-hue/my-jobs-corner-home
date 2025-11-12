import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-home-worker.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Looking for flexible work-from-home options near you?
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Discover new ways to connect with legitimate job openings that fit your schedule and location — no experience required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <Button variant="hero" size="lg" className="text-lg">
                  Find Work Opportunities
                </Button>
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
      </section>

      {/* Value Proposition Section */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Tired of scrolling through endless listings that lead nowhere?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              MyJobsCorner helps everyday people connect with real opportunities from verified employers in their area. 
              Simply share a few quick details and explore available openings that match your interests — all from the comfort of home.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {[
                "Connect with remote or local job opportunities",
                "No prior experience required",
                "Simple and quick sign-up",
                "Get matched with employers hiring now"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-card rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg text-card-foreground font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-hero text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground">
              Ready to start your work-from-home journey?
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Join thousands who have already found flexible opportunities that work for them.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg" 
                className="text-lg bg-background text-foreground hover:bg-background/90"
              >
                See What's Hiring Near You
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20"
              >
                Start Exploring Jobs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Disclaimer */}
      <footer className="bg-muted/50 border-t border-border py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-4">
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
