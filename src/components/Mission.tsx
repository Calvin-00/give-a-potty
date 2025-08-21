import { Card, CardContent } from "@/components/ui/card";
import { Shield, Heart, Users, Lightbulb } from "lucide-react";
import familyImage from "@/assets/family-dignity.jpg";

const Mission = () => {
  return (
    <section id="mission" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Mission
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We believe that no child should have to squat over a pit of waste at school or at home 
            while enduring the shame of an unsafe, unsanitary toilet.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="bg-accent/50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Matt 25:35–36 (NIV)
              </h3>
              <p className="text-muted-foreground text-sm mb-3">
                "For I was hungry and you gave me something to eat... I was a stranger and you invited me in... I needed clothes and you clothed me"
              </p>
              <p className="text-xs text-muted-foreground italic">
                "I needed a clean toilet, and you gave me one." (Adapted)
              </p>
            </div>
            
            <p className="text-foreground leading-relaxed">
              No mother should worry that her daughter's safety is at risk simply by needing to relieve herself. 
              No GrandPa should suffer humiliation because there's no safe place to go.
            </p>
            
            <p className="text-foreground leading-relaxed">
              At PoopPotty, we honor one of the most basic human needs—with dignity, hygiene, and love, 
              in Jesus's name. We seek to provide clean, private, and safe sanitation to families living in crisis—because 
              every person deserves to be treated with honor, even in their most vulnerable moments.
            </p>
          </div>

          <div className="relative">
            <img 
              src={familyImage} 
              alt="A family standing proudly by their new sanitation facility" 
              className="rounded-2xl shadow-[var(--shadow-card)] w-full h-auto"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-shadow">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Safety First</h3>
              <p className="text-sm text-muted-foreground">
                Protecting vulnerable populations, especially women and children, from danger and harassment.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-shadow">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Restoring Dignity</h3>
              <p className="text-sm text-muted-foreground">
                Every person deserves privacy and dignity when answering nature's call.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-shadow">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Community Impact</h3>
              <p className="text-sm text-muted-foreground">
                Building facilities that serve entire communities and transform lives.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-shadow">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Sustainable Solutions</h3>
              <p className="text-sm text-muted-foreground">
                Creating long-lasting infrastructure with local community involvement.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Mission;