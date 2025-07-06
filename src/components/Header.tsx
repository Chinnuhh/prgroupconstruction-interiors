import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import AiChatPopup from './AiChatPopup';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAiChatOpen, setIsAiChatOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-card/95 backdrop-blur-lg border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center font-bold text-xl text-primary-foreground">
              PR
            </div>
            <div>
              <h1 className="font-bold text-xl text-foreground">PR Group</h1>
              <p className="text-xs text-muted-foreground">Precision Redefined</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
            <a href="#design-ideas" className="text-foreground hover:text-primary transition-colors">Design Ideas</a>
            <a href="#portfolio" className="text-foreground hover:text-primary transition-colors">Portfolio</a>
            <button onClick={() => setIsAiChatOpen(true)} className="text-foreground hover:text-primary transition-colors">AI Agent</button>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button 
              onClick={() => window.open('https://wa.me/918886663807', '_blank')}
              className="gradient-primary shadow-luxury hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-card/95 backdrop-blur-lg border-b border-border shadow-lg">
            <nav className="flex flex-col space-y-4 p-6">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
              <a href="#design-ideas" className="text-foreground hover:text-primary transition-colors">Design Ideas</a>
              <a href="#portfolio" className="text-foreground hover:text-primary transition-colors">Portfolio</a>
              <button onClick={() => setIsAiChatOpen(true)} className="text-foreground hover:text-primary transition-colors">AI Agent</button>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
              <Button 
                onClick={() => window.open('https://wa.me/918886663807', '_blank')}
                className="gradient-primary shadow-luxury w-full mt-4"
              >
                Get a Quote
              </Button>
            </nav>
          </div>
        )}
      </div>
      <AiChatPopup isOpen={isAiChatOpen} onClose={() => setIsAiChatOpen(false)} />
    </header>
  );
};

export default Header;