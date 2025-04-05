import React, { useState } from 'react';
import JewelryConsultationForm from './JewelryConsultationForm'; // Import your form component

const CallToAction = () => {
  const [showForm, setShowForm] = useState(false);

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
            <button 
              onClick={openForm}
              className="bg-white text-gray-900 px-8 py-3 text-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Book Appointment
            </button>
            <button className="bg-transparent border border-white text-white px-8 py-3 text-lg hover:bg-white hover:bg-opacity-10 transition-colors duration-300">
              View Locations
            </button>
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

export default CallToAction;