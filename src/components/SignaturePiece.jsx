import React from 'react';

const SignaturePiece = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light mb-4 tracking-wide">The Celestial Collection</h2>
          <div className="w-24 h-px bg-gray-400 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-light mb-6">Inspired by the night sky</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Our newest collection draws inspiration from the cosmos, featuring meticulously placed diamonds that mirror the constellations. Each piece captures the mystery and boundless beauty of the universe.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Crafted with rare blue diamonds and set in platinum, the Celestial Collection represents the pinnacle of our artistry and innovation. Limited to just 50 pieces worldwide, this collection exemplifies exclusivity and exceptional beauty.
            </p>
            <button className="bg-white text-gray-900 px-8 py-3 hover:bg-gray-200 transition-colors duration-300">
              Explore the Celestial Collection
            </button>
          </div>
          <div>
            <img src="/Public/card.webp" alt="Celestial Collection" className="w-full h-auto shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignaturePiece;