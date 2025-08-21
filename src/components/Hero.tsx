import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Home, School } from "lucide-react";
import heroImage from "@/assets/hero-transformation.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-gradient-to-r from-background via-accent/30 to-background">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Because Everyone Deserves a{" "}
              <span className="text-primary">Dignified Place</span> to Poop
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              No child should face shame or danger simply by needing to relieve themselves. 
              Help us build safe, clean sanitation facilities that restore dignity and protect health.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4 h-auto">
              Donate Today <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="impact" size="lg" className="text-lg px-8 py-4 h-auto">
              See Our Impact
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-2 mx-auto">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary">2,500+</div>
              <div className="text-sm text-muted-foreground">Lives Changed</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-2 mx-auto">
                <Home className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary">150+</div>
              <div className="text-sm text-muted-foreground">Facilities Built</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-2 mx-auto">
                <School className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary">45+</div>
              <div className="text-sm text-muted-foreground">Schools Served</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <img 
            src={heroImage} 
            alt="Before and after transformation of sanitation facilities" 
            className="rounded-2xl shadow-[var(--shadow-card)] w-full h-auto"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;