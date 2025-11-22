import React from 'react';
import { assets } from '../assets/assets';

const Banner = () => {
  return (
    <div className="w-full flex items-center justify-center bg-blue-50 rounded-xl p-6 md:p-8 shadow-sm gap-6">

      {/* Left Side */}
      <div className="flex flex-col gap-2 text-center md:text-left">
        <p className="text-2xl md:text-3xl font-bold text-gray-900">
          Book Appointment
        </p>
        <p className="text-lg text-blue-600">
          With 100+ Trusted Doctors
        </p>

        <button className="w-fit bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm mt-2 transition">
          Create account
        </button>
      </div>

      {/* Right Side */}
        <img
            src={assets.appointment_img}
            alt="Banner"
            className="w-40 md:w-64 lg:w-80 object-contain -translate-y-4 md:-translate-y-6"
        />

    </div>
  );
};

export default Banner;
