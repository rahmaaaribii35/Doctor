import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact';
import MyProfile from './pages/MyProfile'
import MyAppointements from './pages/Myappointements'
import Navbar from './components/Navbar'

import HomeDoctor from './pages/Doctor/HomeDoctor'
import HomePatient from './pages/HomePatient'
import HomeSecretary from './pages/HomeSecretary'
import Admin from './pages/Admin'
import Footer from './components/Footer'


function App() {
  

  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path="/patient" element={<HomePatient />} />
        <Route path="/doctor" element={<HomeDoctor />} />
        <Route path="/secretary" element={<HomeSecretary />} />
        <Route path="/admin" element={<Admin />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/my-profile' element={<MyProfile/>} />
        <Route path='/my-appointments' element={<MyAppointements />} />
        <Route path='/my-appointments/:doctorId' element={<MyAppointements />} />
      </Routes>
      <Footer/>
    </div>
    
  )
}

export default App
