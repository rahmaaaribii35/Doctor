import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Tabs from '../components/Tabs'
import Controls from '../components/Controls'
import PatientTable from '../components/PatientTable'
import Legend from '../components/Legend'
import AppointmentsCalendar from '../components/AppointmentsCalendar'
import { patients } from '../data/patientsData'
import { appointments } from '../data/appointmentsData'
import { getStatusColor } from '../utils/statusUtils'
import Headerlistepatient from '../components/Headerlistepatient'

function ListPatients() {
  const [selectedPatients, setSelectedPatients] = useState(['kate-miller', 'john-crow'])
  const [viewMode, setViewMode] = useState('list') // 'list', 'grid', ou 'calendar'

  const togglePatientSelection = (patientId) => {
    setSelectedPatients(prev =>
      prev.includes(patientId)
        ? prev.filter(id => id !== patientId)
        : [...prev, patientId]
    )
  }

  return (
    <div className="flex h-screen bg-blue-50">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Headerlistepatient />
        <Tabs />

        <div className="flex-1 bg-white px-8 py-6 overflow-auto">
          <Controls
            viewMode={viewMode}
            setViewMode={setViewMode}
            selectedCount={selectedPatients.length}
            totalPatients={57}
          />

          {viewMode === 'calendar' ? (
            <AppointmentsCalendar appointments={appointments} />
          ) : viewMode === 'list' ? (
            <>
              <PatientTable
                patients={patients}
                selectedPatients={selectedPatients}
                onToggleSelection={togglePatientSelection}
                getStatusColor={getStatusColor}
              />
              <Legend />
            </>
          ) : (
            // Mode grid - vous pouvez ajouter un composant GridView ici si nécessaire
            <div className="text-center py-8 text-gray-500">
              Mode grille à implémenter
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ListPatients

