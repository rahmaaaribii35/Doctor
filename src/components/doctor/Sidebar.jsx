import React from 'react'


const Sidebar = ({ activeSection, setActiveSection, doctorName }) => {
  return (
    <div className="w-64 bg-white shadow-lg">
      <div className="p-6 border-b">
        <h1 className="text-xl font-bold text-gray-800">Doctor Dashboard</h1>
        <p className="text-sm text-gray-600 mt-1">{doctorName || 'Dr. Martin'}</p>

      </div>

      <nav className="mt-6">
        <div className="px-4 space-y-2">

          <button
            onClick={() => setActiveSection('dashboard')}
            className={`w-full text-left px-4 py-3 rounded-lg ${activeSection === 'dashboard'
              ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600'
              : 'text-gray-600 hover:bg-gray-100'
              }`}
          >
            Dashboard
          </button>

          <button
            onClick={() => setActiveSection('calendar')}
            className={`w-full text-left px-4 py-3 rounded-lg ${activeSection === 'calendar'
              ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600'
              : 'text-gray-600 hover:bg-gray-100'
              }`}
          >
            Calendar
          </button>

          <button
            onClick={() => setActiveSection('patients')}
            className={`w-full text-left px-4 py-3 rounded-lg ${activeSection === 'patients'
              ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600'
              : 'text-gray-600 hover:bg-gray-100'
              }`}
          >
            Patients
          </button>

          <button
            onClick={() => setActiveSection('profile')}
            className={`w-full text-left px-4 py-3 rounded-lg ${activeSection === 'profile'
              ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600'
              : 'text-gray-600 hover:bg-gray-100'
              }`}
          >
            My Profile
          </button>

        </div>
      </nav>
    </div>
  )
}

export default Sidebar
