'use client';

import React, { useState, useRef } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  // Create refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "auto" : "hidden"; // Prevent scrolling when menu is open
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  const scrollToSection = (ref:any) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      closeMenu(); 
    }
  };

  return (
    <nav className="text-white w-full p-4 bg-transparent backdrop-blur-2xl fixed top-0 z-10">
      <div className="flex items-center justify-between md:justify-center">
        {/* Hamburger Menu */}
        <button
          className="text-4xl z-10 left-0 top-4 w-16 mb-4 mr-4 absolute font-[Aldrich] md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Navigation Menu"
        >
          ☰
        </button>

        {/* Menu Items */}
        <ul
          className={`${
            isOpen
              ? "block fixed top-0 left-0 w-full h-screen bg-black bg-opacity-70 backdrop-blur-lg p-8 pt-16 text-left"
              : "hidden"
          } md:flex md:space-x-8 md:bg-transparent md:static md:p-0 md:h-auto md:text-center transition-all duration-300`}
        >
          <li>
            <button
              className="text-xl font-[Aldrich] w-full block py-2 hover:text-green-300 hover:scale-110 ease-in duration-200"
              onClick={() => scrollToSection(homeRef)}
            >
              Home
            </button>
          </li>
          <li>
            <button
              className="text-xl font-[Aldrich] w-full block py-2 hover:text-green-300 hover:scale-110 ease-in duration-200"
              onClick={() => scrollToSection(aboutRef)}
            >
              About
            </button>
          </li>
          <li>
            <button
              className="text-xl font-[Aldrich] w-full block py-2 hover:text-green-300 hover:scale-110 ease-in duration-200"
              onClick={() => scrollToSection(projectsRef)}
            >
              Projects
            </button>
          </li>
          <li>
            <button
              className="text-xl font-[Aldrich] w-full block py-2 hover:text-green-300 hover:scale-110 ease-in duration-200"
              onClick={() => scrollToSection(contactRef)}
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
