import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import MyAppointements from './pages/MyAppointements'
import ListPatients from './pages/ListPatients'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


function App() {
  return (
    <div className='min-h-screen w-full bg-white text-slate-900'>
      <div className='mx-4 sm:mx-[10%]'>
        <Navbar />
      </div>
      <main className='mx-4 sm:mx-[10%] py-6'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/doctors' element={<Doctors />} />
          <Route path='/doctors/:speciality' element={<Doctors />} />
          <Route path='/login' element={<Login />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/my-profile' element={<MyProfile />} />
          <Route path='/my-appointments' element={<MyAppointements />} />
          <Route path='/my-appointments/:doctorId' element={<MyAppointements />} />
          <Route path='/patients' element={<ListPatients />} />
        </Routes>
      </main>
      <div className='mx-4 sm:mx-[10%]'>
        <Footer />
      </div>
    </div>
  )
}

export default App
