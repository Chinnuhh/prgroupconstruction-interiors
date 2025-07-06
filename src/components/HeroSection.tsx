import { Button } from '@/components/ui/button';
import { Phone, Lightbulb } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

const HeroSection = () => {
  const handleCallConsultation = () => {
    window.open('tel:+918886663807');
  };

  const handleExploreDesigns = () => {
    document.getElementById('design-ideas')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Build Smart.
            <br />
            <span className="text-primary">Live Beautiful.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Interior, Renovation, and Construction Solutions Across 
            <span className="text-primary font-semibold"> Srikakulam, Visakhapatnam And Andhra Pradesh.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <Button 
              onClick={handleCallConsultation}
              size="lg"
              className="gradient-primary shadow-luxury hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg px-8 py-4 h-auto"
            >
              <Phone className="w-5 h-5 mr-2" />
              Get a Free Consultation
            </Button>
            
            <Button 
              onClick={handleExploreDesigns}
              variant="outline"
              size="lg"
              className="glass border-accent/50 text-accent hover:bg-accent/20 text-lg px-8 py-4 h-auto"
            >
              <Lightbulb className="w-5 h-5 mr-2" />
              Explore Design Ideas
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;