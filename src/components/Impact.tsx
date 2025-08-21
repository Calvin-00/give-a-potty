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
            Our Vision
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Imagine the reality that hundreds face every single day in Haiti, Sudan, the Democratic Republic of Congo, and war-torn regions.
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

        {/* Vision Story */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="shadow-[var(--shadow-card)] bg-gradient-to-r from-background to-accent/30">
            <CardContent className="p-8">
              <div className="space-y-6 text-foreground">
                <p className="text-lg leading-relaxed">
                  You wake up. Your stomach churns. You rush to the bathroom—but there is none. There's no toilet anywhere. 
                  Not for you. Not for your daughter or son. Not for your grandmother or grandfather.
                </p>
                <p className="text-lg leading-relaxed">
                  And if there is one, it's filled with filth, has no water, no privacy. Imagine standing in a line, 
                  praying no one watches you while you poop. Imagine the stench, the sickness, the shame...
                </p>
                <p className="text-lg leading-relaxed">
                  And when you finally finish, there's no water, no toilet paper, and you stink for the rest of the day. 
                  Imagine... Now imagine living like that every single day.
                </p>
                <div className="bg-primary/10 rounded-lg p-6 border-l-4 border-primary">
                  <p className="text-lg font-medium text-foreground">
                    This is reality for <strong>hundreds</strong> in Haiti, Sudan, the Democratic Republic of Congo, 
                    and war-torn regions. Earthquakes, hurricanes, and violence have destroyed sanitation systems. 
                    Families are left with nothing but disease, shame, and desperation.
                  </p>
                </div>
                <div className="text-center py-6">
                  <p className="text-xl font-bold text-primary mb-4">
                    But not if we do something. Together. Today.
                  </p>
                  <p className="text-lg text-foreground">
                    Now, imagine a world where no child, no mother, no father has to live with shame, sickness, 
                    and exposure of defecating in the open.
                  </p>
                  <p className="text-xl font-bold text-primary mt-4">
                    PoopPotty desires to return dignity to entire communities.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
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