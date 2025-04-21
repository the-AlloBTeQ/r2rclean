'use client';
import React, { useState } from 'react';
import type { JSX } from 'react';
import Link from 'next/link';

// Define the service interface
interface Service {
  id: string;
  title: string;
  description: string;
}

// AnimatedServiceCard Component
const AnimatedServiceCard = ({ service }: { service: Service }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getAnimation = (serviceId: string): JSX.Element | undefined => {
      switch(serviceId) {
        case 'residential':
          return (
            <div className="relative w-full h-full">
              {/* House outline */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-32 h-32 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
              </div>
              
              {/* Animated sparkles */}
              <div className={`absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400 rounded-full ${isHovered ? 'animate-ping' : ''}`}></div>
              <div className={`absolute top-1/3 right-1/3 w-2 h-2 bg-yellow-400 rounded-full ${isHovered ? 'animate-ping' : ''} delay-100`}></div>
              <div className={`absolute bottom-1/3 right-1/4 w-2 h-2 bg-yellow-400 rounded-full ${isHovered ? 'animate-ping' : ''} delay-200`}></div>
            </div>
          );
        
        case 'commercial':
          return (
            <div className="relative w-full h-full">
              {/* Building outline */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-32 h-32 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                </svg>
              </div>
              
              {/* Animated windows lighting up */}
              <div className={`absolute top-1/4 left-1/3 w-2 h-2 bg-yellow-300 rounded-sm transition-opacity duration-1000 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
              <div className={`absolute top-1/4 right-1/3 w-2 h-2 bg-yellow-300 rounded-sm transition-opacity duration-700 delay-100 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
              <div className={`absolute top-1/2 left-1/3 w-2 h-2 bg-yellow-300 rounded-sm transition-opacity duration-700 delay-200 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
              <div className={`absolute top-1/2 right-1/3 w-2 h-2 bg-yellow-300 rounded-sm transition-opacity duration-700 delay-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
            </div>
          );
          
        case 'specialized':
          return (
            <div className="relative w-full h-full">
              {/* Tools outline */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-32 h-32 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                </svg>
              </div>
              
              {/* Animated cleaning motion */}
              <div className={`absolute w-16 h-1 bg-green-400 rounded-full transform ${isHovered ? 'translate-y-0 opacity-100' : '-translate-y-6 opacity-0'} transition-all duration-700`} style={{ top: '30%', left: '30%' }}></div>
              <div className={`absolute w-16 h-1 bg-green-400 rounded-full transform ${isHovered ? 'translate-y-0 opacity-100' : '-translate-y-6 opacity-0'} transition-all duration-700 delay-200`} style={{ top: '40%', left: '40%' }}></div>
              <div className={`absolute w-16 h-1 bg-green-400 rounded-full transform ${isHovered ? 'translate-y-0 opacity-100' : '-translate-y-6 opacity-0'} transition-all duration-700 delay-400`} style={{ top: '50%', left: '30%' }}></div>
            </div>
          );
          
        case 'deep':
          return (
            <div className="relative w-full h-full">
              {/* Magnifying glass outline */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-32 h-32 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </div>
              
              {/* Animated zoom effect */}
              <div className={`absolute inset-0 border-2 border-blue-400 rounded-full transform scale-0 ${isHovered ? 'scale-75 opacity-0' : 'scale-0 opacity-100'} transition-all duration-1000`} style={{ top: '25%', left: '25%', width: '50%', height: '50%' }}></div>
              <div className={`absolute inset-0 border-2 border-blue-400 rounded-full transform scale-0 ${isHovered ? 'scale-75 opacity-0' : 'scale-0 opacity-100'} transition-all duration-1000 delay-300`} style={{ top: '25%', left: '25%', width: '50%', height: '50%' }}></div>
            </div>
          );
          
        case 'carpet':
          return (
            <div className="relative w-full h-full">
              {/* Carpet roller outline */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-32 h-32 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="8" width="18" height="8" rx="1" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="7" y1="8" x2="7" y2="16" />
                  <line x1="11" y1="8" x2="11" y2="16" />
                  <line x1="15" y1="8" x2="15" y2="16" />
                  <line x1="19" y1="8" x2="19" y2="16" />
                </svg>
              </div>
              
              {/* Animated cleaning wave */}
              <div className="absolute left-0 right-0 bottom-1/2 flex justify-around">
                <div className={`w-4 h-1 bg-pink-500 rounded ${isHovered ? 'animate-bounce' : ''}`} style={{ animationDuration: '1s' }}></div>
                <div className={`w-4 h-1 bg-pink-500 rounded ${isHovered ? 'animate-bounce' : ''}`} style={{ animationDuration: '1.1s' }}></div>
                <div className={`w-4 h-1 bg-pink-500 rounded ${isHovered ? 'animate-bounce' : ''}`} style={{ animationDuration: '0.9s' }}></div>
                <div className={`w-4 h-1 bg-pink-500 rounded ${isHovered ? 'animate-bounce' : ''}`} style={{ animationDuration: '1.2s' }}></div>
              </div>
            </div>
          );
          
        case 'window':
          return (
            <div className="relative w-full h-full">
              {/* Window outline */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-32 h-32 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="4" y="4" width="16" height="16" rx="1" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="12" y1="4" x2="12" y2="20" />
                </svg>
              </div>
              
              {/* Animated wiping effect */}
              <div className={`absolute inset-0 bg-blue-200 opacity-20 transform ${isHovered ? 'translate-y-full' : 'translate-y-0'} transition-all duration-1000`}></div>
              <div className={`absolute top-1/4 left-1/4 w-2 h-2 bg-blue-300 rounded-full ${isHovered ? 'animate-ping' : ''}`}></div>
              <div className={`absolute top-1/4 right-1/4 w-2 h-2 bg-blue-300 rounded-full ${isHovered ? 'animate-ping' : ''} delay-100`}></div>
            </div>
          );
          
        default:
          return (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-gray-400 text-lg font-medium">{service.title}</div>
            </div>
          );
      }
    };

  return (
    <div 
      className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition transform hover:-translate-y-2 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full h-48 relative bg-gray-100">
        {getAnimation(service.id)}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-blue-600 mb-2">{service.title}</h3>
        <p className="text-gray-600 mb-4">{service.description}</p>
        <a 
          href={`/services/${service.id}`}
          className="text-blue-600 font-semibold hover:text-blue-800 inline-flex items-center"
        >
          Learn more
          <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  );
};

// Define Location interface
interface Location {
  id: string;
  city: string;
  description: string;
}

// Location Card Component
const LocationCard = ({ location }: { location: Location }) => {
  return (
    <a 
      href={`/areas/${location.id}`}
      className="bg-white rounded-lg p-4 text-center shadow transition hover:shadow-md hover:bg-blue-50"
    >
      <h3 className="text-lg font-semibold text-blue-600 mb-2">{location.city}</h3>
      <p className="text-gray-600 text-sm">{location.description}</p>
    </a>
  );
};

// Full Page Component
const R2RCleaningPage = () => {
  // Data for services and areas
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

  const areas = [
    { id: 'rochdale', city: "Rochdale", description: "Our headquarters and primary service area" },
    { id: 'manchester', city: "Manchester", description: "City center and surrounding areas" },
    { id: 'stockport', city: "Stockport", description: "Commercial and residential services" },
    { id: 'oldham', city: "Oldham", description: "Full service cleaning solutions" },
    { id: 'heywood', city: "Heywood", description: "Residential and commercial cleaning" },
    { id: 'bury', city: "Bury", description: "Comprehensive cleaning services" },
    { id: 'bolton', city: "Bolton", description: "Professional cleaning expertise" }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <header className="bg-gradient-to-r from-blue-600 to-green-500 text-white shadow-md">
        <div className="container mx-auto px-4 py-4">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold">R2R</span>
              <span className="text-2xl font-bold text-yellow-400"> Cleaning Services</span>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="hover:text-yellow-300 transition">Home</Link>
              <Link href="/" className="hover:text-yellow-300 transition">Home</Link>
              <a href="/services" className="hover:text-yellow-300 transition">Services</a>
              <a href="/testimonials" className="hover:text-yellow-300 transition">Testimonials</a>
              <a href="/contact" className="hover:text-yellow-300 transition">Contact</a>
            </nav>
            <div className="md:hidden">
              <button className="text-white hover:text-yellow-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-green-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="max-w-3xl mx-auto text-center px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">R2R Cleaning Services</h1>
          <p className="text-xl mb-8">From Rochdale to the Region - Spotless Results Every Time</p>
          <div className="space-x-0 space-y-2 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center">
            <a href="/contact" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-6 rounded transition transform hover:-translate-y-1 inline-block">
              Get Free Quote
            </a>
            <a href="/services" className="border-2 border-white hover:bg-white hover:text-blue-600 font-bold py-3 px-6 rounded transition transform hover:-translate-y-1 inline-block">
              Our Services
            </a>
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
              <AnimatedServiceCard key={service.id} service={service} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="/services" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full inline-flex items-center transition"
            >
              View All Services
              <svg className="w-4 h-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
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
              <LocationCard key={location.id} location={location} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-500 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Ready for a Spotless Space?</h2>
          <p className="text-xl mb-8">Contact us today for a free, no-obligation quote</p>
          
          <a 
            href="/contact"
            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-full inline-flex items-center transition transform hover:-translate-y-1"
          >
            Get Your Free Quote
            <svg className="w-5 h-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">R2R Cleaning Services</h3>
              <p className="text-gray-400 mb-4">From Rochdale to the Region - providing professional cleaning services throughout Greater Manchester.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Our Services</h3>
              <ul className="space-y-2">
                <li><a href="/services/residential" className="text-gray-400 hover:text-white transition">Residential Cleaning</a></li>
                <li><a href="/services/commercial" className="text-gray-400 hover:text-white transition">Commercial Cleaning</a></li>
                <li><a href="/services/specialized" className="text-gray-400 hover:text-white transition">Specialized Cleaning</a></li>
                <li><a href="/services/deep" className="text-gray-400 hover:text-white transition">Deep Cleaning</a></li>
                <li><a href="/services/carpet" className="text-gray-400 hover:text-white transition">Carpet & Upholstery</a></li>
                <li><a href="/services/window" className="text-gray-400 hover:text-white transition">Window Cleaning</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="h-6 w-6 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-400">Rochdale, Greater Manchester</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-400">0772 701 5624</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-400">info@r2rcleaning.co.uk</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-10 pt-6 text-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} R2R Cleaning Services. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default R2RCleaningPage;