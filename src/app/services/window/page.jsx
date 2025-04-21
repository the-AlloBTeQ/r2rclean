// app/services/window/page.tsx
"use client";
import Link from 'next/link';
import Image from 'next/image';
import MainLayout from '@/components/layout';

export default function WindowCleaning() {
  const keyFeatures = [
    {
      title: "Streak-Free Results",
      description: "Our professional techniques and high-quality cleaning solutions ensure crystal clear, streak-free windows every time.",
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      title: "Interior & Exterior",
      description: "We clean both sides of your windows, including hard-to-reach exteriors, frames, sills, and tracks for complete window maintenance.",
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      )
    },
    {
      title: "Safety Expertise",
      description: "Our fully insured professionals use proper equipment and techniques to safely clean windows at any height, eliminating risk for property owners.",
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  const serviceTypes = [
    {
      title: "Residential Window Cleaning",
      description: "Transform your home's appearance and let in maximum natural light with our comprehensive window cleaning service.",
      included: [
        "Interior and exterior window cleaning",
        "Window frame and sill cleaning",
        "Window track and channel cleaning",
        "Screen cleaning and inspection",
        "Sill and track debris removal",
        "Hard water stain treatment (if needed)",
        "Streak-free finish guaranteed"
      ]
    },
    {
      title: "Commercial Window Cleaning",
      description: "Create a positive first impression for your business with spotlessly clean, professionally maintained windows.",
      included: [
        "Store front and display window cleaning",
        "Multi-story building capability",
        "Safety-compliant access solutions",
        "Flexible scheduling to minimize disruption",
        "Regular maintenance programs",
        "Post-construction window cleaning",
        "Commercial grade cleaning solutions"
      ]
    },
    {
      title: "Specialty Window Cleaning",
      description: "Expert solutions for challenging window types that require specialized techniques and equipment.",
      included: [
        "Skylights and roof windows",
        "Conservatory cleaning",
        "Solar panel cleaning",
        "Leaded and stained glass care",
        "High-access window solutions",
        "French door glass panes",
        "Glass balustrades and partitions"
      ]
    },
    {
      title: "Additional Glass Services",
      description: "Beyond windows, we provide cleaning for all glass features inside and outside your property.",
      included: [
        "Glass door cleaning",
        "Shower door and screen cleaning",
        "Mirror cleaning and polishing",
        "Glass table tops",
        "Glass cabinets and display cases",
        "Interior glass partitions",
        "Hard water stain removal"
      ]
    }
  ];

  const benefits = [
    {
      title: "Enhanced Curb Appeal",
      description: "Clean windows dramatically improve your property's appearance, making a striking difference to both residential homes and commercial buildings."
    },
    {
      title: "Increased Natural Light",
      description: "Dirt and grime can reduce natural light by up to 40%. Professional cleaning maximizes daylight, creating brighter, more inviting spaces."
    },
    {
      title: "Extended Window Life",
      description: "Regular professional cleaning prevents the build-up of corrosive substances like hard water minerals that can permanently damage glass and frames."
    },
    {
      title: "Energy Efficiency",
      description: "Clean windows allow more solar heat to enter in winter, potentially reducing heating costs while maintaining a clearer view year-round."
    },
    {
      title: "Healthier Environment",
      description: "Window cleaning removes allergens, mold, and pollutants that collect on glass and frames, contributing to improved indoor air quality."
    },
    {
      title: "Professional Safety",
      description: "Avoid the risks of ladder use and accessing difficult windows. Our insured professionals have the proper equipment and training to clean safely."
    }
  ];

  const testimonials = [
    {
      quote: "R2R's window cleaning service is exceptional. Our office building has complex windows that are challenging to access, but their team handled everything with expertise. The difference in natural light and overall appearance is remarkable!",
      name: "Robert Chambers",
      position: "Facilities Manager, Manchester"
    },
    {
      quote: "We've tried several companies for our home's windows, but none compare to R2R Cleaning. They're thorough, professional, and leave absolutely no streaks. Their attention to detail with the frames and tracks makes a world of difference.",
      name: "Patricia Nelson",
      position: "Homeowner, Heywood"
    }
  ];

  const faq = [
    {
      question: "Do you clean windows in bad weather?",
      answer: "We monitor weather forecasts carefully and may reschedule appointments if heavy rain, strong winds, or freezing temperatures are expected. Light rain can actually help with the cleaning process, but we always ensure conditions are safe for our technicians and will deliver quality results before proceeding."
    },
    {
      question: "Will you remove and clean my window screens?",
      answer: "Yes, our comprehensive window cleaning service includes removing, hand-cleaning, and reinstalling window screens. We inspect screens for damage during cleaning and will notify you of any repairs needed."
    },
    {
      question: "How often should I have my windows professionally cleaned?",
      answer: "For most residential properties, we recommend professional window cleaning 2-4 times per year. Commercial properties often benefit from more frequent cleaning, typically quarterly or monthly depending on location and environmental factors. Properties near construction sites, busy roads, or in coastal areas may require more frequent cleaning to maintain optimal appearance."
    },
    {
      question: "Do you clean hard water stains from windows?",
      answer: "Yes, we offer specialized treatment for hard water stains, mineral deposits, and other stubborn residues that regular cleaning can't remove. Our technicians use professional-grade products and techniques specifically designed to safely remove these deposits without damaging the glass."
    },
    {
      question: "How long does window cleaning take?",
      answer: "The time required depends on the number of windows, accessibility, and condition. A typical 3-bedroom home usually takes 2-3 hours, while commercial properties vary based on size and complexity. We provide time estimates during your free quote consultation."
    },
    {
      question: "Do I need to do anything to prepare for window cleaning?",
      answer: "We recommend removing any personal items from windowsills and ensuring clear access to windows by moving furniture or obstacles where possible. This helps our team work efficiently, but we're also happy to assist with minor moving if needed."
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-400 text-white relative">
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Professional Window Cleaning Services</h1>
            <p className="text-xl mb-8">Crystal clear results that transform your home or business with maximum natural light and spotless views.</p>
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
        </div>
        <div className="absolute inset-0 bg-opacity-40 bg-blue-900">
          {/* Background image would go here in production */}
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Why Choose Our Window Cleaning Service</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our professional window cleaning service delivers exceptional results using advanced techniques and premium products.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center transition transform hover:-translate-y-1 hover:shadow-lg">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-blue-600 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Types Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Our Window Cleaning Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions for all types of windows and glass surfaces
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {serviceTypes.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-600 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <h4 className="font-medium text-blue-600 mb-2">What's Included:</h4>
                <ul className="space-y-2">
                  {service.included.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Benefits of Professional Window Cleaning</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              More than just clean windows - discover how our service enhances your property
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border-t-4 border-blue-500">
                <h3 className="text-lg font-semibold text-blue-600 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Our Cleaning Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A methodical approach that delivers consistently exceptional results
            </p>
          </div>
          
          <div className="relative">
            {/* Process steps with connecting line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 transform -translate-x-1/2"></div>
            
            <div className="space-y-12">
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-4 md:mb-0 md:pr-12 md:text-right">
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">Assessment</h3>
                  <p className="text-gray-600">We begin by evaluating your windows' condition, identifying any special needs or treatment requirements, and providing a detailed quote.</p>
                </div>
                <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10 rounded-full bg-blue-500 text-white w-10 h-10 flex items-center justify-center font-bold">1</div>
                <div className="md:w-1/2 md:pl-12">
                  <div className="hidden md:block"> </div>
                </div>
              </div>
              
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-4 md:mb-0 md:pr-12 md:text-right">
                  <div className="hidden md:block"> </div>
                </div>
                <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10 rounded-full bg-blue-500 text-white w-10 h-10 flex items-center justify-center font-bold">2</div>
                <div className="md:w-1/2 md:pl-12">
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">Preparation</h3>
                  <p className="text-gray-600">We prepare the work area by removing screens, clearing access, and protecting surrounding surfaces from potential drips or spills.</p>
                </div>
              </div>
              
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-4 md:mb-0 md:pr-12 md:text-right">
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">Pre-Treatment</h3>
                  <p className="text-gray-600">We apply specialized solutions to loosen dirt, grime, and mineral deposits, making the cleaning process more effective.</p>
                </div>
                <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10 rounded-full bg-blue-500 text-white w-10 h-10 flex items-center justify-center font-bold">3</div>
                <div className="md:w-1/2 md:pl-12">
                  <div className="hidden md:block"> </div>
                </div>
              </div>
              
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-4 md:mb-0 md:pr-12 md:text-right">
                  <div className="hidden md:block"> </div>
                </div>
                <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10 rounded-full bg-blue-500 text-white w-10 h-10 flex items-center justify-center font-bold">4</div>
                <div className="md:w-1/2 md:pl-12">
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">Cleaning</h3>
                  <p className="text-gray-600">Using professional squeegees, microfiber tools, and our specialized techniques, we thoroughly clean the glass, frames, sills, and tracks.</p>
                </div>
              </div>
              
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-4 md:mb-0 md:pr-12 md:text-right">
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">Finishing</h3>
                  <p className="text-gray-600">We meticulously detail all edges and corners, ensuring a streak-free finish before replacing screens and conducting a final inspection.</p>
                </div>
                <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10 rounded-full bg-blue-500 text-white w-10 h-10 flex items-center justify-center font-bold">5</div>
                <div className="md:w-1/2 md:pl-12">
                  <div className="hidden md:block"> </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Read what satisfied customers have to say about our window cleaning service
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
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Common questions about our window cleaning services
            </p>
          </div>
          
          <div className="space-y-6">
            {faq.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-blue-600 mb-2">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">Ready for Spotless, Streak-Free Windows?</h2>
          <p className="text-xl mb-8">Get in touch for a customized quote based on your specific needs</p>
          
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
            <Link 
              href="/contact" 
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-full transition transform hover:-translate-y-1"
            >
              Request a Free Quote
            </Link>
            <Link 
              href="/services" 
              className="bg-transparent hover:bg-white hover:text-blue-600 border-2 border-white font-bold py-3 px-8 rounded-full transition transform hover:-translate-y-1"
            >
              Explore Other Services
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Areas We Serve</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide professional window cleaning services throughout Greater Manchester
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <h3 className="font-semibold text-blue-600">Rochdale</h3>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <h3 className="font-semibold text-blue-600">Manchester</h3>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <h3 className="font-semibold text-blue-600">Stockport</h3>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <h3 className="font-semibold text-blue-600">Oldham</h3>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <h3 className="font-semibold text-blue-600">Heywood</h3>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <h3 className="font-semibold text-blue-600">Bury</h3>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <h3 className="font-semibold text-blue-600">Bolton</h3>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <h3 className="font-semibold text-blue-600">And more...</h3>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link 
              href="/areas" 
              className="text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center"
            >
              View Full Coverage Details
              <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}