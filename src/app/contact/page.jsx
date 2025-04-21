// src/app/contact/page.jsx
"use client";
import { useState } from 'react';
import MainLayout from '@/components/layout';

export default function Contact() {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  // Form submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  // Create mailto link with form data
  const createMailtoLink = () => {
    // Map service ID to a human-readable name
    const serviceMap = {
      'residential': 'Residential Cleaning',
      'commercial': 'Commercial Cleaning',
      'specialized': 'Specialized Cleaning',
      'deep': 'Deep Cleaning',
      'carpet': 'Carpet & Upholstery',
      'window': 'Window Cleaning',
      '': 'Not specified'
    };
    
    const serviceName = serviceMap[formData.service] || 'Not specified';
    
    // Create the email body
    const body = `
Hello,

I would like to request a quote for the following cleaning service:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service: ${serviceName}

Message:
${formData.message}

Thank you.
    `.trim();
    
    // Create the mailto link with encoded parameters
    return `mailto:quote@r2rcleaning.co.uk?subject=Quote Request from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(body)}`;
  };
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(false);
    setErrorMessage('');
    
    try {
      // Send data to our API route
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }
      
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError(true);
      setErrorMessage(error.message || 'Something went wrong. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <MainLayout>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-600 to-green-500 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Ready for a spotless space? Get in touch for a free, no-obligation quote or to discuss your cleaning needs.
          </p>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-blue-600 mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                Have questions about our services or want to schedule a cleaning? Contact us today and our team will be happy to assist you.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">0772 701 5624</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:inquiries@r2rcleaning.co.uk" className="hover:text-blue-600">
                      inquiries@r2rcleaning.co.uk
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-600">Rochdale, Greater Manchester</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="text-xl font-semibold text-blue-600 mb-4">Operating Hours</h3>
                <div className="grid grid-cols-2 gap-2 text-gray-600">
                  <div>Monday - Friday:</div>
                  <div>8:00 AM - 6:00 PM</div>
                  <div>Saturday:</div>
                  <div>9:00 AM - 4:00 PM</div>
                  <div>Sunday:</div>
                  <div>Closed</div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-blue-600 mb-6">Request a Quote</h2>
              
              {submitSuccess && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                  <p>Thank you for your quote request! Your message has been sent to our team, and we'll get back to you as soon as possible with a personalized cleaning quote.</p>
                </div>
              )}
              
              {submitError && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                  <p>{errorMessage || 'Something went wrong with your submission.'}</p>
                  <div className="mt-3">
                    <p className="font-semibold">You can also email us directly:</p>
                    <a 
                      href={createMailtoLink()}
                      className="inline-block mt-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Send Email Directly
                    </a>
                  </div>
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required 
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address <span className="text-red-500">*</span></label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required 
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number <span className="text-red-500">*</span></label>
                  <input 
                    type="tel" 
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required 
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="service" className="block text-gray-700 font-medium mb-2">Service Interested In</label>
                  <select 
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select a Service</option>
                    <option value="residential">Residential Cleaning</option>
                    <option value="commercial">Commercial Cleaning</option>
                    <option value="specialized">Specialized Cleaning</option>
                    <option value="deep">Deep Cleaning</option>
                    <option value="carpet">Carpet & Upholstery</option>
                    <option value="window">Window Cleaning</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message <span className="text-red-500">*</span></label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Sending...' : 'Get Your Free Quote'}
                </button>
                
                <p className="mt-4 text-sm text-gray-600 text-center">
                  Or email us directly at{' '}
                  <a 
                    href="mailto:quote@r2rcleaning.co.uk" 
                    className="text-blue-600 hover:underline"
                  >
                    quote@r2rcleaning.co.uk
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">Our Service Areas</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-center mb-12">
              We provide professional cleaning services throughout Rochdale and Greater Manchester, including Stockport, Oldham, Heywood, Bury, and Bolton.
            </p>
            
            {/* Map display */}
            <div className="bg-gray-200 rounded-lg h-96 overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d152562.65336814075!2d-2.317903248530648!3d53.5064037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487ba654d3882eb1%3A0x2cc7d82221c68081!2sGreater%20Manchester!5e0!3m2!1sen!2suk!4v1650000000000!5m2!1sen!2suk"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Rochdale and Greater Manchester, including Stockport, Oldham, Heywood, Bury, and Bolton."
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}