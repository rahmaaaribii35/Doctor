import React, { useState } from 'react'; // import React w hook useState pour gérer state
import { NavLink, useNavigate } from 'react-router-dom'; // NavLink pour navigation, useNavigate pour redirection
import logo from '../assets/logo.png';
import dropdown from '../assets/dropdown.png';
import myProfile from '../assets/myProfile.jpg';

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);// state pour dropdown menu, false = fermé
  const [token, setToken] = useState(true); // state pour login, true = user logged in


  return (
    <div className="flex items-center justify-between py-2 px-3 md:px-6 mb-5 border-b border-gray-200 bg-white shadow-sm">
      {/*Logo ta3 site */}
      <img className="w-28 cursor-pointer" src={logo} alt="Logo" />

      {/*Menu ta3 navigation*/}
      <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700 text-sm">
        {/* Home link*/}
        <NavLink to="/" className={({ isActive }) => isActive ? 'text-blue-600' : 'hover:text-blue-500 transition-colors'}>
          {({ isActive }) => (
            <>
              <li className="py-1">HOME</li>
              {/* underline ken active */}
              {isActive && <hr className="border-none h-0.5 bg-blue-600 w-3/5 m-auto mt-1" />}
            </>
          )}
        </NavLink>

        {/* All Doctors link */}
        <NavLink to="/doctors" className={({ isActive }) => isActive ? 'text-blue-600' : 'hover:text-blue-500 transition-colors'}>
          {({ isActive }) => (
            <>
              <li className="py-1">ALL DOCTORS</li>
              {isActive && <hr className="border-none h-0.5 bg-blue-600 w-3/5 m-auto mt-1" />}
            </>
          )}
        </NavLink>

        {/* About link*/}
        <NavLink to="/about" className={({ isActive }) => isActive ? 'text-blue-600' : 'hover:text-blue-500 transition-colors'}>
          {({ isActive }) => (
            <>
              <li className="py-1">ABOUT</li>
              {isActive && <hr className="border-none h-0.5 bg-blue-600 w-3/5 m-auto mt-1" />}
            </>
          )}
        </NavLink>

        {/* Contact link*/}
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-blue-600' : 'hover:text-blue-500 transition-colors'}>
          {({ isActive }) => (
            <>
              <li className="py-1">CONTACT</li>
              {isActive && <hr className="border-none h-0.5 bg-blue-600 w-3/5 m-auto mt-1" />}
            </>
          )}
        </NavLink>
      </ul>

      {/*Partie Profile / Login*/}
      <div className="relative">
        {token ? (
           // Si user logged in
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setShowMenu(!showMenu)}>
            {/* Profile Image */}
            <img
              src={myProfile}
              alt="Profile"
              className="w-9 h-9 rounded-full border-2 border-blue-600 hover:border-blue-700 transition-all"
            />
            {/* Dropdown Icon */}
            <img
              src={dropdown}
              alt="Dropdown"
              className={`w-4 h-4 transform transition-transform ${showMenu ? 'rotate-180' : ''}`}
            />

            {/* Dropdown Menu mta3 profile  */}
            {showMenu && (
              <div className="absolute right-0 top-full mt-2 w-36 bg-white border border-gray-200 shadow-lg rounded-lg py-1 z-50">
                {/* My Profile button */}
                <p
                  onClick={() => navigate('/my-profile')}
                  className="px-3 py-1.5 hover:bg-blue-50 cursor-pointer text-gray-700 text-sm"
                >
                  My Profile
                </p>
                {/* My Appointments button */}
                <p
                  onClick={() => navigate('/my-appointments')}
                  className="px-3 py-1.5 hover:bg-blue-50 cursor-pointer text-gray-700 text-sm"
                >
                  My Appointments
                </p>
                {/* Logout button */}
                <p
                  onClick={() => setToken(false)}
                  className="px-3 py-1.5 hover:bg-blue-50 cursor-pointer text-gray-700 text-sm"
                >
                  Logout
                </p>
              </div>
            )}
          </div>
        ) : (
          // Si user pas logged in => bouton Create Account
          <button
            onClick={() => navigate('/login')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-1.5 px-3 rounded-md transition-colors text-sm"
          >
            Create Account
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
