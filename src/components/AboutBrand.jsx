import React, { useState, useEffect } from 'react';

const AboutBrand = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <img src="/ourstory.webp" alt="Jewelry craftsmanship" className="w-full h-auto shadow-lg" />
          </div>
          <div>
            <h2 className="text-3xl font-light text-gray-900 mb-6 tracking-wide">Our Story</h2>
            <div className="w-24 h-px bg-gray-400 mb-8"></div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded in 2017, Vidhi jwells has established itself as a beacon of excellence in the world of luxury diamond jewelry. Our journey began in the heart of Paris, where our founder, Elise Lumière, envisioned creating pieces that would transcend time and trends.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Today, every  Vidhi jwells creation continues to embody our commitment to exceptional craftsmanship, ethically sourced diamonds, and timeless design. Each piece passes through the hands of our master artisans, who combine traditional techniques with contemporary innovation.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We believe that a diamond is not merely a gem, but a storyteller – capturing moments, emotions, and legacies that span generations. It is this philosophy that guides our approach to creating jewelry that becomes part of your personal narrative.
            </p>
            <button className="border border-gray-800 text-gray-800 px-8 py-3 hover:bg-gray-800 hover:text-white transition-colors duration-300">
              Discover Our Legacy
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBrand;
