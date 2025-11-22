import React from 'react'
import { specialityData } from '../assets/assets' // Njibou data mta3 les specialités w les photos
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    // Div loula : width mahdouda, mawjouda f west el page, w 3andha padding
    <div className="max-w-6xl mx-auto px-4 py-10">
      
      {/* Title mta3 el page  */}
      <h1 className="text-3xl font-semibold text-gray-800 text-center">
         Our Specialties
      </h1>

      {/* Description sghira taht el title */}
      <p className="text-gray-500 text-center mt-2 mb-10">
        Simply browse through our specialties to find the right doctor for you.
      </p>

      {/* Grid :: tanksim el cards f forma hethi (2, 3, 4, 6) 7asb taille mta3 screen*/}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {/* Njibou kol specialité mel liste w naffichiwha f card */}
        {specialityData.map((item, index) => (
          // Kol card hiya link le page doctors eli 3andhom nafes el specialité
          <Link
            key={index} // key behi le react bech ysahel el rendering
            to={`/doctors/${item.speciality}`}// routing dynamic 3ala 7asab el specialité
            // Classes mta3 Tailwind bech nenzlou el styling mta3 el card
            className="flex flex-col items-center bg-white shadow-sm border border-gray-100 p-4 rounded-xl hover:shadow-md hover:-translate-y-1 transition-all"
          >
            {/* Image mta3 el spécialité */}
            <img
              src={item.image}// image eli jayba mel data
              alt={item.speciality}
              className="w-20 h-20 object-contain"
            />
            {/* Titre mta3 el spécialité */}
            <p className="mt-3 text-gray-700 font-medium text-center">
              {item.speciality}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SpecialityMenu
