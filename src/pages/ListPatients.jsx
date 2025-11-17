import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Tabs from '../components/Tabs'
import Controls from '../components/Controls'
import PatientTable from '../components/PatientTable'
import Legend from '../components/Legend'
import { patients } from '../data/patientsData'
import { getStatusColor } from '../utils/statusUtils'

function ListPatients() {
  const [selectedPatients, setSelectedPatients] = useState(['kate-miller', 'john-crow'])
  const [activeTab, setActiveTab] = useState('list')
  const [viewMode, setViewMode] = useState('list')

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
        <Header />
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="flex-1 bg-white px-8 py-6 overflow-auto">
          <Controls
            viewMode={viewMode}
            setViewMode={setViewMode}
            selectedCount={selectedPatients.length}
            totalPatients={57}
          />

          <PatientTable
            patients={patients}
            selectedPatients={selectedPatients}
            onToggleSelection={togglePatientSelection}
            getStatusColor={getStatusColor}
          />

          <Legend />
        </div>
      </div>
    </div>
  )
}

export default ListPatients

