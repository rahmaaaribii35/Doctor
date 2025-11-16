import { Bell } from 'lucide-react'

function Header() {
  return (
    <div className="bg-blue-50 px-8 py-4 flex items-center justify-between border-b border-blue-100">
      <h1 className="text-2xl font-bold text-gray-800">PATIENTS MANAGER</h1>
      <div className="flex items-center gap-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors">
          <span>Invite new patients</span>
          <span className="text-xl">+</span>
        </button>
        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
          <span className="text-gray-600 font-semibold">JD</span>
        </div>
        <Bell className="w-6 h-6 text-gray-600 cursor-pointer hover:text-gray-800" />
      </div>
    </div>
  )
}

export default Header

