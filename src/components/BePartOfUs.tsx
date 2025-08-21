import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Share, Users, DollarSign } from "lucide-react";

const BePartOfUs = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-accent/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Be Part of US
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Be remembered as someone who gave dignity where there was none. PoopPotty isn't just about toilets. 
            It's about loving like Jesus — practically, joyfully, urgently. You can partner with us through:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-shadow">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-3">Pray</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Our Prayer Requests page is where you can share personal challenges and invite others to pray. 
                We stand in faith, believing in God's power, and encouragement through shared requests.
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Learn more
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-shadow">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Share className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-3">Share</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Spread the word by sharing this mission with friends, family, and your community. 
                We share in faith, believing in God's truth, and transformation through shared stories, love, and testimony.
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Learn more
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-shadow">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-3">Volunteer</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Partner with us by joining volunteering opportunities, offering your time and skills to serve those in need. 
                We serve in faith, believing in God's purpose, and transformation through shared action.
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Learn more
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-shadow">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-3">Give</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Support this mission through generous giving to help meet real needs and spread lasting hope and love. 
                We give in faith, believing in God's provision, and impact through shared generosity.
              </p>
              <Button variant="donate" size="sm" className="w-full">
                Learn more
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BePartOfUs;