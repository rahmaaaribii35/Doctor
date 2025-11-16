import { LayoutDashboard, Users, Calendar, Settings } from 'lucide-react'

function Sidebar() {
  return (
    <div className="w-20 bg-blue-600 flex flex-col items-center py-6">
      <div className="mb-8">
        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-blue-600">
            <path d="M12 2C8.5 2 6 4.5 6 8c0 2 1 3.5 2 4.5v2c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-2c1-1 2-2.5 2-4.5 0-3.5-2.5-6-6-6z" fill="currentColor"/>
            <path d="M9 14h6M10 16h4M11 18h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="9" cy="8" r="1" fill="currentColor"/>
            <circle cx="15" cy="8" r="1" fill="currentColor"/>
          </svg>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <LayoutDashboard className="w-6 h-6 text-white cursor-pointer hover:opacity-80" />
        <Users className="w-6 h-6 text-white cursor-pointer hover:opacity-80" />
        <div className="relative">
          <Calendar className="w-6 h-6 text-white cursor-pointer hover:opacity-80" />
          <span className="absolute -top-2 -right-2 bg-white text-blue-600 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">22</span>
        </div>
      </div>
      <div className="mt-auto">
        <Settings className="w-6 h-6 text-white cursor-pointer hover:opacity-80" />
      </div>
    </div>
  )
}

export default Sidebar

