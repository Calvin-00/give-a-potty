import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const OurStory = () => {
  return (
    <section className="py-20 bg-accent/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Story
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <Card className="shadow-[var(--shadow-card)]">
              <CardContent className="p-8">
                <Quote className="w-8 h-8 text-primary mb-6" />
                <div className="space-y-4">
                  <p className="text-foreground leading-relaxed">
                    When I was in elementary school, our toilet was an open pit. No privacy. No dignity. No safety. 
                    I often skipped breakfast to avoid needing to go.
                  </p>
                  <p className="text-foreground leading-relaxed">
                    Sometimes, I fought off boys who peeked while my sister used the bathroom. Rain made the pit overflow.
                  </p>
                  <p className="text-foreground leading-relaxed">
                    Of course, I dreaded going to school because of these open toilets.
                  </p>
                  <p className="text-foreground leading-relaxed font-medium">
                    Years later while serving in Haiti, I saw hundreds of children suffering the same way. 
                    God put a fire in my heart—and PoopPotty was born.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                God-First, People-Driven
              </h3>
              
              <Card className="bg-primary/5 border-primary/20 mb-6">
                <CardContent className="p-6">
                  <blockquote className="text-foreground font-medium mb-4">
                    "I have compassion for these people; they have already been with me three days and have nothing to eat..."
                  </blockquote>
                  <div className="text-sm text-muted-foreground">
                    Mark 8:2, NIV
                  </div>
                </CardContent>
              </Card>

              <p className="text-foreground leading-relaxed mb-4">
                When Jesus saw 5,000 hungry people, He didn't just pray. He fed them.
              </p>
              
              <p className="text-foreground leading-relaxed font-medium">
                Jesus met their <strong>physical need</strong> before teaching a spiritual lesson. So must we.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;