import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className="bg-white text-blue-900 px-6 py-10">
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left section */}
        <div className="space-y-4">
          <img src={assets.logo} alt="Logo" className="w-28"/>
          <p className="text-sm text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus placeat voluptas minima perspiciatis quam quod asperiores voluptatibus nesciunt.
          </p>
        </div>

        {/* Center section */}
        <div>
          <p className="font-semibold mb-4 text-blue-800">COMPANY</p>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="hover:text-blue-600 cursor-pointer transition-colors">Home</li>
            <li className="hover:text-blue-600 cursor-pointer transition-colors">About us</li>
            <li className="hover:text-blue-600 cursor-pointer transition-colors">Contact us</li>
            <li className="hover:text-blue-600 cursor-pointer transition-colors">Privacy policy</li>
          </ul>
        </div>

        {/* Right section */}
        <div>
          <p className="font-semibold mb-4 text-blue-800">GET IN TOUCH</p>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>+11-564-9875</li>
            <li>Doctor@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Copyright section */}
      <div className="mt-10 border-t border-gray-200 pt-4 text-center text-sm text-gray-500">
        <p>© 2025 Doctor. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
