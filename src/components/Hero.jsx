import React, { useState, useEffect } from 'react';
import JewelryConsultationForm from './JewelryConsultationForm'; // Import your form component

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const images = [
    'Diamond1.jpg',
    'Diamond2.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const openForm = () => {
    setShowForm(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when form is open
  };

  const closeForm = () => {
    setShowForm(false);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  return (
    <>
      <section className="relative h-screen overflow-hidden">
        {/* Background images with transition */}
        {images.map((image, index) => (
          <div 
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
        
        {/* Content */}
        <div className="relative z-20 h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-light text-white mb-6 tracking-wide">Timeless Elegance, Eternal Brilliance</h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 font-light">Exquisite diamond jewelry crafted for life's most precious moments</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-gray-900 px-8 py-3 text-lg hover:bg-gray-100 transition-colors duration-300">
                Explore Collection
              </button>
              <button 
                onClick={openForm}
                className="bg-transparent border border-white text-white px-8 py-3 text-lg hover:bg-white hover:bg-opacity-10 transition-colors duration-300"
              >
                Book Consultation
              </button>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center z-20">
          <div className="animate-bounce">
            <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Consultation Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            {/* Background overlay */}
            <div 
              className="fixed inset-0 transition-opacity" 
              aria-hidden="true"
              onClick={closeForm}
            >
              <div className="absolute inset-0 bg-black opacity-70"></div>
            </div>

            {/* Modal content */}
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                    <h3 className="text-2xl leading-6 font-light text-gray-900 mb-4">
                      Diamond Jewelry Consultation
                    </h3>
                    <JewelryConsultationForm onClose={closeForm} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;