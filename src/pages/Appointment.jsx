import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';

const Appointment = () => {
  const { doctorId } = useParams();
  const { doctors } = useContext(AppContext);

  const [docInfo, setdocInfo] = useState(null);

  const fetchDocInfo = () => {
    const found = doctors.find((doc) => doc._id === doctorId);
    setdocInfo(found);
    console.log(found);
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctorId, doctors]);

  return (
    <div>

      {/* doctor details */}
      <div className='flex flex-col sm:flex-row gap-4'>

        <div>
          <img
            className='bg-primary w-full sm:max-w-72 rounded-lg'
            src={docInfo?.image}
            alt=""
          />
        </div>

        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>

          {/* doc info : name, degree, experience */}
          <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
            {docInfo?.name}
            {docInfo && (
              <img className='w-5' src={assets.verifiedIcon} alt="Verified" />
            )}
          </p>

          <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
            <p>{docInfo?.degree} - {docInfo?.speciality}</p>
            {docInfo && (
              <button className='py-0.5 px-2 border text-xs rounded-full'>
                {docInfo.experience}
              </button>
            )}
          </div>

          {/* doctor about */}
          <div>
            <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>
              About <img src={assets.infoIcon} alt="Info" />
            </p>
            <p className='text-sm text-gray-500 max-w-[700px] mt-1'>
              {docInfo?.about}
            </p>
          </div>
          <p className='text-gray-500 font-medium mt-4'>
            Appointment fee : <span className='text-gray-600'>{docInfo?.fees} $</span>
          </p>

        </div>

      </div>

    </div>
  )
}

export default Appointment;
