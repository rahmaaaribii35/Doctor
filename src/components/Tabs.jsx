import { useNavigate, useLocation } from 'react-router-dom'

function Tabs({ activeTab, setActiveTab }) {
  const navigate = useNavigate()
  const location = useLocation()
  
  // Déterminer l'onglet actif basé sur la route
  const getCurrentTab = () => {
    if (location.pathname === '/patients-overview') return 'overview'
    if (location.pathname === '/patients' || location.pathname.startsWith('/patients/')) return 'list'
    return activeTab
  }
  
  const currentActiveTab = getCurrentTab()
  
  const tabs = [
    { id: 'overview', label: 'Patients overview' },
    { id: 'list', label: 'Patients list' }
  ]

  const handleTabClick = (tabId) => {
    if (tabId === 'overview') {
      navigate('/patients-overview')
    } else if (tabId === 'list') {
      navigate('/patients')
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
                ? 'border-blue-600 text-blue-600 font-semibold'
                : 'border-transparent text-gray-600 hover:text-gray-800'
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

