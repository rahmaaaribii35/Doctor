import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'

// Pages
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import MyAppointements from './pages/MyAppointements'
import ListPatients from './pages/ListPatients'
import PatientDetail from './pages/PatientDetail'
import Appointment from './pages/Appointment'
import PatientsOverview from './components/PatientsOverview'
import HomeDoctor from './pages/Doctor/HomeDoctor'
import HomePatient from './pages/HomePatient'
import HomeSecretary from './pages/HomeSecretary'
import Admin from './pages/Admin'

// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Sidebar } from 'lucide-react'

function App() {
  const location = useLocation()

  // Détecte si on est sur une page Patients
  const isPatientsPage =
    location.pathname === '/patients' ||
    location.pathname === '/patients-overview' ||
    location.pathname.startsWith('/patients/')

  return (
    <div className='min-h-screen w-full bg-white text-slate-900'>

      {/* Navbar uniquement si pas sur page Patients */}
      {!isPatientsPage && (
        <div className='mx-4 sm:mx-[10%]'>
          <Navbar />
        </div>
      )}




      {/* Main content */}
      <main className={isPatientsPage ? '' : 'mx-4 sm:mx-[10%] py-6'}>
        <Routes>
          {/* Public pages */}
          <Route path='/' element={<Home />} />
          <Route path='/doctors' element={<Doctors />} />
          <Route path='/doctors/:speciality' element={<Doctors />} />
          <Route path='/login' element={<Login />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />

          {/* User pages */}
          <Route path='/my-profile' element={<MyProfile />} />
          <Route path='/my-appointments' element={<MyAppointements />} />
          <Route path='/my-appointments/:doctorId' element={<MyAppointements />} />
          <Route path='/appointments/:doctorId' element={<Appointment />} />

          {/* Patient pages */}
          <Route path='/patients' element={<ListPatients />} />
          <Route path='/patients-overview' element={<PatientsOverview />} />
          <Route path='/patients/:patientId' element={<PatientDetail />} />

          {/* Role-specific home pages */}
          <Route path='/patient' element={<HomePatient />} />
          <Route path='/doctor' element={<HomeDoctor />} />
          <Route path='/secretary' element={<HomeSecretary />} />
          <Route path='/admin' element={<Admin />} />
        </Routes>
      </main>

      {/* Footer uniquement si pas sur page Patients */}
      {!isPatientsPage && (
        <div className='mx-4 sm:mx-[10%]'>
          <Footer />
        </div>
      )}
    </div>
  )
}

export default App
