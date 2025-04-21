// app/services/page.tsx
"use client";
import Link from 'next/link';
import Image from 'next/image';
import MainLayout from '@/components/layout';

// Service data with image paths
const services = [
  {
    id: 'residential',
    title: "Residential Cleaning",
    description: "Keep your home spotless with our regular cleaning services, deep cleaning, or end of tenancy solutions designed to meet your specific needs.",
    image: "/residential.png",
    features: [
      "Regular house cleaning",
      "Deep cleaning services",
      "End of tenancy cleaning",
      "Move-in/move-out cleaning",
      "Holiday rental turnover cleaning"
    ]
  },
  {
    id: 'commercial',
    title: "Commercial Cleaning",
    description: "Create a clean, healthy environment for your employees and customers with our professional commercial cleaning services for offices, retail spaces, and more.",
    image: "/commercial.png",
    features: [
      "Office cleaning",
      "Retail space sanitization",
      "Business premises maintenance",
      "Restaurant and café cleaning",
      "Gym and fitness center cleaning"
    ]
  },
  {
    id: 'specialized',
    title: "Specialized Cleaning",
    description: "From post-construction cleanup to carpet and upholstery cleaning, our specialized services tackle even the toughest cleaning challenges.",
    image: "/specialised.png",
    features: [
      "Post-construction cleanup",
      "Event venue preparation/cleanup",
      "High-pressure cleaning",
      "Mold remediation",
      "Specialized surface treatment"
    ]
  },
  {
    id: 'deep',
    title: "Deep Cleaning",
    description: "Our thorough deep cleaning service reaches those often-neglected areas, ensuring your space is not just clean, but hygienically pristine.",
    image: "/deep.png",
    features: [
      "Kitchen deep cleaning",
      "Bathroom sanitization",
      "Interior cabinet cleaning",
      "Baseboards and trim detailing",
      "Light fixture and fan cleaning"
    ]
  },
  {
    id: 'carpet',
    title: "Carpet & Upholstery",
    description: "Restore your carpets and furniture to their original beauty with our professional cleaning techniques and equipment.",
    image: "/carpet.png",
    features: [
      "Carpet steam cleaning",
      "Upholstery freshening",
      "Stain and odor removal",
      "Area rug cleaning",
      "Fabric protection application"
    ]
  },
  {
    id: 'window',
    title: "Window Cleaning",
    description: "Crystal clear windows inside and out, enhancing the appearance of your property and letting in maximum natural light.",
    image: "/window.png",
    features: [
      "Interior window cleaning",
      "Exterior window washing",
      "Screen cleaning",
      "Track and sill detailing",
      "Multi-story window solutions"
    ]
  }
];

export default function ServicesPage() {
  return (
    <MainLayout>
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-500 py-16 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Cleaning Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Professional cleaning solutions tailored to your specific needs. From homes to offices, we&apos;ve got you covered.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service) => (
              <div key={service.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg transition transform hover:shadow-xl">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5 relative h-64 md:h-auto">
                    <Image 
                      src={service.image}
                      alt={service.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="h-full w-full"
                    />
                  </div>
                  <div className="md:w-3/5 p-6">
                    <h2 className="text-2xl font-bold text-blue-600 mb-3">{service.title}</h2>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Key Services:</h3>
                    <ul className="mb-4">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-600 mb-1">
                          <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Link 
                      href={`/services/${service.id}`}
                      className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded inline-flex items-center transition"
                    >
                      Learn More
                      <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
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
            <p className="text-gray-600 max-w-xl mx-auto">
              We follow a proven method to ensure consistent, high-quality results for every cleaning job
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Initial Consultation</h3>
              <p className="text-gray-600">We start by understanding your specific needs and requirements through a thorough consultation.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Customized Plan</h3>
              <p className="text-gray-600">We develop a tailored cleaning plan that addresses your specific concerns and priorities.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Professional Execution</h3>
              <p className="text-gray-600">Our trained team executes the cleaning plan with attention to detail and professional equipment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Find answers to common questions about our cleaning services
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">How often should I schedule cleaning services?</h3>
              <p className="text-gray-600">The frequency depends on your specific needs. For residential cleaning, many clients choose weekly, bi-weekly, or monthly services. Commercial spaces often require more frequent cleaning. We&apos;ll help you determine the optimal schedule during our consultation.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Do you provide your own cleaning supplies?</h3>
              <p className="text-gray-600">Yes, we bring all necessary professional-grade cleaning supplies and equipment. If you have specific products you prefer we use in your space, just let us know.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Are your cleaning products eco-friendly?</h3>
              <p className="text-gray-600">We offer eco-friendly cleaning options using products that are effective yet gentle on the environment. Please let us know if you have specific environmental concerns or product preferences.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">How do you ensure quality control?</h3>
              <p className="text-gray-600">We implement a thorough quality control process that includes training our staff to high standards, using detailed cleaning checklists, and conducting regular inspections. We also value your feedback to continuously improve our services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-500 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience the R2R Difference?</h2>
          <p className="text-xl mb-8">Contact us today for a free, no-obligation quote on any of our cleaning services</p>
          
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