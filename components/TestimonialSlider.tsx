"use client";

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  position: string;
  company: string;
  image: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    position: "CTO",
    company: "TechVision Inc.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    quote: "Working with this team has been transformative for our blockchain infrastructure. Their expertise in Web3 technologies helped us navigate complex challenges with ease."
  },
  {
    name: "Michael Chen",
    position: "Founder",
    company: "Nexus Protocol",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    quote: "The depth of knowledge this team brings to the table is unmatched. They delivered our staking platform ahead of schedule and exceeded all our expectations."
  },
  {
    name: "Elena Rodriguez",
    position: "Product Lead",
    company: "MetaBlock Solutions",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    quote: "Their innovative approach to decentralized applications has given us a competitive edge in the market. The team is responsive, professional, and truly understands the Web3 space."
  },
  {
    name: "David Thompson",
    position: "CEO",
    company: "BuildTech Construction",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    quote: "The quality of work and attention to detail exceeded our expectations. Their team delivered our construction project on time and within budget."
  },
  {
    name: "Jennifer Lee",
    position: "Operations Director",
    company: "Skyline Developers",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
    quote: "Their professionalism and expertise in the construction industry is impressive. We\'ve partnered with them on multiple projects and they never disappoint."
  }
];

const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const cardsToShow = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 8000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? testimonials.length - cardsToShow : prevIndex - 1;
      return Math.max(0, Math.min(newIndex, testimonials.length - cardsToShow));
    });
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      return newIndex > testimonials.length - cardsToShow ? 0 : newIndex;
    });
    setTimeout(() => setIsAnimating(false), 500);
  };

  const getVisibleTestimonials = () => {
    const visibleCards = [];
    for (let i = 0; i < cardsToShow; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visibleCards.push(testimonials[index]);
    }
    return visibleCards;
  };

  return (
    <section 
      className="py-16 md:py-24 relative overflow-hidden bg-white"
    >
      {/* Frosted glass overlay */}
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 
          className="text-3xl md:text-4xl font-bold text-center mb-2"
          style={{ color: '#FFBE00' }}
        >
          What Our Clients Say
        </h2>
        <div className="text-center mb-12">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            You don't just have to take our word for it—hear what our clients have to say about working with Blackbow Consult. From startups to industry leaders, their experiences reflect our commitment to excellence, trust, and Africa's financial growth. Discover their stories below.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
            {getVisibleTestimonials().map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-xl h-full flex flex-col border border-gray-200"
              >
                <div className="flex items-center mb-4">
                  <div className="relative mr-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-yellow-400">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800">{testimonial.name}</h4>
                    <p 
                      className="text-sm"
                      style={{
                        color: 'var(--accent-yellow)'
                      }}
                    >
                      {testimonial.position}, {testimonial.company}
                    </p>
                  </div>
                  <div className="ml-auto bg-yellow-400 rounded-full p-2">
                    <Quote className="w-4 h-4 text-blue-900" />
                  </div>
                </div>
                
                <p className="text-md italic flex-grow text-gray-700">
                  {`"${testimonial.quote}"`}
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={handlePrev}
              className="bg-yellow-400 text-blue-900 rounded-full p-3 hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <div className="flex gap-2 items-center">
              {Array.from({ length: testimonials.length - cardsToShow + 1 }).map((_, index) => (
                <button 
                  key={index}
                  onClick={() => {
                    if (isAnimating) return;
                    setIsAnimating(true);
                    setCurrentIndex(index);
                    setTimeout(() => setIsAnimating(false), 500);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentIndex === index ? 'bg-yellow-400 w-6' : 'bg-white/50 hover:bg-white/80'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={handleNext}
              className="bg-yellow-400 text-blue-900 rounded-full p-3 hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider; 