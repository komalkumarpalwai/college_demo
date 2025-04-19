import { Link } from 'react-router-dom';
import { TrophyIcon, UsersIcon, CalendarIcon, ChartBarIcon, AcademicCapIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SportsPage = () => {
  const sports = [
    {
      name: "Basketball",
      icon: "🏀",
      achievements: [
        "State Champions 2022",
        "Inter-College Tournament Winners"
      ],
      coach: "Rajesh Kumar",
      schedule: "Mon, Wed, Fri (4-6 PM)"
    },
    {
      name: "Cricket",
      icon: "🏏",
      achievements: [
        "Regional Tournament Finalists",
        "Best Bowling Team Award"
      ],
      coach: "Vikram Singh",
      schedule: "Tue, Thu, Sat (3-6 PM)"
    },
    {
      name: "Badminton",
      icon: "🏸",
      achievements: [
        "District Level Champions",
        "2 State Level Players"
      ],
      coach: "Priya Sharma",
      schedule: "Daily (Morning & Evening)"
    },
    {
      name: "Athletics",
      icon: "🏃",
      achievements: [
        "5 National Level Athletes",
        "State Meet Record Holders"
      ],
      coach: "Anil Patel",
      schedule: "Daily (Morning)"
    }
  ];

  const facilities = [
    {
      title: "Olympic-Sized Basketball Court",
      description: "FIBA approved flooring with electronic scoreboard"
    },
    {
      title: "Cricket Ground",
      description: "Turf pitch with professional practice nets"
    },
    {
      title: "Badminton Complex",
      description: "4 synthetic courts with international standards"
    },
    {
      title: "Athletics Track",
      description: "400m synthetic track with field event facilities"
    }
  ];

  return (
   <> 
   <Header />
   <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-800 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-6">Championing Sports Excellence</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Where athletic potential meets professional training and sportsmanship
          </p>
        </div>
      </div>

      {/* Sports Programs Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <TrophyIcon className="w-8 h-8 text-blue-600" />
            Our Sports Programs
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Professional coaching, state-of-the-art facilities, and a winning tradition
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {sports.map((sport, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden group">
              <div className="p-8">
                <div className="text-5xl mb-4">{sport.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{sport.name}</h3>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-500 mb-2">ACHIEVEMENTS</h4>
                  <ul className="space-y-1">
                    {sport.achievements.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700">
                        <span className="text-blue-600">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t pt-4">
                  <div className="flex items-center gap-2 text-gray-700 mb-2">
                    <UsersIcon className="w-5 h-5 text-blue-600" />
                    <span>Coach: {sport.coach}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <CalendarIcon className="w-5 h-5 text-blue-600" />
                    <span>{sport.schedule}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Facilities Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <ShieldCheckIcon className="w-8 h-8 text-blue-600" />
            World-Class Sports Facilities
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="flex items-start gap-4 p-6 border border-gray-200 rounded-xl hover:border-blue-200 transition-colors">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <ChartBarIcon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{facility.title}</h3>
                  <p className="text-gray-600">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6">Our Sporting Legacy</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-2xl">🏆</span>
                <span>15+ State Championship Titles</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🌟</span>
                <span>8 National Level Players</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">👟</span>
                <span>3 School National Records</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🎯</span>
                <span>100% Sports Scholarship Success Rate</span>
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Sports Philosophy</h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                At Hidayah Junior College, we believe sports education develops discipline, 
                teamwork and leadership. Our holistic approach balances athletic development 
                with academic excellence.
              </p>
              <p className="text-gray-700">
                We offer specialized training programs, nutrition guidance, and sports 
                psychology sessions to help students achieve their full potential.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <h3 className="font-semibold text-blue-800 mb-2">Annual Events:</h3>
                <ul className="grid grid-cols-2 gap-2">
                  <li className="flex items-center gap-2 text-sm">
                    <span className="text-blue-600">•</span> Sports Day
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <span className="text-blue-600">•</span> Inter-House Cup
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <span className="text-blue-600">•</span> Alumni Matches
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <span className="text-blue-600">•</span> Coach Clinics
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link
            to="/register"
            className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105"
          >
            <AcademicCapIcon className="w-5 h-5 mr-2" />
            Join Our Winning Team
          </Link>
          <p className="mt-4 text-gray-600">
            Sports trials conducted every June and December
          </p>
        </div>
      </div>
    </div>
   <Footer />
   </>
  );
};

export default SportsPage;