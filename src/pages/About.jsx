import { Link } from 'react-router-dom';
import { AcademicCapIcon, SparklesIcon, BuildingLibraryIcon, HeartIcon, ScaleIcon, BookOpenIcon, UserGroupIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';
 import Header from "../components/Header"
 import Footer from "../components/Footer"
const AboutPage = () => {
  const values = [
    {
      title: "Student-Centered Approach",
      icon: <HeartIcon className="w-8 h-8 text-blue-600" />,
      description: "We place students at the core of every decision and innovation"
    },
    {
      title: "Academic Integrity",
      icon: <ScaleIcon className="w-8 h-8 text-emerald-600" />,
      description: "Maintaining highest ethical standards in education"
    },
    {
      title: "Innovation & Excellence",
      icon: <SparklesIcon className="w-8 h-8 text-purple-600" />,
      description: "Pioneering teaching methodologies for exceptional results"
    },
    {
      title: "Inclusive Community",
      icon: <UserGroupIcon className="w-8 h-8 text-amber-600" />,
      description: "Fostering diverse and welcoming learning environment"
    }
  ];

  return (
    <>
    <Header />
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-800 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-6">Shaping Minds Since 1988</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Transforming education through innovation, integrity, and inclusive excellence
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <AcademicCapIcon className="w-8 h-8 text-blue-600" />
                Our Legacy
              </h2>
              <p className="text-gray-600 mb-4">
                As Hyderabad's premier junior college, PAGE has been crafting academic success stories since 1988. 
                Our integrated programs have empowered thousands of students to secure admissions in top global 
                universities through:
              </p>
              <ul className="grid grid-cols-2 gap-4 mb-6">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Psychometric Assessments
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Digital-First Classrooms
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Industry Expert Faculty
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Holistic Development
                </li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-600 text-white p-8 rounded-2xl">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <SparklesIcon className="w-6 h-6" />
                  Vision
                </h3>
                <p className="text-blue-50">
                  To be the nation's foremost provider of transformative career education
                </p>
              </div>
              
              <div className="bg-purple-600 text-white p-8 rounded-2xl">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <BookOpenIcon className="w-6 h-6" />
                  Mission
                </h3>
                <p className="text-purple-50">
                  Empowering students to maximize potential through innovative pedagogy
                </p>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Our Core Values
            </h2>
            <div className="grid gap-6">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-xl transition-colors">
                  <div className={`p-3 bg-${value.icon.props.className.split(' ')[2]}-100 rounded-lg`}>
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Campus Section */}
        <div className="mt-16 bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <BuildingOfficeIcon className="w-8 h-8 text-amber-600" />
            Our Campuses
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Banjara Hills', 'Himayatnagar', 'Hitec City', 'Kompally'].map((campus, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-xl hover:border-blue-200 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{campus}</h3>
                <p className="text-gray-600">State-of-the-art learning centers with:</p>
                <ul className="mt-2 space-y-1">
                  <li className="flex items-center gap-2 text-sm">
                    <span className="text-blue-600">✓</span> Digital Classrooms
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <span className="text-blue-600">✓</span> Modern Labs
                  </li>
                  {campus === 'Kompally' && (
                    <li className="flex items-center gap-2 text-sm">
                      <span className="text-blue-600">✓</span> Boys Hostel
                    </li>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Link
            to="/register"
            className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105"
          >
            <BookOpenIcon className="w-5 h-5 mr-2" />
            Join Our Legacy
          </Link>
          <p className="mt-4 text-gray-600">
            35 years of academic excellence | 15,000+ successful alumni
          </p>
        </div>
      </div>
    </div>
    <Footer /> 
    </>
  );
};

export default AboutPage;