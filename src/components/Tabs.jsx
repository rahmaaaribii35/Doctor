function Tabs({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'overview', label: 'Patients overview' },
    { id: 'list', label: 'Patients list' },
    { id: 'invitations', label: 'Invitations' }
  ]

  return (
    <div className="bg-white px-8 border-b border-gray-200">
      <div className="flex gap-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`py-4 px-2 border-b-2 transition-colors ${
              activeTab === tab.id
                ? 'border-blue-600 text-blue-600 font-semibold'
                : 'border-transparent text-gray-600 hover:text-gray-800'
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Tabs

