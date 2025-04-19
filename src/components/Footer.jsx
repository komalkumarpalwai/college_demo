import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react"; // <-- Import Lucide Icons

const Footer = () => {
  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { name: "Admissions", path: "/register" },
        { name: "Courses", path: "/courses" },
        { name: "Events", path: "/activites" },
        { name: "Gallery", path: "/activites" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Privacy Policy", path: "/privacy" },
        { name: "Terms of Service", path: "/terms" },
        { name: "FAQs", path: "/faqs" },
        { name: "Blog", path: "/blog" },
      ],
    },
    {
      title: "Contact Us",
      links: [
        { name: "avva.college@example.com", path: "mailto:avva.college@example.com" },
        { name: "+91 98765 43210", path: "tel:+919876543210" },
        { name: "123 College Road, Edu City", path: "#" },
      ],
    },
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, url: "https://www.facebook.com/avvacollege" },
    { icon: <Twitter className="w-5 h-5" />, url: "https://www.twitter.com/avvacollege" },
    { icon: <Instagram className="w-5 h-5" />, url: "https://www.instagram.com/avvacollege" },
    { icon: <Linkedin className="w-5 h-5" />, url: "https://www.linkedin.com/avvacollege" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-b from-blue-50 to-indigo-50 relative overflow-hidden mt-20"
    >
      {/* Wave Shape */}
      <div className="absolute -top-24 left-0 w-full h-24 bg-gradient-to-r from-blue-600 to-indigo-600 clip-path-wave"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <motion.div whileHover={{ y: -5 }}>
            <Link to="/" className="flex items-center mb-6">
              <img
                src="/logo.png"
                alt="College Logo"
                className="h-12 w-12 rounded-full border-2 border-blue-600 p-1"
              />
              <span className="ml-3 text-2xl font-bold text-blue-900">
                AVVA College
              </span>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed">
              Empowering students through excellence in education, innovation, and character development since 2005.
            </p>
          </motion.div>

          {/* Footer Sections */}
          {footerLinks.map((section, index) => (
            <motion.div key={index} whileHover={{ y: -5 }}>
              <h3 className="text-lg font-semibold text-blue-900 mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.div whileHover={{ x: 5 }}>
                      <Link
                        to={link.path}
                        className="text-gray-600 hover:text-blue-600 transition-colors flex items-center group"
                      >
                        <span className="mr-2">•</span>
                        {link.name}
                        {index === 2 && linkIndex === 2 ? null : (
                          <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            →
                          </span>
                        )}
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Newsletter */}
          <motion.div whileHover={{ y: -5 }}>
            <h3 className="text-lg font-semibold text-blue-900 mb-4">
              Newsletter
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Subscribe to our newsletter for updates
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                whileHover={{ y: -3 }}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
          <p className="text-gray-600 text-sm text-center">
            © {new Date().getFullYear()} AVVA College. All rights reserved.
          </p>
        </div>
      </div>

      <style jsx>{`
        .clip-path-wave {
          clip-path: path('M0,96L48,112C96,128,192,160,288,154.7C384,149,480,107,576,90.7C672,75,768,85,864,96C960,107,1056,117,1152,122.7C1248,128,1344,128,1392,128L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z');
        }
      `}</style>
    </motion.footer>
  );
};

export default Footer;
