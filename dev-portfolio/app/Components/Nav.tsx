'use client';

import React, { useState } from "react";
import Port from '../assets/port.svg';

export function FlovNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
    

  return (
    <div className="text-white w-full p-4">
      
      <div className="flex items-center justify-between md:justify-center">
       
        <button 
          className="text-xl font-[aldrich] md:hidden" 
          onClick={toggleMenu}
        >
          ☰
        </button>

     
        <div 
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:space-x-8 text-center`}
        >
          <button className="text-xl font-[aldrich] p-4 hover:text-green-300 hover:scale-110 ease-in duration-200">
            Home
          </button>
          <button className="text-xl font-[aldrich] p-4 hover:text-green-300 hover:scale-110 ease-in duration-200">
            About
          </button>
          <button className="text-xl font-[aldrich] p-4 hover:text-green-300 hover:scale-110 ease-in duration-200">
            Experience
          </button>
          <button className="text-xl font-[aldrich] p-4 hover:text-green-300 hover:scale-110 ease-in duration-200">
            Services
          </button>
          <button className="text-xl font-[aldrich] p-4 hover:text-green-300 hover:scale-110 ease-in duration-200">
            Contact
          </button>
        </div>
      </div>
      
    </div>
  );
}
