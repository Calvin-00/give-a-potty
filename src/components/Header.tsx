import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <Heart className="w-4 h-4 text-primary-foreground fill-current" />
          </div>
          <span className="text-xl font-bold text-primary">PoopPotty</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#mission" className="text-muted-foreground hover:text-foreground transition-colors">
            Our Mission
          </a>
          <a href="#impact" className="text-muted-foreground hover:text-foreground transition-colors">
            Impact
          </a>
          <a href="#donate" className="text-muted-foreground hover:text-foreground transition-colors">
            Donate
          </a>
        </nav>

        <Button variant="donate" size="lg">
          Donate Now
        </Button>
      </div>
    </header>
  );
};

export default Header;