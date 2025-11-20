import React, { useContext, useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Doctors = () => {

  const { speciality } = useParams();
  const { doctors } = useContext(AppContext);
  const [filterDoc, setfilterDoc] = useState([]);

  const navigate = useNavigate();

  const applyFilter = () => {
    if (speciality) {
      setfilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setfilterDoc(doctors);
    }
  }

  useEffect(() => {
    applyFilter();
  }, [speciality, doctors]);

  return (
    <div className="px-6 py-10 bg-gray-50 min-h-screen">

      <p className="text-2xl font-semibold text-gray-800 mb-8">
        Doctors specializing in
        <span className="ml-2 text-blue-600 font-bold">{speciality}</span>
      </p>

      <div className="flex gap-10">

        {/* CATEGORY LIST */}
        <div className="w-64">
          <p className="text-lg font-semibold text-gray-700 mb-4">Categories</p>

          <div className="flex flex-col gap-3">
            <p onClick={()=> speciality === 'General physician' ? navigate('/doctors') : navigate('/doctors/General physician')} className="px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md hover:border-blue-400 cursor-pointer transition">
              General physician
            </p>
            <p onClick={()=> speciality === 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')} className="px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md hover:border-blue-400 cursor-pointer transition">
              Gynecologist
            </p>
            <p onClick={()=> speciality === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')} className="px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md hover:border-blue-400 cursor-pointer transition">
              Dermatologist
            </p>
            <p onClick={()=> speciality === 'Pediatricians' ? navigate('/doctors') : navigate('/doctors/Pediatricians')} className="px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md hover:border-blue-400 cursor-pointer transition">
              Pediatricians
            </p>
            <p onClick={()=> speciality === 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')} className="px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md hover:border-blue-400 cursor-pointer transition">
              Neurologist
            </p>
            <p onClick={()=> speciality === 'Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist')} className="px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md hover:border-blue-400 cursor-pointer transition">
              Gastroenterologist
            </p>
          </div>
        </div>

        {/* DOCTOR CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 flex-1">
          {filterDoc.map((item, index) => (
            <div
              onClick={() => navigate(`/appointments/${item._id}`)}
              className="rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-lg cursor-pointer overflow-hidden transition-all"
              key={index}
            >
              <img
                className="w-full h-60 object-cover bg-gray-200"
                src={item.image}
                alt=""
              />

              <div className="p-5">
                <div className="flex items-center gap-2 text-sm text-green-600 mb-2">
                  <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  <p>Available</p>
                </div>

                <p className="text-gray-900 text-xl font-semibold">{item.name}</p>
                <p className="text-gray-600 text-sm mt-1">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  )
}

export default Doctors
