'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Prevent body scrolling when the menu is open
    document.body.style.overflow = isOpen ? "auto" : "hidden";
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  // Ensure body overflow resets on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <nav className="text-white w-full sm: p-4 bg-transparent backdrop-blur-2xl fixed top-0 z-10">
      <div className="flex items-center justify-between md:justify-center">
        {/* Hamburger Menu for Mobile */}
        <button
          className="text-4xl z-10 left-0 top-4 w-16 mb-4 mr-4 absolute font-[Aldrich] md:hidden focus:outline-none"
          onClick={toggleMenu}
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
            <Link
              href="#home"
              className="text-xl font-[Aldrich] w-full block py-2 hover:text-green-300 hover:scale-110 ease-in duration-200"
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className="text-xl font-[Aldrich] w-full block py-2 hover:text-green-300 hover:scale-110 ease-in duration-200"
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href=""
              className="text-xl font-[Aldrich] w-full block py-2 hover:text-green-300 hover:scale-110 ease-in duration-200"
              onClick={closeMenu}
            >
              Projects
            </Link>
          </li>
          
          <li>
            <Link
              href="#contact"
              className="text-xl font-[Aldrich] w-full block py-2 hover:text-green-300 hover:scale-110 ease-in duration-200"
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
