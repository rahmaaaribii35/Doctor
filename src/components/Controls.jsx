import { Search, List, Grid3x3, Calendar } from 'lucide-react'

function Controls({ viewMode, setViewMode, selectedCount, totalPatients }) {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-4">
        {/* Boutons mta3 modes affichage */}
        <div className="flex items-center gap-2 border border-gray-300 rounded-lg p-1">
          {/* Bouton Liste */}
          <button
            onClick={() => setViewMode('list')} // 7awwel mode lel liste
            className={`p-2 rounded ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-gray-600'}`}
            title="Liste"
          >
            <List className="w-5 h-5" />
          </button>
          {/* Bouton Grille */}
          <button
            onClick={() => setViewMode('grid')} // 7awwel mode lel grille
            className={`p-2 rounded ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-gray-600'}`}
            title="Grille"
          >
            <Grid3x3 className="w-5 h-5" />
          </button>
          {/* Bouton Calendrier */}
          <button
            onClick={() => setViewMode('calendar')} // 7awwel mode lel calendrier
            className={`p-2 rounded ${viewMode === 'calendar' ? 'bg-blue-600 text-white' : 'text-gray-600'}`}
            title="Calendrier"
          >
            <Calendar className="w-5 h-5" />
          </button>
        </div>
        {/* Affichi selected patients ken mode = list w fih selected */}
        {selectedCount > 0 && viewMode === 'list' && (
          <div className="flex items-center gap-2">
            <span className="text-gray-700 font-medium">Selected {selectedCount}</span>
            <select className="border border-gray-300 rounded-lg px-3 py-1.5 text-gray-700 bg-white">
              <option>Choose action▾</option>
            </select>
          </div>
        )}
      </div>
      <div className="flex items-center gap-4">
        {/* Barre recherche */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {/* Total patients ken mode = list */}
        {viewMode === 'list' && (
          <div className="text-gray-600">
            Total patients: <span className="font-semibold">{totalPatients}</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default Controls

