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
  // State mta3 patients elli m5tarin (selected)
  const [selectedPatients, setSelectedPatients] = useState(['kate-miller', 'john-crow'])
  
  // State mta3 mode affichage: 'list' (liste), 'grid' (grille), wala 'calendar' (calendrier)
  const [viewMode, setViewMode] = useState('list')

  // Fonction bch t7awwel selection patient (zid wala 7aseb)
  const togglePatientSelection = (patientId) => {
    setSelectedPatients(prev =>
      prev.includes(patientId)
        ? prev.filter(id => id !== patientId) // Ken mawjoud, 7asebou (deselect)
        : [...prev, patientId] // Ken mch mawjoud, zidiihhhh (select)
    )
  }

  return (
    <div className="flex h-screen bg-blue-50">
      <Sidebar /> {/* Sidebar men liser*/}

      <div className="flex-1 flex flex-col">
        <Headerlistepatient /> {/* Header men fou9 */}
        <Tabs /> {/* Tabs: Overview wala List */}

        <div className="flex-1 bg-white px-8 py-6 overflow-auto">
          {/* Controls: boutons list/grid/calendar w search */}
          <Controls
            viewMode={viewMode}
            setViewMode={setViewMode} // Bch t7awwel mode affichage
            selectedCount={selectedPatients.length}
            totalPatients={57}
          />

          {/* Ken mode = calendar, affichi calendrier */}
          {viewMode === 'calendar' ? (
            <AppointmentsCalendar appointments={appointments} />
          ) : viewMode === 'list' ? (
            // Ken mode = list, affichi tableau patients
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
            // Ken mode = grid, affichi message (mazel mouch implementé)
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

