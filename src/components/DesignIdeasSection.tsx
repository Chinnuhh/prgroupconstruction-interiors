import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';

const DesignIdeasSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const designCategories = [
    {
      title: "Modular Kitchen Designs",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
      description: "Modern, functional kitchen designs with smart storage solutions"
    },
    {
      title: "Wardrobe Designs",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      description: "Elegant wardrobes with optimal space utilization"
    },
    {
      title: "Master Bedroom Designs",
      image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=400&h=300&fit=crop",
      description: "Luxurious and comfortable bedroom interiors"
    },
    {
      title: "Living Room Designs",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      description: "Stylish living spaces for family gatherings"
    },
    {
      title: "Pooja Room Designs",
      image: "https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?w=400&h=300&fit=crop",
      description: "Sacred spaces with traditional and modern elements"
    },
    {
      title: "TV Unit Designs",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      description: "Entertainment units that blend with your decor"
    },
    {
      title: "False Ceiling Designs",
      image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=400&h=300&fit=crop",
      description: "Architectural ceiling designs with integrated lighting"
    },
    {
      title: "Kids Bedroom Designs",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      description: "Fun and functional spaces for children"
    },
    {
      title: "Balcony Designs",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop",
      description: "Transform your balcony into a relaxing retreat"
    },
    {
      title: "Dining Room Designs",
      image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=400&h=300&fit=crop",
      description: "Elegant dining spaces for memorable meals"
    },
    {
      title: "Office Designs",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
      description: "Productive and inspiring workspace solutions"
    },
    {
      title: "Staircase Designs",
      image: "https://images.unsplash.com/photo-1600566753051-6a31a4ccb4b5?w=400&h=300&fit=crop",
      description: "Stunning staircases that make a statement"
    }
  ];

  const itemsPerSlide = 4;
  const totalSlides = Math.ceil(designCategories.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleViewMore = () => {
    window.open('https://wa.me/918886663807', '_blank');
  };

  return (
    <section id="design-ideas" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Design Ideas Showcase
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse portfolio of interior design categories
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-primary hover:text-white transition-all duration-300"
            disabled={currentSlide === 0}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-primary hover:text-white transition-all duration-300"
            disabled={currentSlide === totalSlides - 1}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Design Categories Grid */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-12">
                    {designCategories
                      .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                      .map((category, index) => (
                        <Card key={index} className="hover-lift shadow-card hover:shadow-luxury group cursor-pointer border-0">
                          <CardContent className="p-0">
                            <div className="relative overflow-hidden rounded-t-lg">
                              <img 
                                src={category.image}
                                alt={category.title}
                                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-4 left-4 right-4">
                                  <Button 
                                    onClick={handleViewMore}
                                    size="sm"
                                    className="w-full bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-black"
                                  >
                                    <Eye className="w-4 h-4 mr-2" />
                                    View More
                                  </Button>
                                </div>
                              </div>
                            </div>
                            <div className="p-6">
                              <h3 className="text-lg font-semibold text-foreground mb-2">
                                {category.title}
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                {category.description}
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentSlide ? 'bg-primary' : 'bg-muted-foreground/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignIdeasSection;