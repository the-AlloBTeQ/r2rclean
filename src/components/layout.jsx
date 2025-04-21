
"use client";
import { useState } from 'react';
import Link from 'next/link';

const MainLayout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-green-500 text-white fixed w-full z-50 shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            R2R <span className="text-yellow-400">Cleaning Services</span>
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li><Link href="/" className="hover:text-yellow-400 transition-colors font-medium">Home</Link></li>
              <li><Link href="/services" className="hover:text-yellow-400 transition-colors font-medium">Services</Link></li>
             
              <li><Link href="/testimonials" className="hover:text-yellow-400 transition-colors font-medium">Testimonials</Link></li>
              <li><Link href="/contact" className="hover:text-yellow-400 transition-colors font-medium">Contact</Link></li>
            </ul>
          </nav>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-blue-600 pb-4 px-4">
            <ul className="space-y-2">
              <li><Link href="/" className="block hover:text-yellow-400 transition-colors py-2" onClick={toggleMenu}>Home</Link></li>
              <li><Link href="/services" className="block hover:text-yellow-400 transition-colors py-2" onClick={toggleMenu}>Services</Link></li>
              <li><Link href="/areas" className="block hover:text-yellow-400 transition-colors py-2" onClick={toggleMenu}>Areas</Link></li>
              <li><Link href="/testimonials" className="block hover:text-yellow-400 transition-colors py-2" onClick={toggleMenu}>Testimonials</Link></li>
              <li><Link href="/contact" className="block hover:text-yellow-400 transition-colors py-2" onClick={toggleMenu}>Contact</Link></li>
            </ul>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-yellow-400 mb-4">R2R Cleaning Services</h3>
              <p className="text-gray-400">
                Professional cleaning services across Greater Manchester. From Rochdale to the Region - Spotless Results Every Time.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-yellow-400 mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/services/residential" className="hover:text-white transition">Residential Cleaning</Link></li>
                <li><Link href="/services/commercial" className="hover:text-white transition">Commercial Cleaning</Link></li>
                <li><Link href="/services/specialized" className="hover:text-white transition">Specialized Cleaning</Link></li>
                <li><Link href="/services/deep" className="hover:text-white transition">Deep Cleaning</Link></li>
                <li><Link href="/services/carpet" className="hover:text-white transition">Carpet & Upholstery</Link></li>
                <li><Link href="/services/window" className="hover:text-white transition">Window Cleaning</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-yellow-400 mb-4">Areas Served</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Rochdale </li>
                <li >Manchester</li>
                <li >Stockport</li>
                <li>Oldham</li>
                <li>Heywood</li>
                <li>Bury</li>
                <li >Bolton</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-yellow-400 mb-4">Contact Us</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Phone: 0772 701 5624</li>
                <li>Email: inquiries@r2rcleaning.co.uk</li>
                <li>Address: Rochdale, Greater Manchester</li>
              </ul>
              <div className="mt-4 flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition" aria-label="Facebook">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition" aria-label="Instagram">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0z" />
                    <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition" aria-label="Twitter">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} R2R Cleaning Services. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;