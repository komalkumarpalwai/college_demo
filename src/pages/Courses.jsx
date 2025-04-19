import { Link } from 'react-router-dom';
import {
  AcademicCapIcon,
  BeakerIcon,
  CalculatorIcon,
  ScaleIcon,
  BookOpenIcon,
  ChartBarIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CoursesPage = () => {
  const courses = [
    {
      code: 'MPC',
      title: 'Mathematics, Physics, Chemistry',
      icon: <CalculatorIcon className="w-8 h-8 text-blue-600" />,
      features: [
        'JEE Main & Advanced Preparation',
        'Engineering Foundation Program',
        'Advanced Calculus Workshops',
        'Robotics & AI Labs',
      ],
      exams: ['JEE', 'BITSAT', 'VITEEE', 'SRMJEE'],
      color: 'blue',
    },
    {
      code: 'BIPC',
      title: 'Biology, Physics, Chemistry',
      icon: <BeakerIcon className="w-8 h-8 text-emerald-600" />,
      features: [
        'NEET & AIIMS Specialization',
        'Medical Research Projects',
        'Anatomy Masterclass',
        'Biotechnology Labs',
      ],
      exams: ['NEET', 'AIIMS', 'JIPMER', 'AFMC'],
      color: 'emerald',
      isPopular: true,
    },
    {
      code: 'MEC',
      title: 'Mathematics, Economics, Commerce',
      icon: <ChartBarIcon className="w-8 h-8 text-purple-600" />,
      features: [
        'CA Foundation Prep',
        'Econometric Analysis',
        'Business Analytics',
        'Financial Modeling',
      ],
      exams: ['CA', 'CFA', 'CMA', 'NSE'],
      color: 'purple',
    },
    {
      code: 'CEC',
      title: 'Commerce, Economics, Civics',
      icon: <ScaleIcon className="w-8 h-8 text-amber-600" />,
      features: [
        'Corporate Law Basics',
        'Public Policy Analysis',
        'Entrepreneurship Labs',
        'Stock Market Simulations',
      ],
      exams: ['CLAT', 'UPSC', 'CAT', 'IPMAT'],
      color: 'amber',
    },
    {
      code: 'HEC',
      title: 'Humanities, Economics, Civics',
      icon: <GlobeAltIcon className="w-8 h-8 text-rose-600" />,
      features: [
        'UPSC Foundation Program',
        'International Relations',
        'Sociological Research',
        'Public Administration',
      ],
      exams: ['UPSC', 'CAT', 'LSAT', 'NIFT'],
      color: 'rose',
    },
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              Academic Streams at Hidayah Junior College
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized programs designed for future-ready career paths
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all group border-2 border-transparent hover:border-${course.color}-100`}
              >
                {course.isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Most Preferred
                  </div>
                )}
                <div className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`p-3 bg-${course.color}-50 rounded-xl`}>
                      {course.icon}
                    </div>
                    <div>
                      <span className={`text-sm font-semibold text-${course.color}-600`}>
                        {course.code}
                      </span>
                      <h2 className="text-2xl font-bold text-gray-900 mt-1">{course.title}</h2>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <AcademicCapIcon className={`w-5 h-5 text-${course.color}-600`} />
                      Key Features
                    </h3>
                    <ul className="space-y-3">
                      {course.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-700">
                          <div className={`w-2 h-2 bg-${course.color}-600 rounded-full mt-2`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <BookOpenIcon className={`w-5 h-5 text-${course.color}-600`} />
                      Targeted Exams
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {course.exams.map((exam, i) => (
                        <span
                          key={i}
                          className={`px-3 py-1 bg-${course.color}-100 text-${course.color}-800 rounded-full text-sm`}
                        >
                          {exam}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/register"
              className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105"
            >
              <BookOpenIcon className="w-5 h-5 mr-2" />
              Enroll Now for 2024-25
            </Link>
            <p className="mt-4 text-gray-600 text-sm">
              Admissions open until 30th November 2024
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CoursesPage;
