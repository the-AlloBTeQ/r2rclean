// app/testimonials/page.tsx
"use client";
import { useState } from 'react';
import Link from 'next/link';
import MainLayout from '@/components/layout';

// Real testimonials data from Checkatrade
const testimonials = [
  {
    id: 1,
    quote: "The job was done in a timely and professional manner.",
    name: "Customer in M28",
    position: "General Cleaning of the house",
    service: "Residential Cleaning",
    rating: 9.67,
    date: "Posted 25 March"
  },
  {
    id: 2,
    quote: "They were really receptive even when it was a bit of a challenge having to travel a long distance to get the keys and return them. Their customer service was Excellent! and the rooms really looked like a new one!",
    name: "Verified Customer in BL2",
    position: "Room Cleaning",
    service: "Residential Cleaning",
    rating: 10,
    date: "Posted 18 March"
  },
  {
    id: 3,
    quote: "Excellent work done. My house looks like brand new. Good communication by the company.",
    name: "Verified Customer in OL4",
    position: "Full house Cleaning",
    service: "Residential Cleaning",
    rating: 10,
    date: "Posted 11 February"
  }
];

// Service categories for filtering
const serviceCategories = [
  "All Services",
  "Residential Cleaning",
  "Commercial Cleaning",
  "Deep Cleaning",
  "Carpet Cleaning",
  "Window Cleaning",
  "Specialized Cleaning",
  "End of Tenancy Cleaning"
];

// Stats for the review summary section - based on your actual reviews
const reviewStats = {
  averageRating: 9.9, // Average of your 3 real reviews (9.67 + 10 + 10) / 3
  totalReviews: 3,
  ratingDistribution: [
    { stars: 5, percentage: 100 }, // Converting 10/10 to 5-star scale
    { stars: 4, percentage: 0 },
    { stars: 3, percentage: 0 },
    { stars: 2, percentage: 0 },
    { stars: 1, percentage: 0 }
  ]
}; 

export default function TestimonialsPage() {
  const [selectedService, setSelectedService] = useState("All Services");

  // Filter testimonials based on selected service
  const filteredTestimonials = selectedService === "All Services" 
    ? testimonials 
    : testimonials.filter(t => t.service === selectedService);

  // Function to render star rating
  const renderStars = (rating: number) => {
    // Convert the 10-point scale to 5-star scale
    const normalizedRating = Math.round((rating / 10) * 5);
    
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <svg 
            key={i} 
            className={`w-5 h-5 ${i < normalizedRating ? 'text-yellow-400' : 'text-gray-300'}`} 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  // Handle Checkatrade review link
  const openCheckatrade = () => {
    window.open('https://www.checkatrade.com/give-feedback/trades/r2rcleaningcompany', '_blank');
  };

  return (
    <MainLayout>
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-500 py-16 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Customer Testimonials</h1>
          <p className="text-xl max-w-3xl mx-auto">
            See what our satisfied customers have to say about our cleaning services
          </p>
        </div>
      </section>

      {/* Review Summary Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-gray-50 rounded-xl p-6 md:p-8 shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Average Rating */}
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-600 mb-2">{reviewStats.averageRating.toFixed(1)}</div>
                <div className="flex justify-center mb-2">
                  {renderStars(reviewStats.averageRating)}
                </div>
                <p className="text-gray-600">Average rating based on {reviewStats.totalReviews} verified reviews</p>
              </div>
              
              {/* Rating Distribution */}
              <div className="col-span-2">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Rating Distribution</h3>
                <div className="space-y-2">
                  {reviewStats.ratingDistribution.map((item) => (
                    <div key={item.stars} className="flex items-center">
                      <div className="w-12 text-sm text-gray-600">{item.stars} stars</div>
                      <div className="w-full ml-4">
                        <div className="overflow-hidden h-4 bg-gray-200 rounded-full">
                          <div 
                            className="h-full bg-yellow-400 rounded-full" 
                            style={{ width: `${item.percentage}%` }} 
                          />
                        </div>
                      </div>
                      <div className="w-12 text-right text-sm text-gray-600">{item.percentage}%</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Write a Review CTA */}
            <div className="mt-8 text-center">
              <p className="text-gray-700 mb-4">Had a great experience with our service? We&#39;d love to hear from you!</p>
              <button
                onClick={openCheckatrade}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full inline-flex items-center transition"
              >
                Write a Review on Checkatrade
                <svg className="w-4 h-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Checkatrade Widget Section */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Our Verified Checkatrade Reviews</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See our verified reviews on Checkatrade, where we maintain our high-quality standards.
            </p>
          </div>
          
          {/* Checkatrade Widget */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.checkatrade.com/Widget/Widget.Reviews?id=r2rcleaningcompany"
                title="Checkatrade Reviews"
                className="w-full h-full border-0"
              ></iframe>
            </div>
            <div className="text-center mt-4">
              <a 
                href="https://www.checkatrade.com/trades/r2rcleaningcompany" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
              >
                View our full Checkatrade profile
                <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Customer Testimonials</h2>
            <div className="flex flex-wrap gap-2">
              {serviceCategories.map((service) => (
                <button
                  key={service}
                  onClick={() => setSelectedService(service)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                    selectedService === service
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {service}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 p-6 rounded-lg shadow-md relative">
                {/* Rating display */}
                <div className="mb-4 flex items-center">
                  <span className="text-xl font-bold text-blue-600 mr-2">{testimonial.rating.toFixed(1)}/10</span>
                  <div className="ml-2">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
                
                {/* Service type tag */}
                <div className="absolute top-6 right-6 z-20">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                    {testimonial.position}
                  </span>
                </div>
                
                {/* Quote */}
                <div className="text-6xl absolute top-4 left-4 opacity-10 text-blue-500 font-serif">&quot;</div>
                <p className="text-gray-700 mb-6 relative z-10 pt-6">{testimonial.quote}</p>
                
                {/* Author */}
                <div className="flex items-center mt-4">
                  <div className="w-12 h-12 rounded-full bg-gray-300 mr-4 flex items-center justify-center text-gray-600 font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600">{testimonial.name}</h4>
                    <p className="text-gray-500 text-xs">{testimonial.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* No results message */}
          {filteredTestimonials.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">No reviews found for this service category. Please try another filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Why Our Customers Trust Us</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              We&apos;re committed to providing reliable, high-quality cleaning services to all our clients
            </p>
          </div>
          
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 mx-auto mb-4 text-blue-600">
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Vetted Staff</h3>
              <p className="text-gray-600">Our cleaning professionals undergo thorough background checks and extensive training.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 mx-auto mb-4 text-blue-600">
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Satisfaction Guarantee</h3>
              <p className="text-gray-600">If you&apos;re not completely satisfied with our service, we&apos;ll make it right or refund your money.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-500 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">Join Our Satisfied Customers</h2>
          <p className="text-xl mb-8">Experience our professional cleaning services for yourself</p>
          
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
}