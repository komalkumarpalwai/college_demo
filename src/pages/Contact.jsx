import { Link } from 'react-router-dom';
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactPage = () => {
  const contactMethods = [
    {
      title: "Phone",
      value: "+91 98765 43210",
      icon: PhoneIcon,
      href: "tel:+919876543210"
    },
    {
      title: "Email",
      value: "info@hidayahcollege.com",
      icon: EnvelopeIcon,
      href: "mailto:info@hidayahcollege.com"
    },
    {
      title: "Address",
      value: "Hidayah Campus Road, Academic City, Hyderabad, Telangana 500089",
      icon: MapPinIcon
    },
    {
      title: "Office Hours",
      value: "Mon-Sat: 8:00 AM - 6:00 PM\nSunday: Closed",
      icon: ClockIcon
    }
  ];

  return (
    <>
      <Header />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-800 to-blue-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We're here to help and answer any questions you might have. 
              We look forward to hearing from you!
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Contact Information
                </h2>
                <p className="text-gray-600">
                  Reach out through any of these channels
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {contactMethods.map((method, index) => (
                  <div 
                    key={index}
                    className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
                  >
                    <method.icon className="w-10 h-10 text-green-600 mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {method.title}
                    </h3>
                    {method.href ? (
                      <a
                        href={method.href}
                        className="text-gray-700 whitespace-pre-line hover:text-green-700 transition-colors"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <p className="text-gray-700 whitespace-pre-line">
                        {method.value}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* Map Section */}
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Campus Location
                </h3>
                <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
                  <iframe
                    title="Campus Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.258610933915!2d78.3678763153431!3d17.52555030300687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8d42d6f1f7ff%3A0x1c3c3f4e4b4b4b4b!2sAcademic%20City%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1628677987654!5m2!1sen!2sin"
                    width="600"
                    height="450"
                    className="w-full h-full"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Send Us a Message
              </h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-4 rounded-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-4">
              Prefer to visit in person? Check our office hours above
            </p>
            <Link
              to="/admissions"
              className="inline-flex items-center justify-center bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105"
            >
             Register for 25-27 Batch
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ContactPage;
