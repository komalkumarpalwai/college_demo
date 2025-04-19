import { Link } from 'react-router-dom';
import { UserCircleIcon, AcademicCapIcon, DocumentTextIcon, IdentificationIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AdmissionForm = () => {
  const courses = ["MPC", "BIC", "MEC", "CEC", "HEC"];

  return (
   <>
   <Header />
   <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-800 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-6">Intermediate Admission 2024-25</h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            Begin your journey to academic excellence with Hidayah Junior College
          </p>
        </div>
      </div>

      {/* Registration Form */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <form className="bg-white rounded-2xl shadow-xl p-8">
          {/* Student Details Section */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-8">
              <UserCircleIcon className="w-8 h-8 text-indigo-600" />
              <h2 className="text-2xl font-bold text-gray-900">Student Details</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                <input 
                  type="text" 
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                <input 
                  type="text" 
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth *</label>
                <input 
                  type="date" 
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Gender *</label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input type="radio" name="gender" value="male" required className="h-4 w-4 text-indigo-600" />
                    <span className="ml-2">Male</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="gender" value="female" className="h-4 w-4 text-indigo-600" />
                    <span className="ml-2">Female</span>
                  </label>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                <input 
                  type="tel" 
                  pattern="[0-9]{10}"
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  placeholder="9876543210"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                <input 
                  type="email" 
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  placeholder="student@example.com"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Address *</label>
                <textarea 
                  rows="3" 
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                ></textarea>
              </div>
            </div>
          </div>

          {/* Academic Details Section */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-8">
              <AcademicCapIcon className="w-8 h-8 text-indigo-600" />
              <h2 className="text-2xl font-bold text-gray-900">Academic Details</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">10th Percentage/GPA *</label>
                <input 
                  type="number" 
                  min="0" 
                  max="100" 
                  step="0.01" 
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">10th School Name *</label>
                <input 
                  type="text" 
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Year of Passing *</label>
                <input 
                  type="number" 
                  min="2010" 
                  max="2024" 
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Select Course *</label>
                <select 
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="">Choose your course</option>
                  {courses.map((course) => (
                    <option key={course} value={course}>{course}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Guardian Details Section */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-8">
              <IdentificationIcon className="w-8 h-8 text-indigo-600" />
              <h2 className="text-2xl font-bold text-gray-900">Parent/Guardian Details</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Guardian Name *</label>
                <input 
                  type="text" 
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Relation *</label>
                <input 
                  type="text" 
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Occupation *</label>
                <input 
                  type="text" 
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Contact Number *</label>
                <input 
                  type="tel" 
                  pattern="[0-9]{10}"
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
          </div>

          {/* Documents Upload Section */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-8">
              <DocumentTextIcon className="w-8 h-8 text-indigo-600" />
              <h2 className="text-2xl font-bold text-gray-900">Documents Upload</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Passport Photo *</label>
                <input 
                  type="file" 
                  accept="image/*" 
                  required 
                  className="w-full file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">10th Marks Memo *</label>
                <input 
                  type="file" 
                  accept=".pdf,.jpg,.png" 
                  required 
                  className="w-full file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Transfer Certificate *</label>
                <input 
                  type="file" 
                  accept=".pdf,.jpg,.png" 
                  required 
                  className="w-full file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Aadhar Card *</label>
                <input 
                  type="file" 
                  accept=".pdf,.jpg,.png" 
                  required 
                  className="w-full file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                />
              </div>
            </div>
          </div>

          {/* Declaration */}
          <div className="flex items-start gap-3 mb-8 p-4 bg-indigo-50 rounded-lg">
            <ShieldCheckIcon className="w-6 h-6 text-indigo-600 mt-1" />
            <div>
              <label className="flex items-center">
                <input 
                  type="checkbox" 
                  required 
                  className="h-4 w-4 text-indigo-600 rounded focus:ring-indigo-500"
                />
                <span className="ml-2 text-sm text-gray-700">
                  I hereby declare that all information provided is true to the best of my knowledge. 
                  I agree to the <Link to="/terms" className="text-indigo-600 hover:underline">terms and conditions</Link>.
                </span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105"
          >
            Submit Application
          </button>

          <p className="mt-4 text-center text-gray-600">
            After submission, our team will contact you within 3 working days
          </p>
        </form>
      </div>
    </div>
   <Footer />
   </>
  );
};

export default AdmissionForm;