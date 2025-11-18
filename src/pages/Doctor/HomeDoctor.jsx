import React, { useState } from 'react'

const HomeDoctor = () => {
  const [activeSection, setActiveSection] = useState('dashboard')

  // Données fictives
  const patients = [
    { id: 1, name: 'Jean Dupont', age: 45, lastVisit: '2024-01-15', status: 'ancien' },
    { id: 2, name: 'Marie Martin', age: 32, lastVisit: '2024-01-20', status: 'nouveau' },
    { id: 3, name: 'Pierre Durand', age: 58, lastVisit: '2024-01-10', status: 'ancien' },
  ]

  const appointments = [
    { id: 1, patient: 'Jean Dupont', time: '09:00', date: '2024-01-25', type: 'Consultation' },
    { id: 2, patient: 'Marie Martin', time: '10:30', date: '2024-01-25', type: 'Suivi' },
  ]

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-6 border-b">
          <h1 className="text-xl font-bold text-gray-800">Espace Docteur</h1>
          <p className="text-sm text-gray-600 mt-1">Dr. Martin</p>
        </div>
        
        <nav className="mt-6">
          <div className="px-4 space-y-2">
            <button
              onClick={() => setActiveSection('dashboard')}
              className={`w-full text-left px-4 py-3 rounded-lg flex items-center space-x-3 ${
                activeSection === 'dashboard' 
                  ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <span>📊</span>
              <span>Tableau de bord</span>
            </button>

            <button
              onClick={() => setActiveSection('calendar')}
              className={`w-full text-left px-4 py-3 rounded-lg flex items-center space-x-3 ${
                activeSection === 'calendar' 
                  ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <span>📅</span>
              <span>Calendrier</span>
            </button>

            <button
              onClick={() => setActiveSection('patients')}
              className={`w-full text-left px-4 py-3 rounded-lg flex items-center space-x-3 ${
                activeSection === 'patients' 
                  ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <span>👥</span>
              <span>Patients</span>
            </button>

            <button
              onClick={() => setActiveSection('profile')}
              className={`w-full text-left px-4 py-3 rounded-lg flex items-center space-x-3 ${
                activeSection === 'profile' 
                  ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <span>👤</span>
              <span>Mon Profil</span>
            </button>
          </div>
        </nav>
      </div>

      {/* Contenu principal */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          
          {/* Section Tableau de bord */}
          {activeSection === 'dashboard' && (
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
                  {appointments.map(appointment => (
                    <div key={appointment.id} className="flex justify-between items-center p-3 border rounded-lg">
                      <div>
                        <p className="font-semibold">{appointment.patient}</p>
                        <p className="text-sm text-gray-600">{appointment.type}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">{appointment.time}</p>
                        <p className="text-sm text-gray-600">{appointment.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Section Calendrier */}
          {activeSection === 'calendar' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Calendrier des rendez-vous</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <p className="text-gray-600 mb-4">Calendrier des consultations et rendez-vous</p>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <p className="text-gray-500">Intégrez votre calendrier ici</p>
                  <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Voir le calendrier complet
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Section Patients */}
          {activeSection === 'patients' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Liste des patients</h2>
              
              <div className="bg-white rounded-lg shadow-sm border">
                <div className="p-4 border-b">
                  <div className="flex space-x-4">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                      Tous les patients
                    </button>
                    <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">
                      Nouveaux patients
                    </button>
                    <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">
                      Anciens patients
                    </button>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Patient
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Âge
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Dernière visite
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Statut
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {patients.map(patient => (
                        <tr key={patient.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="font-medium text-gray-900">{patient.name}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-gray-600">{patient.age} ans</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-gray-600">{patient.lastVisit}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              patient.status === 'nouveau' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-blue-100 text-blue-800'
                            }`}>
                              {patient.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button className="text-blue-600 hover:text-blue-900 mr-3">
                              Voir fiche
                            </button>
                            <button className="text-green-600 hover:text-green-900">
                              Prendre RDV
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Section Profil */}
          {activeSection === 'profile' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Mon Profil</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center mb-6">
                  <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center mr-6">
                    <span className="text-gray-600 text-xl">DR</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Dr. Martin</h3>
                    <p className="text-gray-600">Cardiologue</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Informations personnelles</h4>
                    <p><strong>Email:</strong> doctor@gmail.com</p>
                    <p><strong>Téléphone:</strong> +33 1 23 45 67 89</p>
                    <p><strong>Spécialité:</strong> Cardiologie</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Cabinet</h4>
                    <p>123 Avenue des Médecins</p>
                    <p>75001 Paris</p>
                    <p><strong>Horaires:</strong> 9h-18h</p>
                  </div>
                </div>
                
                <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Modifier le profil
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default HomeDoctor