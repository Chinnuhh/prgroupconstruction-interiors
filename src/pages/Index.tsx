import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import DesignIdeasSection from '@/components/DesignIdeasSection';
import PortfolioSection from '@/components/PortfolioSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ServicesSection />
      <DesignIdeasSection />
      <PortfolioSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <FloatingActions />
    </div>
  );
};

export default Index;
