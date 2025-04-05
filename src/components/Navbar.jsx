import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white bg-opacity-90 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand Name */}
          <div className="flex-shrink-0 flex items-center">
            <div className="flex items-center">
              {/* Logo Image - Replace 'logo.png' with your actual logo path */}
              {/* <img 
                src="/logo.png" 
                alt="VIDHI JWELS Logo"
                className="h-10 w-10 mr-2" // Adjust size as needed
              /> */}
              <span className="text-2xl font-light tracking-wider text-gray-800">VIDHI JWELS</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#collections" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Collections</a>
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Our Story</a>
              <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Testimonials</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Contact</a>
              <button className="bg-black text-white px-4 py-2 rounded-none hover:bg-gray-800 transition-colors duration-300">Shop Now</button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              className="text-gray-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="#collections" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Collections</a>
            <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Our Story</a>
            <a href="#testimonials" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Testimonials</a>
            <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Contact</a>
            <button className="block w-full text-left px-3 py-2 bg-black text-white hover:bg-gray-800">Shop Now</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;