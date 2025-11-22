import { useNavigate, useLocation } from 'react-router-dom'

function Tabs({ activeTab, setActiveTab }) {
  const navigate = useNavigate()
  const location = useLocation()
  
  // 7seb tab active selon route elli fiha l'utilisateur
  const getCurrentTab = () => {
    if (location.pathname === '/patients-overview') return 'overview' // Ken f overview, active = overview
    if (location.pathname === '/patients' || location.pathname.startsWith('/patients/')) return 'list' // Ken f patients, active = list
    return activeTab
  }
  
  const currentActiveTab = getCurrentTab()
  
  // Liste mta3 tabs
  const tabs = [
    { id: 'overview', label: 'Patients overview' },
    { id: 'list', label: 'Patients list' }
  ]

  // Fonction bch t7awwel page ken t7ot 3la tab
  const handleTabClick = (tabId) => {
    if (tabId === 'overview') {
      navigate('/patients-overview') // 7awwel lel page overview
    } else if (tabId === 'list') {
      navigate('/patients') // 7awwel lel page list
    }
  }

  return (
    <div className="bg-white px-8 border-b border-gray-200">
      <div className="flex gap-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`py-4 px-2 border-b-2 transition-colors ${
              currentActiveTab === tab.id
                ? 'border-blue-600 text-blue-600 font-semibold' // Ken active, couleur bleue
                : 'border-transparent text-gray-600 hover:text-gray-800' // Ken mouch active, couleur grise
            }`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Tabs

