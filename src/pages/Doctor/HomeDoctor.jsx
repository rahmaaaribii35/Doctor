import React, { useState } from 'react'
import Sidebar from '../../components/doctor/Sidebar'
import Dashboard from '../../components/doctor/Dashboard'
import Calendar from '../../components/doctor/Calendar'
import Patients from '../../components/doctor/Patients'
import Profile from '../../components/doctor/Profile'
import doc1 from '../../assets/doc1.png'
import doc2 from '../../assets/doc2.png'
import doc3 from '../../assets/doc3.png'
import doc4 from '../../assets/doc4.png'
import doc5 from '../../assets/doc5.png'
import doc6 from '../../assets/doc6.png'
import doc7 from '../../assets/doc7.png'
import doc8 from '../../assets/doc8.png'
import doc9 from '../../assets/doc9.png'
import doc10 from '../../assets/doc10.png'
import doc11 from '../../assets/doc11.png'
import doc12 from '../../assets/doc12.png'
import doc13 from '../../assets/doc13.png'
import doc14 from '../../assets/doc14.png'
import doc15 from '../../assets/doc15.png'


const HomeDoctor = () => {
  const [activeSection, setActiveSection] = useState('dashboard') // hedhil prop li estamltha fel sidebar
  const [currentDoctor, setCurrentDoctor] = useState(0) // bchybdal el doctor kolmara w hatitlou index mteeou 0 loul

  const doctors = [
    {
      _id: 'doc1',
      name: 'Dr. Richard James',
      image: doc1,
      speciality: 'General physician',
      degree: 'MBBS',
      experience: '4 Years',
      about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care...',
      fees: 50,
      address: {
        line1: '17th Cross, Richmond',
        line2: 'Circle, Ring Road, London'
      },
      appointments: {
        "2025-11-05": ["10:00 - John D.", "11:00 - Sarah L.", "15:00 - Mark P."],
        "2025-11-12": ["09:00 - Emma R."],
        "2025-11-20": ["14:00 - Patient X"]
      }
    },
  
    {
      _id: 'doc2',
      name: 'Dr. Emily Larson',
      image: doc2,
      speciality: 'Gynecologist',
      degree: 'MBBS',
      experience: '3 Years',
      about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care...',
      fees: 60,
      address: {
        line1: '27th Cross, Richmond',
        line2: 'Circle, Ring Road, London'
      },
      appointments: {
        "2025-11-03": ["10:00 - Sofia K.", "12:00 - Patient B"],
        "2025-11-10": ["09:00 - Patient C", "13:00 - Patient D"],
        "2025-11-18": ["11:00 - Patient E"]
      }
    },
  
    {
      _id: 'doc3',
      name: 'Dr. Sarah Patel',
      image: doc3,
      speciality: 'Dermatologist',
      degree: 'MBBS',
      experience: '1 Years',
      about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care...',
      fees: 30,
      address: {
        line1: '37th Cross, Richmond',
        line2: 'Circle, Ring Road, London'
      },
      appointments: {
        "2025-11-08": ["10:00 - Patient A"],
        "2025-11-14": ["11:00 - Patient B", "12:00 - Patient C"],
        "2025-11-22": ["09:00 - Patient D"]
      }
    },
  
    {
      _id: 'doc4',
      name: 'Dr. Christopher Lee',
      image: doc4,
      speciality: 'Pediatricians',
      degree: 'MBBS',
      experience: '2 Years',
      about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care...',
      fees: 40,
      address: {
        line1: '47th Cross, Richmond',
        line2: 'Circle, Ring Road, London'
      },
      appointments: {
        "2025-11-01": ["09:00 - Baby Adam"],
        "2025-11-09": ["10:00 - Baby Noor", "11:00 - Baby Emma"],
        "2025-11-21": ["14:00 - Baby Leo"]
      }
    },
  
    {
      _id: 'doc5',
      name: 'Dr. Jennifer Garcia',
      image: doc5,
      speciality: 'Neurologist',
      degree: 'MBBS',
      experience: '4 Years',
      about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care...',
      fees: 50,
      address: {
        line1: '57th Cross, Richmond',
        line2: 'Circle, Ring Road, London'
      },
      appointments: {
        "2025-11-04": ["09:00 - Patient A", "11:00 - Patient B"],
        "2025-11-11": ["10:00 - Patient C"],
        "2025-11-26": ["13:00 - Patient D", "15:00 - Patient E"]
      }
    },
  
    {
      _id: 'doc6',
      name: 'Dr. Andrew Williams',
      image: doc6,
      speciality: 'Neurologist',
      degree: 'MBBS',
      experience: '4 Years',
      about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care...',
      fees: 50,
      address: {
        line1: '57th Cross, Richmond',
        line2: 'Circle, Ring Road, London'
      },
      appointments: {
        "2025-11-06": ["10:00 - Patient A"],
        "2025-11-13": ["09:00 - Patient B", "12:00 - Patient C"],
        "2025-11-25": ["14:00 - Patient D"]
      }
    },
  
    {
      _id: 'doc7',
      name: 'Dr. Christopher Davis',
      image: doc7,
      speciality: 'General physician',
      degree: 'MBBS',
      experience: '4 Years',
      about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care...',
      fees: 50,
      address: {
        line1: '17th Cross, Richmond',
        line2: 'Circle, Ring Road, London'
      },
      appointments: {
        "2025-11-02": ["10:00 - Patient A"],
        "2025-11-10": ["13:00 - Patient B"],
        "2025-11-19": ["09:00 - Patient C", "11:00 - Patient D"]
      }
    },
  
    {
      _id: 'doc8',
      name: 'Dr. Timothy White',
      image: doc8,
      speciality: 'Gynecologist',
      degree: 'MBBS',
      experience: '3 Years',
      about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care...',
      fees: 60,
      address: {
        line1: '27th Cross, Richmond',
        line2: 'Circle, Ring Road, London'
      },
      appointments: {
        "2025-11-07": ["10:00 - Patient A", "12:00 - Patient B"],
        "2025-11-15": ["09:00 - Patient C"],
        "2025-11-24": ["11:00 - Patient D"]
      }
    },
  
    {
      _id: 'doc9',
      name: 'Dr. Ava Mitchell',
      image: doc9,
      speciality: 'Dermatologist',
      degree: 'MBBS',
      experience: '1 Years',
      about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care...',
      fees: 30,
      address: {
        line1: '37th Cross, Richmond',
        line2: 'Circle, Ring Road, London'
      },
      appointments: {
        "2025-11-09": ["10:00 - Patient X"],
        "2025-11-18": ["11:00 - Patient Y", "12:00 - Patient Z"],
        "2025-11-28": ["09:30 - Patient B"]
      }
    },
  
    {
      _id: 'doc10',
      name: 'Dr. Jeffrey King',
      image: doc10,
      speciality: 'Pediatricians',
      degree: 'MBBS',
      experience: '2 Years',
      about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care...',
      fees: 40,
      address: {
        line1: '47th Cross, Richmond',
        line2: 'Circle, Ring Road, London'
      },
      appointments: {
        "2025-11-06": ["10:00 - Baby A"],
        "2025-11-14": ["11:00 - Baby B"],
        "2025-11-22": ["09:00 - Baby C", "12:00 - Baby D"]
      }
    },
  
    {
      _id: 'doc11',
      name: 'Dr. Zoe Kelly',
      image: doc11,
      speciality: 'Neurologist',
      degree: 'MBBS',
      experience: '4 Years',
      about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care...',
      fees: 50,
      address: {
        line1: '57th Cross, Richmond',
        line2: 'Circle, Ring Road, London'
      },
      appointments: {
        "2025-11-05": ["10:00 - Patient J"],
        "2025-11-17": ["09:00 - Patient K", "13:00 - Patient L"],
        "2025-11-30": ["15:00 - Patient M"]
      }
    },
  
    {
      _id: 'doc12',
      name: 'Dr. Patrick Harris',
      image: doc12,
      speciality: 'Neurologist',
      degree: 'MBBS',
      experience: '4 Years',
      about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care...',
      fees: 50,
      address: {
        line1: '57th Cross, Richmond',
        line2: 'Circle, Ring Road, London'
      },
      appointments: {
        "2025-11-12": ["09:00 - Patient A"],
        "2025-11-18": ["10:00 - Patient B", "14:00 - Patient C"],
        "2025-11-23": ["11:00 - Patient D"]
      }
    },
  
    {
      _id: 'doc13',
      name: 'Dr. Chloe Evans',
      image: doc13,
      speciality: 'General physician',
      degree: 'MBBS',
      experience: '4 Years',
      about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care...',
      fees: 50,
      address: {
        line1: '17th Cross, Richmond',
        line2: 'Circle, Ring Road, London'
      },
      appointments: {
        "2025-11-03": ["10:00 - Patient A"],
        "2025-11-17": ["12:00 - Patient B"],
        "2025-11-26": ["09:00 - Patient C", "11:00 - Patient D"]
      }
    },
  
    {
      _id: 'doc14',
      name: 'Dr. Ryan Martinez',
      image: doc14,
      speciality: 'Gynecologist',
      degree: 'MBBS',
      experience: '3 Years',
      about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care...',
      fees: 60,
      address: {
        line1: '27th Cross, Richmond',
        line2: 'Circle, Ring Road, London'
      },
      appointments: {
        "2025-11-01": ["09:00 - Patient L"],
        "2025-11-16": ["10:00 - Patient M"],
        "2025-11-29": ["14:00 - Patient N", "15:00 - Patient O"]
      }
    },
  
    {
      _id: 'doc15',
      name: 'Dr. Amelia Hill',
      image: doc15,
      speciality: 'Dermatologist',
      degree: 'MBBS',
      experience: '1 Years',
      about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care...',
      fees: 30,
      address: {
        line1: '37th Cross, Richmond',
        line2: 'Circle, Ring Road, London'
      },
      appointments: {
        "2025-11-11": ["10:00 - Patient R", "11:00 - Patient S"],
        "2025-11-19": ["12:00 - Patient T"],
        "2025-11-30": ["09:00 - Patient U"]
      }
    }
  ];
  

  // par defaut yhezni l dashboard
  const renderSection = () => { // ybadalk l etat dima mtaenti win
    const selectedDoctor = doctors[currentDoctor];
    switch(activeSection) {
      case 'dashboard':
        return <Dashboard doctor={selectedDoctor}/>
      case 'calendar':
        return <Calendar doctor={selectedDoctor}/>
      case 'patients':
        return <Patients doctor={selectedDoctor}/>
      case 'profile':
        return <Profile doctor={selectedDoctor}/>
      default:
        return <Dashboard doctor={selectedDoctor}/>
    }
  }

  const changeDoctor = (index) => {
    setCurrentDoctor(index)
  }

  return (
    // conteneur qui prend tout l'écran avec fond gris
    <div className="flex h-screen bg-gray-50">
      <Sidebar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        doctorName={doctors[currentDoctor].name} 
      />
      
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          {/* Sélecteur de docteur  */}
          <div className="mb-6 flex space-x-2 overflow-x-auto pb-2">
            {doctors.map((doctor, index) => (
              <button
                key={index}
                onClick={() => changeDoctor(index)}
                className={`px-3 py-2 rounded text-sm whitespace-nowrap ${
                  currentDoctor === index
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {doctor.name}
              </button>
            ))}
          </div>
          
          {renderSection()}
        </div>
      </div>
    </div>
  )
}

export default HomeDoctor