import React, { useState } from 'react';

const JewelryConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    occasion: '',
    budget: '',
    jewelryType: '',
    preferredMetal: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    // Here you would typically send the data to your backend
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto p-8 bg-white bg-opacity-90 shadow-lg rounded-lg text-center">
        <div className="text-3xl text-gray-800 mb-4">Thank You!</div>
        <div className="text-xl text-gray-600 mb-6">
          Your consultation request has been received. Our diamond specialist will contact you within 24 hours.
        </div>
        <svg className="w-20 h-20 mx-auto text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white bg-opacity-90 shadow-xl rounded-lg">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-light text-gray-800 mb-2">Personal Jewelry Consultation</h2>
        <p className="text-gray-600">Complete this form and our diamond experts will create a custom proposal for you</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name*</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border-b border-gray-300 focus:border-amber-500 focus:outline-none bg-transparent"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border-b border-gray-300 focus:border-amber-500 focus:outline-none bg-transparent"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border-b border-gray-300 focus:border-amber-500 focus:outline-none bg-transparent"
            />
          </div>

          <div>
            <label htmlFor="occasion" className="block text-sm font-medium text-gray-700 mb-1">Occasion</label>
            <select
              id="occasion"
              name="occasion"
              value={formData.occasion}
              onChange={handleChange}
              className="w-full px-4 py-2 border-b border-gray-300 focus:border-amber-500 focus:outline-none bg-transparent"
            >
              <option value="">Select an occasion</option>
              <option value="engagement">Engagement</option>
              <option value="anniversary">Anniversary</option>
              <option value="birthday">Birthday</option>
              <option value="wedding">Wedding</option>
              <option value="self-purchase">Self Purchase</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">Budget Range</label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full px-4 py-2 border-b border-gray-300 focus:border-amber-500 focus:outline-none bg-transparent"
            >
              <option value="">Select budget range</option>
              <option value="1k-5k">$1,000 - $5,000</option>
              <option value="5k-10k">$5,000 - $10,000</option>
              <option value="10k-25k">$10,000 - $25,000</option>
              <option value="25k-50k">$25,000 - $50,000</option>
              <option value="50k+">$50,000+</option>
            </select>
          </div>

          <div>
            <label htmlFor="jewelryType" className="block text-sm font-medium text-gray-700 mb-1">Jewelry Type</label>
            <select
              id="jewelryType"
              name="jewelryType"
              value={formData.jewelryType}
              onChange={handleChange}
              className="w-full px-4 py-2 border-b border-gray-300 focus:border-amber-500 focus:outline-none bg-transparent"
            >
              <option value="">Select jewelry type</option>
              <option value="ring">Ring</option>
              <option value="necklace">Necklace</option>
              <option value="earrings">Earrings</option>
              <option value="bracelet">Bracelet</option>
              <option value="custom">Custom Design</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="preferredMetal" className="block text-sm font-medium text-gray-700 mb-1">Preferred Metal</label>
          <div className="flex flex-wrap gap-3 mt-2">
            {['White Gold', 'Yellow Gold', 'Rose Gold', 'Platinum', 'Silver'].map(metal => (
              <div key={metal} className="flex items-center">
                <input
                  type="radio"
                  id={metal}
                  name="preferredMetal"
                  value={metal}
                  checked={formData.preferredMetal === metal}
                  onChange={handleChange}
                  className="h-4 w-4 text-amber-600 focus:ring-amber-500"
                />
                <label htmlFor={metal} className="ml-2 text-sm text-gray-700">{metal}</label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Special Requests</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
            placeholder="Tell us about your dream jewelry piece..."
          ></textarea>
        </div>

        <div className="flex items-center">
          <input
            id="privacy"
            name="privacy"
            type="checkbox"
            required
            className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
          />
          <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
            I agree to the privacy policy and terms of service
          </label>
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-amber-600 text-white py-3 px-6 rounded-md hover:bg-amber-700 transition duration-300 flex items-center justify-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            Request Consultation
          </button>
        </div>
      </form>
    </div>
  );
};

export default JewelryConsultationForm;