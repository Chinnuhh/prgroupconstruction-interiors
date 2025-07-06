import { Facebook, Instagram, MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center font-bold text-xl text-primary-foreground">
                PR
              </div>
              <div>
                <h3 className="font-bold text-xl">PR Group</h3>
                <p className="text-sm text-secondary-foreground/70">Precision Redefined</p>
              </div>
            </div>
            <p className="text-secondary-foreground/80 leading-relaxed">
              Building dreams with precision and creating beautiful spaces that inspire. 
              Your trusted partner for construction and interior design solutions.
            </p>
            <p className="text-primary font-semibold">
              Build Smart. Live Beautiful.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-secondary-foreground/80 hover:text-primary transition-colors">Home</a></li>
              <li><a href="#services" className="text-secondary-foreground/80 hover:text-primary transition-colors">Services</a></li>
              <li><a href="#design-ideas" className="text-secondary-foreground/80 hover:text-primary transition-colors">Design Ideas</a></li>
              <li><a href="#portfolio" className="text-secondary-foreground/80 hover:text-primary transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="text-secondary-foreground/80 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Our Services</h4>
            <ul className="space-y-3">
              <li><span className="text-secondary-foreground/80">Construction</span></li>
              <li><span className="text-secondary-foreground/80">Interior Design</span></li>
              <li><span className="text-secondary-foreground/80">Renovations</span></li>
              <li><span className="text-secondary-foreground/80">Modular Kitchen</span></li>
              <li><span className="text-secondary-foreground/80">Commercial Projects</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-secondary-foreground/80 text-sm leading-relaxed">
                    80-10P, 2nd floor beside KIMS hospital,<br />
                    Srikakulam 532001, AP
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <a 
                  href="tel:+918886663807" 
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  +91 8886663807
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <a 
                  href="mailto:prconstructioninteriors@gmail.com" 
                  className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm"
                >
                  prconstructioninteriors@gmail.com
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="font-semibold mb-3">Follow Us</h5>
              <div className="flex space-x-3">
                <a 
                  href="#" 
                  className="p-2 bg-primary/10 rounded-lg text-primary hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="p-2 bg-primary/10 rounded-lg text-primary hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-secondary-foreground/60 text-sm">
              © 2024 PR Group. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;