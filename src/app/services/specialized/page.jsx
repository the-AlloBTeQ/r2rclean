// app/services/specialized/page.tsx
"use client";
import Link from 'next/link';
import MainLayout from '@/components/layout';

export default function SpecializedCleaning() {
  const specializedServices = [
    {
      title: "Post-Construction Cleaning",
      description: "Transform construction sites into pristine, move-in ready spaces with our thorough post-construction cleaning service.",
      details: [
        "Removal of construction dust and debris",
        "Fine dust removal from all surfaces",
        "HEPA vacuuming of all areas",
        "Window track and frame cleaning",
        "Cabinet and drawer interior cleaning",
        "Light fixture dusting and cleaning",
        "HVAC vent cleaning",
        "Final surface polishing and inspection"
      ]
    },
    {
      title: "Trauma & Biohazard Cleaning",
      description: "Professional, discreet, and compassionate cleaning services for sensitive situations requiring specialized expertise.",
      details: [
        "Certified biohazard cleaning technicians",
        "Full compliance with health & safety regulations",
        "Medical-grade disinfection protocols",
        "Proper waste removal and disposal",
        "Odor neutralization treatments",
        "24/7 emergency response",
        "Discreet and respectful service",
        "Comprehensive sanitization verification"
      ]
    },
    {
      title: "Hoarder Clean-up",
      description: "Restoring homes and properties affected by hoarding with sensitivity, thoroughness, and respect.",
      details: [
        "Initial property assessment",
        "Customized clean-up plan",
        "Systematic item sorting and removal",
        "Safe disposal of hazardous materials",
        "Deep cleaning of revealed surfaces",
        "Disinfection and sanitization",
        "Odor elimination treatment",
        "Final inspection and verification"
      ]
    },
    {
      title: "Fire & Water Damage Restoration",
      description: "Comprehensive cleaning and restoration after fire, smoke, or water damage to return your property to pre-damage condition.",
      details: [
        "Emergency response service",
        "Water extraction and drying",
        "Smoke and soot removal",
        "Odor neutralization",
        "Structural cleaning",
        "Content cleaning and restoration",
        "Mold prevention treatment",
        "Coordination with insurance companies"
      ]
    }
  ];

  const whyChooseUs = [
    {
      title: "Specialized Expertise",
      description: "Our technicians receive specialized training for each unique cleaning challenge, ensuring the right techniques and solutions are applied every time.",
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: "Advanced Equipment",
      description: "We invest in industrial-grade equipment specifically designed for challenging cleaning scenarios that regular cleaning tools simply cannot handle.",
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    },
    {
      title: "Compliance & Safety",
      description: "We strictly adhere to industry regulations and safety protocols, including proper handling and disposal of hazardous materials and waste.",
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Compassionate Approach",
      description: "We understand the emotional weight of many specialized cleaning situations and approach each job with sensitivity, discretion, and respect.",
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    }
  ];

  const testimonials = [
    {
      quote: "After a fire damaged our home, R2R Cleaning's specialized team came in and truly saved the day. They were professional, thorough, and incredibly supportive during a difficult time. Our home now looks and smells like the fire never happened.",
      name: "Thomas Reynolds",
      location: "Stockport",
    },
    {
      quote: "The R2R team handled my father's hoarding situation with remarkable compassion and professionalism. They worked systematically through the property, helping us salvage precious items while thoroughly cleaning and sanitizing the home. I cannot thank them enough.",
      name: "Jennifer Howard",
      location: "Bury",
    },
  ];

  const process = [
    {
      title: "Initial Assessment",
      description: "We begin with a detailed on-site evaluation to assess the specific challenges, scope, and requirements of your specialized cleaning need.",
    },
    {
      title: "Customized Plan",
      description: "Based on our assessment, we develop a comprehensive cleaning strategy tailored to your specific situation and requirements.",
    },
    {
      title: "Safety Preparation",
      description: "We implement necessary safety measures and prepare the site with appropriate equipment, barriers, and protective gear.",
    },
    {
      title: "Specialized Cleaning",
      description: "Our trained technicians execute the cleaning plan using specialized equipment, techniques, and cleaning agents.",
    },
    {
      title: "Waste Management",
      description: "All waste materials are properly categorized, contained, and removed according to relevant regulations and best practices.",
    },
    {
      title: "Final Verification",
      description: "We conduct a thorough inspection to ensure all areas meet our high standards and your specific requirements.",
    },
  ];

  const faq = [
    {
      question: "How quickly can you respond to emergency cleaning situations?",
      answer: "We offer 24/7 emergency response for urgent specialized cleaning needs such as flood damage, trauma scenes, or immediate biohazard situations. In most cases, our team can be on-site within 2-4 hours of your call."
    },
    {
      question: "Are your specialized cleaning services insured?",
      answer: "Absolutely. R2R Cleaning carries comprehensive insurance coverage including public liability, professional indemnity, and specific coverage for biohazard and trauma cleaning. We're happy to provide insurance details as needed."
    },
    {
      question: "Do you work with insurance companies for restoration cleaning?",
      answer: "Yes, we regularly coordinate with insurance providers for post-disaster cleaning and restoration services. We can assist with documentation, provide detailed reports, and work directly with your insurance adjuster to streamline the claims process."
    },
    {
      question: "How do you handle confidentiality in sensitive cleaning situations?",
      answer: "We maintain strict confidentiality protocols for all specialized cleaning services. Our staff sign confidentiality agreements, we use unmarked vehicles when requested, and we ensure discreet service delivery at all times."
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-800 to-indigo-600 py-24 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Specialized Cleaning Services</h1>
              <p className="text-xl mb-6">Expert solutions for challenging cleaning scenarios that require specialized equipment, techniques, and expertise.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-6 rounded transition transform hover:-translate-y-1 inline-block">
                  Get Specialized Assistance
                </Link>
                <a href="#services" className="border-2 border-white hover:bg-white hover:text-blue-800 font-bold py-3 px-6 rounded transition transform hover:-translate-y-1 inline-block">
                  View Our Services
                </a>
              </div>
            </div>
            <div className="h-64 md:h-96 rounded-lg relative bg-white/10 backdrop-blur-sm overflow-hidden">
            <img
                src="/specialised.png" 
                alt="Beautifully cleaned living room"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Specialized Cleaning Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              When standard cleaning isn't enough, our specialized services address complex, challenging, and unusual cleaning scenarios.
            </p>
          </div>

          <div className="space-y-12">
            {specializedServices.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-blue-50 p-8">
                    <h3 className="text-2xl font-bold text-blue-800 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <Link 
                      href="/contact" 
                      className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded transition"
                    >
                      Request Service
                    </Link>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <h4 className="text-lg font-semibold text-blue-800 mb-3">Our Approach Includes:</h4>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {service.details.map((item, i) => (
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
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Why Choose R2R for Specialized Cleaning</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Specialized cleaning requires more than standard cleaning skills. Here's what sets our expertise apart:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center transition hover:shadow-lg hover:-translate-y-1">
                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Specialized Cleaning Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A methodical approach ensures effective and safe specialized cleaning for even the most challenging situations:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {process.map((step, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-start">
                  <div className="bg-blue-700 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-800 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Client Experiences</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See how our specialized cleaning services have helped clients through challenging situations:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md relative">
                <div className="text-6xl absolute top-4 left-4 opacity-10 text-blue-500 font-serif">"</div>
                <p className="text-gray-700 mb-6 relative z-10">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 mr-4 flex items-center justify-center text-blue-700 font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">
              Answers to common questions about our specialized cleaning services:
            </p>
          </div>
          
          <div className="space-y-6">
            {faq.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-800 mb-3">{item.question}</h3>
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Need Specialized Cleaning Solutions?</h2>
          <p className="text-xl mb-8">
            Our expert team is ready to address your most challenging cleaning situations with professional expertise, advanced equipment, and compassionate service.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-full inline-flex items-center transition transform hover:-translate-y-1"
            >
              Request a Consultation
              <svg className="w-5 h-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
            
            <a 
              href="tel:01610000000"
              className="bg-white hover:bg-gray-100 text-blue-800 font-bold py-3 px-8 rounded-full inline-flex items-center transition transform hover:-translate-y-1"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              24/7 Emergency Hotline
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}