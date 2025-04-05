import React from 'react';
import CollectionCard from './CollectionCard';

const FeaturedCollections = () => {
  const featuredCollections = [
    {
      id: 1,
      title: "Eternal Radiance",
      description: "Timeless pieces that capture the essence of everlasting love.",
      image: "/Public/collection1.webp",
    },
    {
      id: 2,
      title: "Modern Brilliance",
      description: "Contemporary designs for the bold and sophisticated.",
      image: "/Public/collection2.webp",
    },
    {
      id: 3,
      title: "Royal Heritage",
      description: "Exquisite creations inspired by historical royal collections.",
      image: "/Public/collection4.webp",
    }
  ];

  return (
    <section id="collections" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light text-gray-900 mb-4 tracking-wide">Signature Collections</h2>
          <div className="w-24 h-px bg-gray-400 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredCollections.map((collection) => (
            <CollectionCard key={collection.id} collection={collection} />
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="border border-gray-800 text-gray-800 px-8 py-3 hover:bg-gray-800 hover:text-white transition-colors duration-300">
            View All Collections
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;

