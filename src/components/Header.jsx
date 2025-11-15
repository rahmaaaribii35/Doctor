import React from 'react';
import { assets } from '../assets/assets';

const Header = () => {
  return (
    //l'container l-kbira mta3 header, fih background bleu, rounded corners, shadow w padding flex-col 3la mobile w flex-row 3la desktop, items centered */}
    <div className="relative bg-blue-50 rounded-xl overflow-hidden shadow-md mt-6 px-4 sm:px-8 lg:px-12 py-24 flex flex-col md:flex-row items-center">

      {/* Left Side: Text and Buttons */}
      <div className="flex-1 text-center md:text-left md:pr-12">
        {/* Heading */}
        <div className="mb-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
            Every good thing starts with good health
          </h2>
          {/* heading kbir w bold, text color gray, spacing bin les lignes mta3ou snug */}
        </div>

        {/* Subheading */}
        <div className="mb-6">
          <p className="text-base sm:text-lg md:text-xl text-gray-700">
            Find Your Perfect Doctor
          </p>
          {/* texte secondaire, taille ta3ha tetkebber selon screen */}
        </div>

        {/* Buttons stacked vertically, smaller size */}
        <div className="flex flex-col gap-3 max-w-xs mx-auto md:mx-0">
            {/* flex-col 3la vertical, gap 3px bin buttons, max width small, centered 3la mobile */}
        <button className="bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 hover:scale-105 transition duration-300 text-sm">
            Request appointment
        </button>
         {/* button primary, bleu bg, white text, hover effect tbadal couleur w kbir shwaya */}
        <button className="bg-white border border-blue-600 text-blue-600 font-medium py-2 px-4 rounded-lg hover:bg-blue-50 hover:scale-105 transition duration-300 text-sm">
            Learn more
        </button>
        {/* button secondary, bg blanc w border bleu, hover effect bg gris clair w kbir shwaya */}
        </div>

      </div>

      {/* Right Side: Graphics */}
      <div className="flex-1 relative mt-8 md:mt-0 flex justify-end">
        {/* flex-1 yakhodh space, relative bach n7otou images absolute fih, justify-end 3la yemin */}
        {/* Ellipse behind */}
        <img
          src={assets.ellipse}
          alt="Ellipse"
          className="absolute right-0 w-[28rem] md:w-[36rem] opacity-30 -top-10"
        />
        {/* ellipse t7ot wara kol shay, opacity 30%, position absolute w slightly up */}

        {/* Doctor image bigger */}
        <img
          src={assets.banner_doctor}
          alt="Banner Doctor"
          className="relative w-80 md:w-[40rem] object-contain"
        />
         {/* image doctor, relative bach tb9a f front, object-contain bach image matetkessarch */}
      </div>

    </div>
  );
};

export default Header;
