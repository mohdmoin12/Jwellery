import React from 'react';

const InstagramGallery = () => {
  // Simulate Instagram posts using static images from /public
  const images = [
    '/collection1.webp',
    '/collection2.webp',
    '/collection3.webp',
    '/collection4.webp',
    '/collection5.webp',
    '/collection6.webp',
    '/collection7.webp',
    '/collection8.webp'
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light text-gray-900 mb-4 tracking-wide">Follow Our Journey</h2>
          <p className="text-gray-600">@vidhisinghfinejewels</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <div key={index} className="relative group overflow-hidden">
              <img
                src={src}
                alt={`Instagram post ${index + 1}`}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07..." />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramGallery;
