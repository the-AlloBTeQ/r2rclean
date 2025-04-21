// app/services/residential/page.tsx
"use client";
import Link from "next/link";
import MainLayout from '@/components/layout';

export default function ResidentialCleaning() {
  const benefits = [
    {
      title: "Time Back in Your Day",
      description: "Reclaim your precious evenings and weekends. Our professionals handle the cleaning while you focus on what truly matters – family, hobbies, or simply relaxing.",
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Healthier Living Environment",
      description: "Our deep cleaning techniques and hospital-grade disinfectants eliminate allergens, bacteria, and viruses – helping your family breathe easier and stay healthier.",
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: "Consistent, Reliable Quality",
      description: "Our trained cleaning teams follow detailed checklists customized to your home, ensuring nothing is missed and your space is spotless every single time.",
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  const services = [
    {
      title: "Regular Maintenance Cleaning",
      description: "Our most popular service includes thorough cleaning of all living areas, kitchens, bathrooms, and bedrooms on a weekly, bi-weekly, or monthly schedule.",
      included: [
        "Dusting of all surfaces, furniture, and decor",
        "Vacuuming all carpets and floors",
        "Mopping hard surfaces",
        "Complete bathroom sanitization",
        "Kitchen cleaning including appliance exteriors",
        "Emptying bins and general tidying"
      ]
    },
    {
      title: "Deep Cleaning",
      description: "A comprehensive cleaning service that reaches those often-neglected areas. Perfect for seasonal cleaning or before/after special events.",
      included: [
        "All regular cleaning services, plus:",
        "Inside oven and refrigerator cleaning",
        "Cabinet fronts and interior cleaning",
        "Baseboards, crown molding, and door frame cleaning",
        "Window sill and track cleaning",
        "Scale removal from bathrooms",
        "Light fixture cleaning"
      ]
    },
    {
      title: "End of Tenancy/Move-In Cleaning",
      description: "Specialized cleaning service for when you're moving in or out, ensuring the property is immaculate for new occupants or final inspections.",
      included: [
        "All deep cleaning services, plus:",
        "Inside all cupboards and drawers",
        "Appliance deep cleaning (inside and out)",
        "Wall spot cleaning",
        "Window interior cleaning",
        "Limescale removal",
        "Carpet deep cleaning (additional fee)"
      ]
    }
  ];

  const testimonials = [
    {
      quote: "I've tried several cleaning services in Rochdale, but R2R Cleaning is simply the best. Their attention to detail is outstanding, and I love coming home to a spotless house every Friday!",
      name: "Emma Thompson",
      location: "Rochdale"
    },
    {
      quote: "As a busy parent of three, I don't have time to keep up with housework. R2R's bi-weekly service has been a lifesaver - professional, thorough, and completely reliable.",
      name: "James Wilson",
      location: "Manchester"
    }
  ];

  const faqs = [
    {
      question: "How often should I schedule residential cleaning?",
      answer: "This depends on your household's needs. For homes with children, pets, or high traffic, weekly cleaning is recommended. Many of our clients prefer bi-weekly service as a good balance, while smaller households or those with minimal usage may find monthly cleaning sufficient."
    },
    {
      question: "Do I need to be home during the cleaning?",
      answer: "Not at all! Many of our clients provide a key or access code. We're fully insured and all our staff undergo thorough background checks. If you prefer to be present for the first cleaning to provide specific instructions, many clients choose this option."
    },
    {
      question: "What cleaning products do you use?",
      answer: "We use high-quality, professional-grade cleaning products that are effective yet safe. We also offer eco-friendly options upon request. If you have specific products you prefer or if there are allergies/sensitivities in your household, we're happy to accommodate your needs."
    },
    {
      question: "How do you handle pets during cleaning?",
      answer: "We love pets! Please let us know about any pets in your home, and we'll take extra care around them. We recommend securing pets in a safe area during cleaning for their comfort and safety."
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-green-500 py-24 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Residential Cleaning Services</h1>
              <p className="text-xl mb-6">Transform your home into a spotless sanctuary with our premium cleaning services, designed to free your time and elevate your living environment.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-6 rounded transition transform hover:-translate-y-1 inline-block">
                  Get Your Free Quote
                </Link>
                <a href="#services" className="border-2 border-white hover:bg-white hover:text-blue-600 font-bold py-3 px-6 rounded transition transform hover:-translate-y-1 inline-block">
                  Explore Services
                </a>
              </div>
            </div>
            <div className="h-64 md:h-96 rounded-lg relative overflow-hidden">
              <img
                src="/residential.png" 
                alt="Beautifully cleaned living room"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Why Choose R2R for Your Home</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We deliver more than just cleaning - we provide peace of mind, time savings, and a healthier home environment for you and your loved ones.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-md text-center transition hover:shadow-lg hover:-translate-y-1">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-600 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Our Residential Cleaning Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tailored cleaning solutions to meet every need, from regular maintenance to deep cleaning and special occasions.
            </p>
          </div>

          <div className="space-y-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-blue-50 p-8">
                    <h3 className="text-2xl font-bold text-blue-600 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <Link 
                      href="/contact" 
                      className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition"
                    >
                      Book Now
                    </Link>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <h4 className="text-lg font-semibold text-blue-600 mb-3">What's Included:</h4>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {service.included.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">Need a custom cleaning solution? We're happy to create a bespoke package tailored to your specific requirements.</p>
            <Link 
              href="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full inline-flex items-center transition"
            >
              Contact For Custom Packages
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - here's what homeowners across Greater Manchester have to say about our services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-md relative">
                <div className="text-6xl absolute top-4 left-4 opacity-10 text-blue-500 font-serif">"</div>
                <p className="text-gray-700 mb-6 relative z-10">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 mr-4 flex items-center justify-center text-blue-600 font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">
              Have questions about our residential cleaning services? Find quick answers to our most commonly asked questions.
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-600 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">Have more questions? We're happy to help!</p>
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full inline-flex items-center transition">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-500 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Ready for a Cleaner, Healthier Home?</h2>
          <p className="text-xl mb-8">
            Join our satisfied customers across Greater Manchester and experience the R2R difference. Book your first cleaning session today and receive 15% off!
          </p>
          
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