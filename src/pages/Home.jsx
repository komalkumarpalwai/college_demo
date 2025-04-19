import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import ToppersSlider from "../components/ToppersSlider"; // Import the ToppersSlider
import Footer from "../components/Footer";

const Hero = () => {
    const methodologySteps = [
        {
          title: "Understanding the Subjects",
          description: "Every student has to understand the subjects of study. One should know what are the basics and what is the gist of the study of those subjects.",
        },
        {
          title: "Clearing Concepts",
          description: "Every subject has fundamental concepts. We focus on clearing the concepts to better understand the topics and solve the questions by themselves.",
        },
        {
          title: "Practice and Understand",
          description: "Academic excellence goes beyond the mastery of knowledge; it involves practice and revisions. We make our students practice and revise the topics so that these are on the fingertips of our students.",
        },
        {
          title: "Prepare for the Competition",
          description: "Mock exams and focusing on weak areas helps our students to clear competitions. We conduct mock exams for our students so that they get acquainted with the real scenario.",
        },
      ];
      
  return (
    <>
      <Header />
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=100"
            alt="College Campus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center h-full px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-white space-y-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="block mb-4">Best Intermediate College For</span>
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                MPC, BiPC, MEC & CEC
              </span>
            </h1>

            <p className="text-xl md:text-2xl font-semibold">
              Achieve Your Dreams with Hidayah - Expertise in NEET, IIT-JEE & CA Foundation Coaching
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mt-12">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/register"
                  className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg"
                >
                  Register Now
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/courses"
                  className="inline-block border-2 border-white hover:border-yellow-400 hover:text-yellow-400 px-8 py-4 rounded-full text-lg font-semibold transition-all"
                >
                  Explore Courses
                </Link>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-lg md:text-xl italic text-yellow-200"
            >
              "Embrace Innovative Education at the Top Inter College in Hyderabad"
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ToppersSlider Section */}
      <ToppersSlider />
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Image Section */}
      <div className="relative group">
        <div className="absolute -inset-2 bg-gradient-to-r from-blue-100 to-blue-200 rounded-2xl transform rotate-2 group-hover:rotate-0 transition-all duration-300"></div>
        <img
          src="https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/content/edu/art/5adf2c3a45b00.jpg"
          alt="Hidayah Junior College"
          className="relative w-full h-auto object-cover rounded-2xl shadow-xl transform group-hover:scale-105 transition-all duration-300"
        />
      </div>

      {/* Content Section */}
      <div className="lg:pl-12">
        <div className="mb-6">
          <span className="inline-block mb-4 text-blue-600 font-semibold text-lg">Why Choose Us</span>
          <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Excellence in Competitive<br/>
            <span className="text-blue-600">Education & Coaching</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Propel your academic journey at Hyderabad's premier intermediate college. With over a decade of educational excellence, Hidayah's innovative teaching methodology has transformed learning experiences for thousands of students. Our proven track record serves as a launchpad for successful careers.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {[
            { number: '50+', label: 'Expert Faculty', icon: '👨🏫' },
            { number: '1:8', label: 'Student Ratio', icon: '⚖️' },
            { number: '95%', label: 'Masters\' Holders', icon: '🎓' },
            { number: '2k+', label: 'Active Students', icon: '🚀' },
          ].map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center">
                <span className="text-2xl mr-4">{stat.icon}</span>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-1">{stat.number}</div>
                  <div className="text-gray-500 text-sm font-medium">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Link
          to="/about"
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Discover Our Legacy
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </div>
  </div>
</section>
<section className="py-20 bg-gradient-to-b from-blue-50 to-indigo-50 relative overflow-hidden">
  {/* Decorative elements */}
  <div className="absolute top-0 left-0 w-full h-full opacity-10">
    <div className="absolute top-20 -left-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
    <div className="absolute top-64 -right-20 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-6 relative">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
          Our Teaching Methodology
        </span>
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        At Hidayah Junior College, we blend innovative techniques with proven strategies to create an engaging learning environment that drives academic excellence.
      </p>
    </div>

    {/* Methodology Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {methodologySteps.map((step, index) => (
        <motion.div 
          key={index}
          whileHover={{ y: -10 }}
          className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative">
            <div className="w-12 h-12 mb-6 flex items-center justify-center bg-blue-600 rounded-xl text-white">
              <span className="text-2xl font-bold">{index + 1}</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">{step.title}</h3>
            <p className="text-gray-600 leading-relaxed">{step.description}</p>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Courses Section */}
    <div className="mt-20 text-center relative">
      <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-100">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Transform Your Future with Our Courses
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
          Specialized programs designed for success in NEET, JEE, and competitive exams, combining expert mentorship with cutting-edge resources.
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-8 py-4 rounded-xl text-lg font-semibold text-white transition-all shadow-lg hover:shadow-xl"
        >
          <Link to="/courses" className="flex items-center gap-2">
            <span>Explore Programs</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </div>
  </div>
</section>
<section className="py-20 bg-gradient-to-b from-indigo-50 to-blue-50 relative">
  {/* Decorative elements */}
  <div className="absolute top-0 left-0 w-full h-full opacity-15">
    <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl"></div>
    <div className="absolute top-1/2 -right-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl"></div>
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
          Parents Speak
        </span>
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Hear from our parent community about their experiences with Hidayah Junior College
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Testimonial 1 */}
      <motion.div 
        whileHover={{ y: -10 }}
        className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <div className="mb-4 text-blue-500">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M10 7L8 11H11V17H5V11L7 7H10M18 7L16 11H19V17H13V11L15 7H18Z" />
          </svg>
        </div>
        <p className="text-gray-600 mb-6 leading-relaxed">
          "The personalized attention my daughter receives here is remarkable. Her confidence in STEM subjects has grown tremendously since joining."
        </p>
        <div className="flex items-center">
          <img 
            src="/parent1.jpg" 
            alt="Parent" 
            className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-blue-200"
          />
          <div>
            <h4 className="font-semibold text-gray-800">Mrs. Ayesha Khan</h4>
            <p className="text-sm text-blue-600">Mother of Aalia Khan (XI Science)</p>
          </div>
        </div>
      </motion.div>

      {/* Testimonial 2 */}
      <motion.div 
        whileHover={{ y: -10 }}
        className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <div className="mb-4 text-blue-500">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M10 7L8 11H11V17H5V11L7 7H10M18 7L16 11H19V17H13V11L15 7H18Z" />
          </svg>
        </div>
        <p className="text-gray-600 mb-6 leading-relaxed">
          "The regular parent-teacher interactions and progress tracking system gives us complete transparency about our child's development."
        </p>
        <div className="flex items-center">
          <img 
            src="/parent2.jpg" 
            alt="Parent" 
            className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-blue-200"
          />
          <div>
            <h4 className="font-semibold text-gray-800">Mr. Ramesh Patel</h4>
            <p className="text-sm text-blue-600">Father of Rohan Patel (XII NEET)</p>
          </div>
        </div>
      </motion.div>

      {/* Testimonial 3 */}
      <motion.div 
        whileHover={{ y: -10 }}
        className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <div className="mb-4 text-blue-500">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M10 7L8 11H11V17H5V11L7 7H10M18 7L16 11H19V17H13V11L15 7H18Z" />
          </svg>
        </div>
        <p className="text-gray-600 mb-6 leading-relaxed">
          "The balance between academic rigor and co-curricular activities helps our child stay motivated and engaged throughout the year."
        </p>
        <div className="flex items-center">
          <img 
            src="/parent3.jpg" 
            alt="Parent" 
            className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-blue-200"
          />
          <div>
            <h4 className="font-semibold text-gray-800">Mrs. Priya Sharma</h4>
            <p className="text-sm text-blue-600">Mother of Anika Sharma (XI JEE)</p>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</section>
<section className="relative py-20 bg-gradient-to-b from-blue-50 to-indigo-50 overflow-hidden">
  {/* Decorative elements */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute top-20 left-20 w-64 h-64 bg-blue-200 rounded-full filter blur-3xl mix-blend-multiply"></div>
    <div className="absolute bottom-20 right-20 w-64 h-64 bg-indigo-200 rounded-full filter blur-3xl mix-blend-multiply"></div>
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
    <div className="text-center mb-16">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-gray-900 mb-4"
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
          Visit Our Campus
        </span>
      </motion.h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Experience our state-of-the-art facilities and vibrant learning environment
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Map Container */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="h-96 w-full rounded-3xl overflow-hidden shadow-2xl relative"
      >
        <iframe
          title="College Location"
          className="w-full h-full border-none"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.801272061524!2d77.59755431482116!3d12.917832690892524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15c49c040309%3A0x6553433f72187b12!2sBangalore%20International%20Exhibition%20Centre!5e0!3m2!1sen!2sin!4v1624963524256!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
        ></iframe>
        
        {/* Map Overlay Effect */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-blue-50/10 to-indigo-50/10"></div>
      </motion.div>

      {/* Directions Content */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-blue-900 mb-6">
            Get Directions
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-lg font-medium text-gray-900">AVVA College Campus</p>
                <p className="text-gray-600">123 Education Street</p>
                <p className="text-gray-600">Knowledge City, Bangalore 560001</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-gray-600">+91 80 2345 6789</p>
                <p className="text-gray-600">admissions@avvacollege.in</p>
              </div>
            </div>
          </div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8"
          >
            <a
              href="https://www.google.com/maps/dir//AVVA+College,+123+Education+Street,+Knowledge+City,+Bangalore"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
              </svg>
              Get Directions
            </a>
          </motion.div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-blue-900 mb-6">
            Campus Hours
          </h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Monday - Friday</span>
              <span className="text-gray-900 font-medium">8:00 AM - 6:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Saturday</span>
              <span className="text-gray-900 font-medium">9:00 AM - 4:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Sunday</span>
              <span className="text-gray-900 font-medium">Closed</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</section>
<Footer />
    </>
  );
};

export default Hero;
