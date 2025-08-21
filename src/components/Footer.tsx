import { Heart, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary-foreground/10 rounded-full flex items-center justify-center">
                <Heart className="w-4 h-4 text-primary-foreground fill-current" />
              </div>
              <span className="text-xl font-bold">PoopPotty</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Restoring dignity through safe, clean sanitation facilities for communities worldwide.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#mission" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Our Mission</a></li>
              <li><a href="#impact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Impact Stories</a></li>
              <li><a href="#donate" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Donate</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Annual Reports</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Get Involved</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Volunteer</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Corporate Partnership</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Monthly Giving</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Fundraise</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <Mail className="w-4 h-4" />
                info@pooppotty.org
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <Phone className="w-4 h-4" />
                +1 (555) 123-4567
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <MapPin className="w-4 h-4" />
                1882 S New Hope Road #550082
                <br />Gastonia, NC 28055-6503
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 PoopPotty. All rights reserved. | Tax ID: 123-45-6789 | 
            <span className="text-primary-foreground/80"> Donations are tax-deductible to the full extent allowed by law.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;