import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Quote } from "lucide-react";
import schoolImage from "@/assets/school-children.jpg";

const Impact = () => {
  return (
    <section id="impact" className="py-20 bg-gradient-to-b from-accent/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Real Stories, Real Impact
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how your donations transform lives and restore dignity to communities around the world.
          </p>
        </div>

        {/* Progress Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="shadow-[var(--shadow-card)]">
            <CardContent className="p-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">$125,000</div>
                <div className="text-sm text-muted-foreground mb-4">Raised This Year</div>
                <Progress value={75} className="h-2" />
                <div className="text-xs text-muted-foreground mt-2">Goal: $167,000</div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-[var(--shadow-card)]">
            <CardContent className="p-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">2,500+</div>
                <div className="text-sm text-muted-foreground mb-4">Lives Transformed</div>
                <Progress value={85} className="h-2" />
                <div className="text-xs text-muted-foreground mt-2">Target: 3,000</div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-[var(--shadow-card)]">
            <CardContent className="p-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">150+</div>
                <div className="text-sm text-muted-foreground mb-4">Facilities Built</div>
                <Progress value={60} className="h-2" />
                <div className="text-xs text-muted-foreground mt-2">Goal: 250</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Impact Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src={schoolImage} 
              alt="Children celebrating at their school with new sanitation facilities" 
              className="rounded-2xl shadow-[var(--shadow-card)] w-full h-auto"
            />
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Transforming Education Through Dignity
              </h3>
              <p className="text-foreground leading-relaxed mb-4">
                At Mwanza Primary School in Tanzania, 400 students shared just two broken pit latrines. 
                Girls often skipped school during menstruation, and the unsanitary conditions spread disease.
              </p>
              <p className="text-foreground leading-relaxed">
                Thanks to donors like you, we built six modern toilet facilities with proper ventilation, 
                handwashing stations, and separate facilities for girls. Attendance increased by 40%, 
                and not a single girl has missed school for sanitation-related reasons since.
              </p>
            </div>
            
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <Quote className="w-8 h-8 text-primary mb-4" />
                <blockquote className="text-foreground font-medium mb-4">
                  "Now I can focus on my studies instead of worrying about where I can go safely. 
                  These new facilities gave me back my dignity and my education."
                </blockquote>
                <div className="text-sm text-muted-foreground">
                  — Maria, 14, Student at Mwanza Primary School
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="shadow-[var(--shadow-soft)]">
            <CardContent className="p-6">
              <Quote className="w-6 h-6 text-primary mb-4" />
              <p className="text-sm text-foreground mb-4">
                "Before, my daughter was ashamed to go to school. Now she runs there every morning 
                with pride and joy. Thank you for giving her dignity back."
              </p>
              <div className="text-xs text-muted-foreground">— Sarah, Parent</div>
            </CardContent>
          </Card>

          <Card className="shadow-[var(--shadow-soft)]">
            <CardContent className="p-6">
              <Quote className="w-6 h-6 text-primary mb-4" />
              <p className="text-sm text-foreground mb-4">
                "Our community is healthier and happier. The children don't get sick as often, 
                and everyone feels safer. This changed everything for us."
              </p>
              <div className="text-xs text-muted-foreground">— John, Community Leader</div>
            </CardContent>
          </Card>

          <Card className="shadow-[var(--shadow-soft)]">
            <CardContent className="p-6">
              <Quote className="w-6 h-6 text-primary mb-4" />
              <p className="text-sm text-foreground mb-4">
                "I'm 85 years old, and for the first time in decades, I don't have to walk 
                far or feel embarrassed. Thank you for thinking of people like me."
              </p>
              <div className="text-xs text-muted-foreground">— Elder Joseph</div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4 h-auto">
            Join Our Mission Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Impact;