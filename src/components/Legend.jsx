function Legend() {
  const legendItems = [
    { color: 'bg-blue-500', label: 'Normal BP' },
    { color: 'bg-yellow-500', label: 'Elevated BP' },
    { color: 'bg-red-500', label: 'High BP / Hypertensive' },
    { color: 'bg-gray-400', label: 'Not Evaluable' }
  ]

  return (
    <div className="mt-8 p-4 bg-gray-50 rounded-lg">
      <h3 className="font-bold text-gray-800 mb-3">LEGEND</h3>
      <div className="flex flex-wrap gap-6">
        {legendItems.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className={`w-4 h-4 rounded ${item.color}`}></div>
            <span className="text-gray-700">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Legend

