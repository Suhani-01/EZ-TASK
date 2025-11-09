import React, { useState } from 'react'
import Hero from './Hero'

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className='bg-[#FFFBFB]/30 h-16 items-center p-3 fixed z-30 w-screen flex flex-row justify-end'>
        
      {/* Sliding Menu */}
      <div
        className={`fixed top-0 right-0 h-16 w-full bg-[#FFFBFB]/30 flex justify-end items-center transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul className='flex flex-row text-xs sm:text-[18px] space-x-7 font-sans items-center pr-4'>
          <li className="cursor-pointer transition">Services</li>
          <li className="cursor-pointer transition">Their Stories</li>
          <li className="cursor-pointer transition">Our Story</li>
          <li className="cursor-pointer transition">Varnan</li>
          <li className='flex space-x-2 bg-orange-500 text-white py-2 px-4 rounded-full'>
            <div>Let's Talk</div> 
            <img src='/mail.svg' alt="Mail" />
          </li>
          <li onClick={toggleMenu}>
            <img src="/cross.svg" className='cursor-pointer h-12 w-12' alt="Menu cross" />
          </li>
        </ul>
      </div>

      {/* Open Menu Button */}
      <button onClick={toggleMenu} className={`${!isOpen ? 'block' : 'hidden'}`}>
        <img src="/Menu.svg" className='cursor-pointer h-12 w-12' alt="Menu" />
      </button>
    </div>
  )
}

export default Navbar
