import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      address: "Srikakulam",
      rating: 5,
      testimonial: "PR Group transformed our home completely. The interior design is stunning and the construction quality is top-notch. They delivered on time and within budget!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      project: "Complete Home Interior & Renovation"
    },
    {
      name: "Priya Sharma",
      address: "Visakhapatnam",
      rating: 5,
      testimonial: "Excellent work on our modular kitchen! The team was professional, and the final result exceeded our expectations. Highly recommend PR Group for interior projects.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b332c725?w=100&h=100&fit=crop&crop=face",
      project: "Modular Kitchen Design"
    },
    {
      name: "Venkat Rao",
      address: "Vizianagaram",
      rating: 5,
      testimonial: "Built my dream house with PR Group. Their attention to detail and quality of construction is exceptional. The team is reliable and transparent in all dealings.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      project: "Villa Construction"
    },
    {
      name: "Lakshmi Devi",
      address: "Palakonda",
      rating: 5,
      testimonial: "Amazing renovation work! They preserved the traditional charm while adding modern amenities. Professional team with great customer service.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      project: "Heritage Home Renovation"
    },
    {
      name: "Suresh Babu",
      address: "Srikakulam",
      rating: 5,
      testimonial: "PR Group delivered our office space on time with exceptional quality. The design is modern and functional. Great value for money!",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      project: "Commercial Office Interior"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-primary fill-primary' : 'text-muted-foreground'}`}
      />
    ));
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real testimonials from satisfied customers across Andhra Pradesh
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-primary hover:text-white transition-all duration-300 -ml-6"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-primary hover:text-white transition-all duration-300 -mr-6"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Testimonial Card */}
          <Card className="shadow-luxury border-0">
            <CardContent className="p-12">
              <div className="text-center mb-8">
                <Quote className="w-12 h-12 text-primary mx-auto mb-6" />
                <p className="text-xl text-foreground leading-relaxed mb-8 italic">
                  "{testimonials[currentTestimonial].testimonial}"
                </p>
                <div className="flex justify-center mb-6">
                  {renderStars(testimonials[currentTestimonial].rating)}
                </div>
              </div>

              <div className="flex items-center justify-center space-x-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage 
                    src={testimonials[currentTestimonial].avatar} 
                    alt={testimonials[currentTestimonial].name}
                  />
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    {testimonials[currentTestimonial].name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <h4 className="text-xl font-bold text-foreground">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-muted-foreground">
                    {testimonials[currentTestimonial].address}
                  </p>
                  <p className="text-sm text-primary font-medium">
                    {testimonials[currentTestimonial].project}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Testimonial Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentTestimonial ? 'bg-primary' : 'bg-muted-foreground/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;