import { Phone, Mail, MoreVertical } from 'lucide-react'

function PatientTable({ patients, selectedPatients, onToggleSelection, getStatusColor }) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="px-4 py-3 text-left font-semibold">First Name</th>
            <th className="px-4 py-3 text-left font-semibold">Last Name</th>
            <th className="px-4 py-3 text-left font-semibold">Status +</th>
            <th className="px-4 py-3 text-left font-semibold">Last Measurement</th>
            <th className="px-4 py-3 text-left font-semibold">Last Visit</th>
            <th className="px-4 py-3 text-left font-semibold">Contact</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr
              key={patient.id}
              className={`border-b border-gray-200 hover:bg-blue-50 transition-colors ${
                selectedPatients.includes(patient.id) ? 'bg-blue-50' : ''
              }`}
            >
              <td className="px-4 py-4">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={selectedPatients.includes(patient.id)}
                    onChange={() => onToggleSelection(patient.id)}
                    className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                  />
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 font-semibold text-sm">{patient.avatar}</span>
                  </div>
                  <span className="font-medium text-gray-800">{patient.firstName}</span>
                </div>
              </td>
              <td className="px-4 py-4 text-gray-800">{patient.lastName}</td>
              <td className="px-4 py-4">
                <div className={`w-4 h-4 rounded ${getStatusColor(patient.status)}`}></div>
              </td>
              <td className="px-4 py-4">
                <div className="text-gray-800">
                  <div className="font-medium">{patient.bloodPressure} - {patient.heartRate}</div>
                  <div className="text-sm text-gray-600">{patient.measurementDate} | {patient.measurementTime}</div>
                </div>
              </td>
              <td className="px-4 py-4 text-gray-800">{patient.lastVisit}</td>
              <td className="px-4 py-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gray-600 cursor-pointer hover:text-blue-600" />
                  <Mail className="w-5 h-5 text-gray-600 cursor-pointer hover:text-blue-600" />
                  <MoreVertical className="w-5 h-5 text-gray-600 cursor-pointer hover:text-blue-600" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PatientTable

