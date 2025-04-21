// app/review/page.tsx
"use client";
import { useState } from 'react';
import Link from 'next/link';
import MainLayout from '@/components/layout';

// Service options for the dropdown
const serviceOptions = [
  "Residential Cleaning",
  "Commercial Cleaning",
  "Deep Cleaning",
  "Carpet Cleaning",
  "Window Cleaning",
  "Specialized Cleaning",
  "End of Tenancy Cleaning"
];

export default function ReviewPage() {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    position: '',
    location: '',
    service: serviceOptions[0],
    rating: 5,
    review: '',
  });
  
  // Form submission state
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name as keyof ReviewFormData]: value
    });
  };
  
  // Handle rating selection
interface ReviewFormData {
    name: string;
    email: string;
    position: string;
    location: string;
    service: string;
    rating: number;
    review: string;
}

const handleRatingChange = (rating: number): void => {
    setFormData({
        ...formData,
        rating
    });
};
  
  // Handle form submission
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    // Validate form
    if (!formData.name || !formData.email || !formData.review) {
        setError('Please fill out all required fields.');
        setLoading(false);
        return;
    }
    
    try {
        // Here you would typically send the data to your backend/API
        // For now, we'll simulate a successful submission
        await new Promise(resolve => setTimeout(resolve, 1000));
        setSubmitted(true);
        setLoading(false);
    } catch {
        setError('Something went wrong. Please try again.');
        setLoading(false);
    }
};
  
  // Render star rating selector
  const renderStarSelector = () => {
    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => handleRatingChange(star)}
            className="focus:outline-none"
            aria-label={`Rate ${star} stars`}
          >
            <svg 
              className={`w-8 h-8 ${star <= formData.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </button>
        ))}
      </div>
    );
  };
  
  return (
    <MainLayout>
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-500 py-16 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Share Your Experience</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Your feedback helps us improve and helps others find quality cleaning services
          </p>
        </div>
      </section>

      {/* Review Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          {submitted ? (
            <div className="text-center bg-green-50 rounded-lg p-8 shadow-md">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Thank You for Your Review!</h2>
              <p className="text-gray-600 mb-6">
                We appreciate you taking the time to share your experience with us. Your feedback helps us improve our services and helps other customers make informed decisions.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                <Link 
                  href="/"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full inline-flex items-center justify-center transition"
                >
                  Return to Home
                </Link>
                <Link 
                  href="/testimonials"
                  className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-2 px-6 rounded-full inline-flex items-center justify-center transition"
                >
                  View Testimonials
                </Link>
              </div>
            </div>
          ) : (
            <div className="bg-gray-50 rounded-lg p-6 md:p-8 shadow-md">
              <h2 className="text-2xl font-bold text-blue-600 mb-6">Submit Your Review</h2>
              
              {error && (
                <div className="bg-red-50 text-red-700 p-4 rounded-md mb-6">
                  {error}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  {/* Personal Info Section */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700 mb-4">Your Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">
                          Position/Title (e.g., Homeowner, Office Manager)
                        </label>
                        <input
                          type="text"
                          id="position"
                          name="position"
                          value={formData.position}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                          Location (e.g., Manchester, Rochdale)
                        </label>
                        <input
                          type="text"
                          id="location"
                          name="location"
                          value={formData.location}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Service & Rating Section */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700 mb-4">Your Experience</h3>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                          Service Type
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        >
                          {serviceOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Rating <span className="text-red-500">*</span>
                        </label>
                        {renderStarSelector()}
                      </div>
                    </div>
                  </div>
                  
                  {/* Review Text Section */}
                  <div>
                    <label htmlFor="review" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Review <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="review"
                      name="review"
                      value={formData.review}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Share your experience with our service. What did you like? What could we improve?"
                      required
                    ></textarea>
                  </div>
                  
                  {/* Terms & Submit */}
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <input
                        id="terms"
                        name="terms"
                        type="checkbox"
                        className="h-4 w-4 mt-1 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        required
                      />
                      <label htmlFor="terms" className="ml-2 block text-sm text-gray-600">
                        I understand that my review may be published on the R2R Cleaning website and I confirm that it represents my honest opinion based on my experience.
                      </label>
                    </div>
                    
                    <div className="text-right">
                      <button
                        type="submit"
                        disabled={loading}
                        className={`bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full inline-flex items-center transition ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                      >
                        {loading ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Submitting...
                          </>
                        ) : (
                          'Submit Review'
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>
      
      {/* Privacy Note */}
      <section className="py-6 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-500">
            Your privacy is important to us. Your email will not be displayed publicly and will only be used to verify your review.
          </p>
        </div>
      </section>
    </MainLayout>
  );
}