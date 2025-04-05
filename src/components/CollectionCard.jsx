import React from 'react';

const CollectionCard = ({ collection }) => {
  return (
    <div className="group">
      <div className="relative overflow-hidden mb-4">
        <img 
          src={collection.image} 
          alt={collection.title} 
          className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
          <button className="bg-white text-gray-900 px-6 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            View Collection
          </button>
        </div>
      </div>
      <h3 className="text-xl font-medium text-gray-900 mb-2">{collection.title}</h3>
      <p className="text-gray-600">{collection.description}</p>
    </div>
  );
};

export default CollectionCard;
