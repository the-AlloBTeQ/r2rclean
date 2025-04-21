// app/page.tsx
"use client";
import React from 'react';
import Link from 'next/link';
import MainLayout from '@/components/layout';

const HomePage = () => {
  // Services data - in a real app, this might come from an API or context
  const services = [
    {
      id: 'residential',
      title: "Residential Cleaning",
      description: "Keep your home spotless with our regular cleaning services, deep cleaning, or end of tenancy solutions designed to meet your specific needs."
    },
    {
      id: 'commercial',
      title: "Commercial Cleaning",
      description: "Create a clean, healthy environment for your employees and customers with our professional commercial cleaning services for offices, retail spaces, and more."
    },
    {
      id: 'specialized',
      title: "Specialized Cleaning",
      description: "From post-construction cleanup to carpet and upholstery cleaning, our specialized services tackle even the toughest cleaning challenges."
    },
    {
      id: 'deep',
      title: "Deep Cleaning",
      description: "Our thorough deep cleaning service reaches those often-neglected areas, ensuring your space is not just clean, but hygienically pristine."
    },
    {
      id: 'carpet',
      title: "Carpet & Upholstery",
      description: "Restore your carpets and furniture to their original beauty with our professional cleaning techniques and equipment."
    },
    {
      id: 'window',
      title: "Window Cleaning",
      description: "Crystal clear windows inside and out, enhancing the appearance of your property and letting in maximum natural light."
    }
  ];

  // Areas data
  const areas = [
    { id: 'rochdale', city: "Rochdale", description: "Our headquarters and primary service area" },
    { id: 'manchester', city: "Manchester", description: "City center and surrounding areas" },
    { id: 'stockport', city: "Stockport", description: "Commercial and residential services" },
    { id: 'oldham', city: "Oldham", description: "Full service cleaning solutions" },
    { id: 'heywood', city: "Heywood", description: "Residential and commercial cleaning" },
    { id: 'bury', city: "Bury", description: "Comprehensive cleaning services" },
    { id: 'bolton', city: "Bolton", description: "Professional cleaning expertise" }
  ];

  // Use the real reviews from Checkatrade for testimonials
  const testimonials = [
    {
      id: 1,
      quote: "The job was done in a timely and professional manner.",
      name: "Customer in M28",
      position: "General Cleaning"
    },
    {
      id: 2,
      quote: "They were really receptive even when it was a bit of a challenge having to travel a long distance to get the keys and return them. Their customer service was Excellent! and the rooms really looked like a new one!",
      name: "Verified Customer in BL2",
      position: "Room Cleaning"
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white min-h-screen flex items-center">
        <div 
          className="absolute inset-0 bg-black opacity-60 z-0"
          style={{
            backgroundImage: "url('/api/placeholder/1600/900')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay'
          }}
        ></div>
        <div className="max-w-3xl mx-auto text-center px-4 z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">R2R Cleaning Services</h1>
          <p className="text-xl mb-8">From Rochdale to the Region - Spotless Results Every Time</p>
          <div className="space-x-0 space-y-2 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center">
            <Link href="/contact" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-6 rounded transition transform hover:-translate-y-1 inline-block">
              Get Free Quote
            </Link>
            <Link href="/services" className="border-2 border-white hover:bg-white hover:text-blue-600 font-bold py-3 px-6 rounded transition transform hover:-translate-y-1 inline-block">
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-600 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Comprehensive cleaning solutions for homes and businesses across Greater Manchester
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div 
                key={service.id} 
                className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition transform hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500 text-lg font-medium">{service.title}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link 
                    href={`/services/${service.id}`}
                    className="text-blue-600 font-semibold hover:text-blue-800 inline-flex items-center"
                  >
                    Learn more
                    <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/services" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full inline-flex items-center transition"
            >
              View All Services
              <svg className="w-4 h-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Areas We Serve Section */}
      <section id="locations" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-600 mb-4">Areas We Serve</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Providing professional cleaning services throughout Greater Manchester
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {areas.map((location) => (
              <Link 
                href={`/areas/${location.id}`}
                key={location.id} 
                className="bg-white rounded-lg p-4 text-center shadow transition hover:shadow-md hover:bg-blue-50"
              >
                <h3 className="text-lg font-semibold text-blue-600 mb-2">{location.city}</h3>
                <p className="text-gray-600 text-sm">{location.description}</p>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/areas" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full inline-flex items-center transition"
            >
              View Coverage Details
              <svg className="w-4 h-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-600 mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Feedback from satisfied customers across Greater Manchester
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 p-8 rounded-lg shadow-md relative">
                <div className="text-6xl absolute top-4 left-4 opacity-10 text-blue-500 font-serif">"</div>
                <p className="text-gray-700 mb-6 relative z-10">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-300 mr-4 flex items-center justify-center text-gray-600 font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/testimonials" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full inline-flex items-center transition"
            >
              Read More Testimonials
              <svg className="w-4 h-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-500 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Ready for a Spotless Space?</h2>
          <p className="text-xl mb-8">Contact us today for a free, no-obligation quote</p>
          
          <Link 
            href="/contact"
            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-full inline-flex items-center transition transform hover:-translate-y-1"
          >
            Get Your Free Quote
            <svg className="w-5 h-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </section>
    </MainLayout>
  );
};

export default HomePage;