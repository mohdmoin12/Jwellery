import React from 'react';

const CallToAction = () => {
  return (
    <section className="py-20 bg-cover bg-center relative">
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/test1.webp')" }}

      ></div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-light text-white mb-6 tracking-wide">Begin Your Lumière Journey</h2>
        <p className="text-xl text-gray-100 mb-10 font-light">
          Experience the exceptional with a personalized consultation at one of our boutiques or schedule a virtual appointment with our diamond specialists.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-gray-900 px-8 py-3 text-lg hover:bg-gray-100 transition-colors duration-300">
            Book Appointment
          </button>
          <button className="bg-transparent border border-white text-white px-8 py-3 text-lg hover:bg-white hover:bg-opacity-10 transition-colors duration-300">
            View Locations
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
