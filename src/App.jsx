import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedCollections from './components/FeaturedCollections';
// import AboutBrand from './components/AboutBrand';
// import SignaturePiece from './components/SignaturePiece';
// import Testimonials from './components/Testimonials';
// import CallToAction from './components/CallToAction';
// import InstagramGallery from './components/InstagramGallery';
// import Footer from './components/Footer';
import AboutBrand from './components/AboutBrand';
import SignaturePiece from './components/SignaturePiece';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import InstagramGallery from './components/InstagramGallery';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="font-serif">
      <Navbar/>
      <Hero />
      <FeaturedCollections />
      <AboutBrand />
      <SignaturePiece /> 
      <Testimonials />
      <CallToAction />
      <InstagramGallery />
      <Footer />
     
    </div>
  );
};

export default App;