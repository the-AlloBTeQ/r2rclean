// app/services/deep/page.tsx
"use client";
import Link from 'next/link';
import Image from 'next/image';
import MainLayout from '@/components/layout';

export default function DeepCleaning() {
  const keyFeatures = [
    {
      title: "Beyond Surface Clean",
      description: "Our deep cleaning service targets hidden dirt, grime, and bacteria in overlooked areas that regular cleaning misses.",
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      title: "Health-Focused Approach",
      description: "We use hospital-grade disinfectants to eliminate harmful pathogens, creating a healthier environment for you and your family.",
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: "Comprehensive Coverage",
      description: "Every room receives systematic attention with specialized cleaning techniques tailored to each space's unique requirements.",
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    }
  ];

  const roomServices = [
    {
      title: "Kitchen Deep Clean",
      description: "The heart of your home deserves special attention. Our kitchen deep clean tackles grease, food residue, and hidden bacteria.",
      included: [
        "Inside and outside of all appliances",
        "Inside cabinets and drawers",
        "Degreasing of hood vents and filters",
        "Sanitization of countertops and backsplashes",
        "Deep cleaning of sink and fixtures",
        "Scrubbing of floor including corners and edges",
        "Cleaning inside of rubbish bins",
        "Disinfection of high-touch surfaces"
      ]
    },
    {
      title: "Bathroom Transformation",
      description: "We eliminate soap scum, hard water deposits, mildew, and hidden grime for a truly sanitized bathroom.",
      included: [
        "Deep cleaning of shower/tub including grout and caulking",
        "Descaling of taps, showerheads, and fixtures",
        "Thorough toilet cleaning including base and behind",
        "Sanitization of sink and vanity areas",
        "Mirror and glass cleaning",
        "Floor deep cleaning including behind toilet",
        "Ventilation fan dusting and cleaning",
        "Mold and mildew treatment"
      ]
    },
    {
      title: "Living Areas Rejuvenation",
      description: "From ceiling to floor, we address overlooked areas to remove allergens, dust, and hidden dirt from your main living spaces.",
      included: [
        "Ceiling corner cobweb removal",
        "Light fixture and ceiling fan dusting",
        "Top of door frame and crown molding cleaning",
        "Baseboards and vent cleaning",
        "Thorough furniture cleaning including underneath",
        "Window sill and track cleaning",
        "Blinds and shade dusting",
        "Comprehensive floor cleaning"
      ]
    },
    {
      title: "Bedroom & Closet Refresh",
      description: "Create a healthy sleeping environment with our detailed bedroom deep cleaning service.",
      included: [
        "Dusting of headboards and bed frames",
        "Under-bed cleaning",
        "Inside and top of wardrobes",
        "Dusting of light fixtures and ceiling fans",
        "Window treatments and blinds cleaning",
        "Drawer fronts and handles cleaning",
        "Thorough vacuuming including edges",
        "Removal of dust-collecting items for cleaning"
      ]
    }
  ];

  const occasions = [
    {
      title: "Seasonal Deep Clean",
      description: "Many homeowners schedule quarterly deep cleans to maintain a healthy home environment year-round. These seasonal refreshes eliminate accumulated dirt and allergens that build up over time."
    },
    {
      title: "Pre-Moving Deep Clean",
      description: "Whether you're moving into a new home or preparing to sell, our deep cleaning service ensures every corner is spotless, creating a fresh start or impressive showing."
    },
    {
      title: "Post-Renovation Cleanup",
      description: "After home improvements, our deep cleaning removes construction dust, debris, and residues that can linger long after the work is completed."
    },
    {
      title: "Special Occasion Preparation",
      description: "Before hosting important events, holidays, or family gatherings, our deep cleaning service helps create an immaculate environment for your guests."
    },
    {
      title: "Allergy & Asthma Relief",
      description: "For those suffering from respiratory conditions, our specialized deep cleaning focuses on removing allergens, dust mites, and triggers that exacerbate symptoms."
    },
    {
      title: "New Baby Preparation",
      description: "Before welcoming a newborn, many parents opt for a deep cleaning to create the healthiest possible environment for their little one."
    }
  ];

  const testimonials = [
    {
      quote: "I've had regular cleaners for years, but R2R's deep cleaning service showed me what I was missing. They cleaned areas I didn't even realize needed attention. My home hasn't been this clean since the day I moved in!",
      name: "Charlotte Wilson",
      location: "Stockport"
    },
    {
      quote: "After my kitchen renovation, there was a fine layer of dust everywhere. R2R's deep cleaning team removed every trace – even in places I would never have thought to look. Worth every penny!",
      name: "Michael Thompson",
      location: "Bolton"
    }
  ];

  const faq = [
    {
      question: "How long does a deep cleaning service take?",
      answer: "The duration varies depending on the size of your property and its condition. On average, a deep clean for a 3-bedroom home takes 6-8 hours with a team of 2-3 cleaners. We'll provide a time estimate after assessing your specific needs."
    },
    {
      question: "How often should I schedule a deep cleaning?",
      answer: "For most homes, we recommend a deep cleaning every 3-4 months in addition to regular maintenance cleaning. However, homes with pets, children, allergies, or high-traffic may benefit from more frequent deep cleaning services."
    },
    {
      question: "Do I need to provide cleaning supplies?",
      answer: "No, our teams bring all necessary professional-grade cleaning equipment, tools, and products. We use eco-friendly options when possible and can accommodate special requests for specific products if you have sensitivities or preferences."
    },
    {
      question: "Should I be present during the deep cleaning?",
      answer: "It's not required, but you're welcome to be home during the service. Many clients prefer to be present for the initial consultation and then provide access for our team to work while they're away. We're fully insured and all staff undergo thorough background checks."
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-green-500 py-24 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Deep Cleaning Services</h1>
              <p className="text-xl mb-6">Experience the difference of a truly clean home with our comprehensive deep cleaning service that reaches what regular cleaning misses.</p>
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
                <span className="text-white text-lg">Deep Cleaning Expertise</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Why Choose Our Deep Cleaning Service?</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Our deep cleaning goes beyond what regular cleaning services offer, reaching areas others often miss.
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

      {/* Room-by-Room Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Our Room-by-Room Deep Cleaning Process</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Each space in your home receives specialized attention with cleaning techniques tailored to its unique requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {roomServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-600 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <h4 className="font-medium text-gray-800 mb-2">Our process includes:</h4>
                <ul className="text-gray-600 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
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

      {/* Perfect Occasions Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Perfect Occasions for a Deep Clean</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              While regular cleaning maintains your space, these situations call for our more comprehensive deep cleaning service.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {occasions.map((occasion, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-600 mb-3">{occasion.title}</h3>
                <p className="text-gray-600">{occasion.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Don't just take our word for it. Hear from homeowners who've experienced the difference our deep cleaning makes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md relative">
                <div className="text-6xl absolute top-4 left-4 opacity-10 text-blue-500 font-serif">"</div>
                <p className="text-gray-700 mb-6 relative z-10">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-300 mr-4 flex items-center justify-center text-gray-600 font-bold">
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
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">
              Everything you need to know about our deep cleaning service
            </p>
          </div>

          <div className="space-y-6">
            {faq.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-md">
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
          <h2 className="text-3xl font-bold mb-6">Ready to Experience the Difference?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our deep cleaning service reveals the true potential of your space, creating a healthier, more comfortable environment for you and your family.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              href="/contact"
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-full inline-flex items-center transition transform hover:-translate-y-1"
            >
              Book Your Deep Clean
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