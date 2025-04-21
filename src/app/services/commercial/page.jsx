// app/services/commercial/page.tsx
"use client";
import Link from 'next/link';
import MainLayout from '@/components/layout';

export default function CommercialCleaning() {
  const benefits = [
    {
      title: "Enhanced Workplace Productivity",
      description: "A clean, organized workspace leads to higher employee productivity, fewer sick days, and improved staff morale. Let us help your team perform at their best.",
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Professional Brand Image",
      description: "Make the right impression on clients and visitors. Our comprehensive cleaning ensures your premises always project professionalism and attention to detail.",
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Health-Focused Cleaning",
      description: "Our commercial-grade disinfection services reduce workplace illness transmission with medical-grade sanitization techniques and products.",
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    }
  ];

  const industries = [
    {
      title: "Office Spaces",
      description: "Comprehensive cleaning solutions for offices of all sizes, from small businesses to corporate headquarters.",
      included: [
        "Reception and communal area cleaning",
        "Workstation sanitization",
        "Meeting room preparation",
        "Kitchen and break area maintenance",
        "Restroom sanitation and restocking",
        "Waste management and recycling",
        "Floor care (vacuuming, mopping, polishing)"
      ]
    },
    {
      title: "Retail & Hospitality",
      description: "Specialized cleaning for high-traffic retail environments, restaurants, cafés, and hospitality venues.",
      included: [
        "Storefront and entrance area cleaning",
        "Display area dusting and maintenance",
        "High-touch point sanitization",
        "Floor maintenance (sweeping, mopping, buffing)",
        "Window and glass fixture cleaning",
        "Changing room/fitting room sanitization",
        "Food service area deep cleaning"
      ]
    },
    {
      title: "Healthcare Facilities",
      description: "Medical-grade cleaning and disinfection services for clinics, dental practices, and healthcare facilities.",
      included: [
        "Reception and waiting area sanitization",
        "Examination room terminal cleaning",
        "Medical equipment exterior cleaning",
        "Pathogen-focused disinfection",
        "HEPA filtration vacuuming",
        "Medical waste management",
        "Compliance with healthcare cleaning regulations"
      ]
    },
    {
      title: "Educational Institutions",
      description: "Safe, thorough cleaning for schools, colleges, and childcare facilities to support student health.",
      included: [
        "Classroom and study area cleaning",
        "Shared facility disinfection",
        "Sports and gym equipment sanitization",
        "Cafeteria and food service area cleaning",
        "Library and resource center maintenance",
        "Playground and common area cleaning",
        "Student bathroom sanitization"
      ]
    }
  ];

  const testimonials = [
    {
      quote: "Since contracting R2R Cleaning, our office environment has transformed. Not only is everything spotless, but our staff absenteeism has reduced by 23%. The investment pays for itself.",
      name: "Robert Chambers",
      position: "Operations Director, Manchester Tech Solutions"
    },
    {
      quote: "As a medical practice, our cleaning requirements are stringent. R2R Cleaning understands the importance of infection control and consistently meets our high standards. Their staff are professional, thorough and reliable.",
      name: "Dr. Sarah Williams",
      position: "Practice Manager, Rochdale Family Health"
    }
  ];

  const features = [
    {
      title: "Customized Cleaning Plans",
      description: "We develop bespoke cleaning schedules and protocols based on your specific industry requirements, facility size, and budget."
    },
    {
      title: "Flexible Scheduling",
      description: "From daily maintenance to weekly deep cleaning, we work around your business hours to minimize disruption to your operations."
    },
    {
      title: "Trained & Vetted Staff",
      description: "All our cleaning technicians are thoroughly background-checked, professionally trained, and follow strict quality control protocols."
    },
    {
      title: "Commercial-Grade Equipment",
      description: "We invest in professional cleaning technologies and equipment that deliver superior results compared to standard cleaning methods."
    },
    {
      title: "Eco-Friendly Options",
      description: "Our green cleaning programs use environmentally responsible products and methods without compromising on cleaning power."
    },
    {
      title: "Full Insurance Coverage",
      description: "Complete peace of mind with comprehensive insurance coverage, including public liability and professional indemnity insurance."
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-700 to-blue-500 py-24 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Commercial Cleaning Solutions</h1>
              <p className="text-xl mb-6">Elevate your business environment with professional cleaning services that enhance your image, boost employee productivity, and protect health.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-6 rounded transition transform hover:-translate-y-1 inline-block">
                  Request a Business Consultation
                </Link>
                <a href="#industries" className="border-2 border-white hover:bg-white hover:text-blue-600 font-bold py-3 px-6 rounded transition transform hover:-translate-y-1 inline-block">
                  View Industry Solutions
                </a>
              </div>
            </div>
            <div className="h-64 md:h-96 rounded-lg relative bg-white/10 backdrop-blur-sm overflow-hidden">
              {/* Placeholder for hero image */}
             <img
                src="/commercial.png" 
                alt="Image of a professional cleaner in a modern office space"
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
            <h2 className="text-3xl font-bold text-blue-600 mb-4">The Business Impact of Professional Cleaning</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our commercial cleaning services deliver more than just cleanliness - they provide measurable business advantages.
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

      {/* Industries Section */}
      <section id="industries" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Industry-Specific Cleaning Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Each business environment has unique cleaning requirements. Our specialized protocols address the specific needs of your industry.
            </p>
          </div>

          <div className="space-y-12">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-blue-50 p-8">
                    <h3 className="text-2xl font-bold text-blue-600 mb-3">{industry.title}</h3>
                    <p className="text-gray-600 mb-4">{industry.description}</p>
                    <Link 
                      href="/contact" 
                      className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition"
                    >
                      Get Quote
                    </Link>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <h4 className="text-lg font-semibold text-blue-600 mb-3">Our Service Includes:</h4>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {industry.included.map((item, i) => (
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

      {/* Feature Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">The R2R Commercial Advantage</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              What sets our commercial cleaning services apart from the competition:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow transition hover:shadow-md">
                <h3 className="text-lg font-bold text-blue-600 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Success Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See how our commercial cleaning solutions have helped businesses across Greater Manchester thrive.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md relative">
                <div className="text-6xl absolute top-4 left-4 opacity-10 text-blue-500 font-serif">"</div>
                <p className="text-gray-700 mb-6 relative z-10">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 mr-4 flex items-center justify-center text-blue-600 font-bold">
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

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Our Commercial Cleaning Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A systematic approach that ensures consistent quality and results:
            </p>
          </div>
          
          <div className="relative">
            {/* Process Timeline */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
            
            <div className="space-y-12">
              <div className="relative flex items-center justify-between md:justify-start">
                <div className="hidden md:block z-10 w-8 h-8 rounded-full bg-blue-600 absolute left-1/2 transform -translate-x-1/2"></div>
                <div className="bg-gray-50 p-6 rounded-lg shadow md:w-5/12 md:mr-auto">
                  <h3 className="text-xl font-bold text-blue-600 mb-2">1. Initial Assessment</h3>
                  <p className="text-gray-600">We conduct a thorough site evaluation to understand your facility's specific needs, challenges, and priorities.</p>
                </div>
              </div>
              
              <div className="relative flex items-center justify-between md:justify-end">
                <div className="hidden md:block z-10 w-8 h-8 rounded-full bg-blue-600 absolute left-1/2 transform -translate-x-1/2"></div>
                <div className="bg-gray-50 p-6 rounded-lg shadow md:w-5/12 md:ml-auto">
                  <h3 className="text-xl font-bold text-blue-600 mb-2">2. Custom Proposal</h3>
                  <p className="text-gray-600">You'll receive a detailed cleaning plan and transparent quote tailored to your business needs and budget.</p>
                </div>
              </div>
              
              <div className="relative flex items-center justify-between md:justify-start">
                <div className="hidden md:block z-10 w-8 h-8 rounded-full bg-blue-600 absolute left-1/2 transform -translate-x-1/2"></div>
                <div className="bg-gray-50 p-6 rounded-lg shadow md:w-5/12 md:mr-auto">
                  <h3 className="text-xl font-bold text-blue-600 mb-2">3. Scheduled Execution</h3>
                  <p className="text-gray-600">Our professional cleaning teams implement the agreed-upon cleaning protocol at times that minimize business disruption.</p>
                </div>
              </div>
              
              <div className="relative flex items-center justify-between md:justify-end">
                <div className="hidden md:block z-10 w-8 h-8 rounded-full bg-blue-600 absolute left-1/2 transform -translate-x-1/2"></div>
                <div className="bg-gray-50 p-6 rounded-lg shadow md:w-5/12 md:ml-auto">
                  <h3 className="text-xl font-bold text-blue-600 mb-2">4. Quality Assurance</h3>
                  <p className="text-gray-600">Regular inspections and client feedback ensure our service consistently meets your expectations and our high standards.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-500 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Elevate Your Business Environment</h2>
          <p className="text-xl mb-8">
            Join leading businesses across Greater Manchester that trust R2R Cleaning for their commercial cleaning needs. New clients receive a complimentary deep clean with their first scheduled service.
          </p>
          
          <Link 
            href="/contact"
            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-full inline-flex items-center transition transform hover:-translate-y-1"
          >
            Schedule a Business Consultation
            <svg className="w-5 h-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </section>
    </MainLayout>
  );
}