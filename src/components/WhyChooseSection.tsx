import { Card, CardContent } from '@/components/ui/card';
import { Clock, Shield, DollarSign, Users, Award, Wrench } from 'lucide-react';

const WhyChooseSection = () => {
  const features = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "On-Time Delivery",
      description: "We respect your time and deliver projects within agreed timelines without compromising quality."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality Materials",
      description: "Only premium, certified materials from trusted suppliers for lasting durability and excellence."
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Transparent Pricing",
      description: "No hidden costs. Clear, upfront pricing with detailed breakdown of all expenses."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Team",
      description: "Skilled professionals with years of experience in construction and interior design."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality Assurance",
      description: "Rigorous quality checks at every stage ensuring superior craftsmanship and finish."
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "After-Sales Support",
      description: "Comprehensive warranty and ongoing support for all our construction and interior projects."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose PR Group?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the difference with our commitment to excellence and customer satisfaction
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="hover-lift shadow-card hover:shadow-luxury group cursor-pointer border-0 bg-card text-center"
            >
              <CardContent className="p-8">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-primary/10 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;