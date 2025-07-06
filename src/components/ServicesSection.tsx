import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import constructionIcon from '@/assets/construction-icon.jpg';
import interiorIcon from '@/assets/interior-icon.jpg';
import renovationIcon from '@/assets/renovation-icon.jpg';

const ServicesSection = () => {
  const services = [
    {
      title: "Construction",
      description: "Complete construction solutions from foundation to finishing. We build residential and commercial projects with precision and quality craftsmanship.",
      icon: constructionIcon,
      features: ["Residential Construction", "Commercial Buildings", "Quality Materials", "Timely Delivery"]
    },
    {
      title: "Interior Design",
      description: "Transform your spaces with our expert interior design services. From concept to completion, we create beautiful and functional living spaces.",
      icon: interiorIcon,
      features: ["Modular Kitchens", "Living Room Design", "Bedroom Interiors", "Office Spaces"]
    },
    {
      title: "Renovations",
      description: "Breathe new life into your existing spaces. Our renovation services enhance functionality while maintaining aesthetic appeal.",
      icon: renovationIcon,
      features: ["Home Renovations", "Kitchen Remodeling", "Bathroom Upgrades", "Space Optimization"]
    }
  ];

  const handleServiceCTA = () => {
    window.open('https://wa.me/918886663807', '_blank');
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions for all your construction and interior design needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover-lift shadow-card hover:shadow-luxury group cursor-pointer border-0 bg-card"
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <img 
                    src={service.icon} 
                    alt={service.title}
                    className="w-16 h-16 object-cover rounded-xl mb-4"
                  />
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mb-6">
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  onClick={handleServiceCTA}
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                >
                  Get Quote
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;