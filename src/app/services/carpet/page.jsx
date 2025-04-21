// app/services/carpet/page.tsx
"use client";
import Link from 'next/link';
import Image from 'next/image';
import MainLayout from '@/components/layout';

export default function CarpetUpholstery() {
  const keyFeatures = [
    {
      title: "Hot Water Extraction",
      description: "Our powerful hot water extraction method removes deeply embedded dirt, allergens, and stains from your carpets and upholstery without leaving residue.",
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Safe For All Fabrics",
      description: "We use specialized techniques and cleaning solutions tailored to different fabric types, ensuring effective cleaning without damage.",
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Stain & Odor Removal",
      description: "Our specialized treatments target stubborn stains and persistent odors, leaving your carpets and furniture fresh and looking like new.",
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    }
  ];

  const cleaningTypes = [
    {
      title: "Residential Carpet Cleaning",
      description: "Restore your home's carpets to like-new condition with our professional cleaning service.",
      included: [
        "Pre-treatment of visible stains and high-traffic areas",
        "Hot water extraction deep cleaning",
        "Spot treatment for stubborn stains",
        "Quick-dry technology",
        "Eco-friendly deodorizing",
        "Carpet fiber protection (optional)",
        "Post-cleaning grooming"
      ]
    },
    {
      title: "Commercial Carpet Cleaning",
      description: "Maintain a professional appearance and extend the life of your business's carpet investment.",
      included: [
        "Assessment of high-traffic pattern areas",
        "Commercial-grade cleaning solutions",
        "Deep extraction cleaning",
        "Stain guard application",
        "Weekend and after-hours service",
        "Minimal disruption to business operations",
        "Scheduled maintenance programs available"
      ]
    },
    {
      title: "Upholstery Cleaning",
      description: "Refresh and sanitize your furniture with our specialized upholstery cleaning techniques.",
      included: [
        "Pre-inspection and fabric testing",
        "Dry soil removal",
        "Spot treatment of stains",
        "Gentle yet effective cleaning methods",
        "Fabric-appropriate drying techniques",
        "Deodorizing treatment",
        "Fabric protector application (optional)"
      ]
    },
    {
      title: "Specialty Fabric Cleaning",
      description: "Expert care for delicate fabrics and specialty items that require extra attention.",
      included: [
        "Custom cleaning approach for each fabric type",
        "Silk, wool, and leather expertise",
        "Oriental and area rug cleaning",
        "Hand-knotted rug cleaning",
        "Antique fabric restoration",
        "Color brightening treatments",
        "Fringe cleaning and repair"
      ]
    }
  ];

  const benefitsOfProfessional = [
    {
      title: "Extended Carpet Life",
      description: "Professional cleaning removes abrasive dirt particles that wear down carpet fibers, helping your investment last years longer."
    },
    {
      title: "Healthier Indoor Environment",
      description: "Our deep cleaning process removes allergens, dust mites, bacteria, and other contaminants that can affect indoor air quality and trigger allergies."
    },
    {
      title: "Stain Removal Expertise",
      description: "Our technicians are trained to identify and treat a wide variety of stains that DIY methods simply can't handle."
    },
    {
      title: "Complete Soil Extraction",
      description: "Unlike rental machines that often leave behind moisture and detergent, our process removes residue that would otherwise attract more dirt."
    },
    {
      title: "Odor Elimination",
      description: "We don't just mask odors - our cleaning process removes the source of unpleasant smells for a truly fresh result."
    },
    {
      title: "Time and Effort Savings",
      description: "Save yourself hours of labor and leave the job to professionals who can achieve superior results in less time."
    }
  ];

  const testimonials = [
    {
      quote: "I was amazed at how R2R Cleaning transformed our office carpets. We were considering replacement due to heavy staining, but their team managed to remove years of built-up soil and stains. The carpets look almost new, and at a fraction of replacement cost!",
      name: "James Richards",
      position: "Office Manager, Manchester"
    },
    {
      quote: "After my toddler and dog had their way with our cream sofa, I thought it was ruined forever. The team at R2R worked magic on it - every stain gone, and they even got rid of the pet odor completely. I couldn't be happier with the results.",
      name: "Emma Thompson",
      position: "Homeowner, Stockport"
    }
  ];

  const faq = [
    {
      question: "How long will it take for my carpets and upholstery to dry?",
      answer: "Drying times vary based on fabric type, humidity, air circulation, and the cleaning method used. Typically, carpets dry within 6-8 hours, while upholstery may take 4-6 hours. We use quick-drying techniques to minimize inconvenience, and we can provide air movers to expedite drying when needed."
    },
    {
      question: "How often should I have my carpets and upholstery professionally cleaned?",
      answer: "For residential carpets with normal use, we recommend professional cleaning every 12-18 months. High-traffic areas or homes with children, pets, or smokers may benefit from cleaning every 6-12 months. Upholstery typically needs cleaning every 18-24 months, but visible soiling or odors might indicate earlier cleaning is needed."
    },
    {
      question: "Will cleaning remove all stains from my carpet or furniture?",
      answer: "Most fresh stains can be completely removed with our professional cleaning process. However, some stains (such as those from certain dyes, chemical reactions, or stains that have set over time) may be permanent. Our technicians will assess your specific stains before cleaning and give you realistic expectations about what results are possible."
    },
    {
      question: "Is your carpet cleaning safe for children and pets?",
      answer: "Yes, we use cleaning solutions that are safe for households with children and pets. We offer eco-friendly, low-VOC options upon request. We recommend keeping pets and children off the carpet until it's completely dry. All products are thoroughly extracted during the cleaning process, leaving no harmful residue."
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-green-500 py-24 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Carpet & Upholstery Cleaning</h1>
              <p className="text-xl mb-6">Revitalize your carpets and furniture with our professional cleaning service, removing deep-seated dirt and stubborn stains for a fresher, healthier home.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-6 rounded transition transform hover:-translate-y-1 inline-block">
                  Get Free Quote
                </Link>
                <Link href="/services" className="border-2 border-white hover:bg-white hover:text-blue-600 font-bold py-3 px-6 rounded transition transform hover:-translate-y-1 inline-block">
                  All Services
                </Link>
              </div>
            </div>
            <div className="relative h-64 md:h-auto">
              {/* Placeholder for service image */}
              <div className="w-full h-full bg-blue-800 bg-opacity-40 rounded-lg flex items-center justify-center">
                <span className="text-white text-lg">Professional Carpet Cleaning</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Our Professional Approach</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              At R2R Cleaning, we use advanced techniques and professional-grade equipment to deliver superior results for all carpet and upholstery cleaning.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md transform transition hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-blue-600 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cleaning Types Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Our Cleaning Services</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              We offer specialized cleaning solutions for all types of carpets and upholstery, tailored to meet your specific needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {cleaningTypes.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-600 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <h4 className="font-medium text-gray-800 mb-2">What's included:</h4>
                <ul className="text-gray-600 grid grid-cols-1 gap-y-2">
                  {service.included.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Professional Cleaning Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Benefits of Professional Cleaning</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Why professional carpet and upholstery cleaning outperforms DIY methods every time.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefitsOfProfessional.map((benefit, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-600 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Our 6-Step Cleaning Process</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              We follow a thorough, methodical approach to ensure the best possible results for your carpets and upholstery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">1</div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Pre-Inspection</h3>
              <p className="text-gray-600">We thoroughly assess your carpets and upholstery, identifying fiber types, stains, and high-traffic areas to determine the optimal cleaning approach.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">2</div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Pre-Treatment</h3>
              <p className="text-gray-600">Special cleaning solutions are applied to break down soils and stains, preparing them for extraction and ensuring more effective removal.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">3</div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Spot Treatment</h3>
              <p className="text-gray-600">Stubborn stains receive specialized treatment with products formulated to address specific stain types without damaging the fibers.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">4</div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Deep Extraction</h3>
              <p className="text-gray-600">Our hot water extraction method flushes out deep-seated dirt, allergens, and cleaning solutions, leaving your carpets and upholstery thoroughly clean.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">5</div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Grooming & Drying</h3>
              <p className="text-gray-600">We groom the carpet fibers to accelerate drying and restore texture, while our powerful extraction leaves minimal moisture for faster drying times.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">6</div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Final Inspection</h3>
              <p className="text-gray-600">We review our work with you to ensure your complete satisfaction, addressing any remaining concerns and providing care tips to maintain your freshly cleaned items.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Hear from customers who have experienced the R2R difference in carpet and upholstery cleaning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-md relative">
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
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">
              Common questions about our carpet and upholstery cleaning services
            </p>
          </div>

          <div className="space-y-6">
            {faq.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-blue-600 mb-3">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-500 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">Restore Your Carpets & Upholstery Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            From stubborn stains to general refreshing, our professional team delivers exceptional results for all carpet and upholstery cleaning needs across Rochdale and Greater Manchester.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              href="/contact"
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-full inline-flex items-center transition transform hover:-translate-y-1"
            >
              Request Your Free Quote
              <svg className="w-5 h-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link 
              href="/services"
              className="border-2 border-white hover:bg-white hover:text-blue-600 font-bold py-3 px-8 rounded-full inline-flex items-center transition transform hover:-translate-y-1"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}