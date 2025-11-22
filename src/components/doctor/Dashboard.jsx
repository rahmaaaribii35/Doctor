import React from 'react'

const Dashboard = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Tableau de bord</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold mb-2">Patients aujourd'hui</h3>
          <p className="text-3xl font-bold text-blue-600">5</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold mb-2">Rendez-vous à venir</h3>
          <p className="text-3xl font-bold text-green-600">12</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold mb-2">Nouveaux patients</h3>
          <p className="text-3xl font-bold text-orange-600">3</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="text-xl font-semibold mb-4">Prochains rendez-vous</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center p-3 border rounded-lg">
            <div>
              <p className="font-semibold">Jean Dupont</p>
              <p className="text-sm text-gray-600">Consultation</p>
            </div>
            <div className="text-right">
              <p className="font-semibold">09:00</p>
              <p className="text-sm text-gray-600">2024-01-25</p>
            </div>
          </div>
          <div className="flex justify-between items-center p-3 border rounded-lg">
            <div>
              <p className="font-semibold">Marie Martin</p>
              <p className="text-sm text-gray-600">Suivi</p>
            </div>
            <div className="text-right">
              <p className="font-semibold">10:30</p>
              <p className="text-sm text-gray-600">2024-01-25</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard