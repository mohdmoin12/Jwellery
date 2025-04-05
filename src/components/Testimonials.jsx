import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: "Alexandra C.",
      position: "New York",
      quote: "The craftsmanship is beyond compare. My engagement ring draws compliments everywhere I go.",
      image: "/Public/test1.webp",
    },
    {
      id: 2,
      name: "Jonathan M.",
      position: "London",
      quote: "The attention to detail and personalized service made selecting an anniversary gift a joy.",
      image: "/Public/test2.webp",
    },
    {
      id: 3,
      name: "Sophia L.",
      position: "Paris",
      quote: "Each piece tells a story. I cherish my Lumière collection necklace for the memories it holds.",
      image: "/Public/test3.webp",
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light text-gray-900 mb-4 tracking-wide">Client Testimonials</h2>
          <div className="w-24 h-px bg-gray-400 mx-auto"></div>
        </div>
        <div className="relative h-64">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`absolute inset-0 transition-opacity duration-1000 flex flex-col items-center text-center ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            >
              <div className="mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full mx-auto object-cover"
                />
              </div>
              <p className="text-xl text-gray-600 italic mb-4 max-w-2xl">"{testimonial.quote}"</p>
              <p className="font-medium text-gray-900">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.position}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full mx-1 ${index === currentSlide ? 'bg-gray-800' : 'bg-gray-300'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
