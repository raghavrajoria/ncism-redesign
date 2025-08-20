import React from "react";

const Introduction = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Welcome to NCISM
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The National Commission for Indian System of Medicine is dedicated
              to promoting and regulating the Indian System of Medicine
              education and practice in India.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              About NCISM
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 mb-4">
                  The National Commission for Indian System of Medicine (NCISM)
                  has been established by an Act of Parliament known as the
                  National Commission for Indian System of Medicine Act, 2020.
                  The Commission promotes availability of affordable healthcare
                  services in all parts of the country.
                </p>
                <p className="text-gray-700">
                  NCISM is committed to enhancing access to quality medical
                  education, ensuring availability of adequate and high-quality
                  medical professionals, and promoting equitable healthcare
                  across the nation.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="bg-blue-100 rounded-lg p-6 w-full max-w-xs">
                  <h4 className="font-bold text-blue-800 mb-3 text-center">
                    Our Vision
                  </h4>
                  <p className="text-blue-700 text-sm text-center">
                    To promote and maintain high standards of medical education
                    and healthcare through Indian System of Medicine.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Key Functions
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h4 className="font-bold text-gray-800 mb-2">
                Medical Education
              </h4>
              <p className="text-gray-600 text-sm">
                Regulating and maintaining standards of undergraduate and
                postgraduate education.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h4 className="font-bold text-gray-800 mb-2">
                Professional Practice
              </h4>
              <p className="text-gray-600 text-sm">
                Regulating professional conduct and promoting ethical practices.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-amber-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Registration</h4>
              <p className="text-gray-600 text-sm">
                Maintaining national registers of licensed practitioners.
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-blue-600 rounded-xl text-white p-8 mb-12">
            <h3 className="text-2xl font-bold mb-8 text-center">
              NCISM at a Glance
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-sm">Colleges</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">50,000+</div>
                <div className="text-sm">Annual Admissions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">800,000+</div>
                <div className="text-sm">Registered Practitioners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">10+</div>
                <div className="text-sm">Research Centers</div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Explore Our Resources
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                Registered Practitioners
              </button>
              <button className="bg-white hover:bg-gray-100 text-blue-600 font-medium py-3 px-6 rounded-lg border border-blue-600 transition-colors">
                Colleges & Institutions
              </button>
              <button className="bg-white hover:bg-gray-100 text-blue-600 font-medium py-3 px-6 rounded-lg border border-blue-600 transition-colors">
                Publications
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold text-lg mb-4">NCISM</h4>
              <p className="text-gray-300 text-sm">
                National Commission for Indian System of Medicine
                <br />
                Ministry of AYUSH, Government of India
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white text-sm"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white text-sm"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white text-sm"
                  >
                    Acts & Regulations
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white text-sm"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white text-sm"
                  >
                    Publications
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white text-sm"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white text-sm"
                  >
                    Tenders
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white text-sm"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Contact Us</h4>
              <address className="text-gray-300 text-sm not-italic">
                NCISM Office
                <br />
                AYUSH Bhawan, B-Block, GPO Complex,
                <br />
                INA, New Delhi - 110023
                <br />
                <span className="block mt-2">Email: info@ncism.gov.in</span>
                <span className="block">Phone: +91-11-1234-5678</span>
              </address>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>
              © 2023 National Commission for Indian System of Medicine. All
              Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Introduction;
