'use client';
import React from "react";


import Float from "@/app/Components/Ui/Float";
import Me from "@/app/assets/me.jpg";
import Image from "next/image";

import { useState,useEffect } from "react";


export default function Body() {
  function getResume() {
    window.open(
      "https://drive.google.com/file/d/10IDTYUHBVDjZns9J_568j2Pe5REl1lXn/view?usp=drive_link",
      "_blank"
    );
  }
  const phrases=["Full Stack Web Developer","Coder","Blockchain Enthusiast","Web3 Developer","Freelancer","Software Engineer","CSE Undergrad"];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      // Trigger fade-out effect before changing the phrase
      setIsVisible(false);

      setTimeout(() => {
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setIsVisible(true); // Fade-in effect after changing
      }, 500); // Wait for fade-out to complete (300ms)
    }, 2500); // Interval for phrase change

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);
  return (
    <div className="relative min-h-screen overflow-hidden">
      
      <Float/>

     
      <div className="absolute right-[10vw] top-4 ">
       
        
         
      </div>

      {/* Main Content Section */}
      <div className="text-white flex flex-col justify-start items-start p-16 space-y-6">
        <p className="font-[Aldrich] mt-16 pl-4 text-3xl">Hello I'm</p>
        <h1 className="font-[Aldrich] font-semibold text-9xl hover:text-red-300 ease-in duration-200">
          Amit Singh
        </h1>
        <p className="font-[Aldrich] m-0 text-4xl">
  and I'm a{" "}
  <b
    className={`text-green-300 transition-opacity duration-300 transform ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 "
    }`}
  >
    {phrases[currentPhraseIndex]}
  </b>
</p>

        {/* Buttons */}
        <div className="flex space-x-4 m-8">
          <button className="font-[Aldrich] text-white text-lg w-32 h-10 rounded-lg bg-gradient-to-br from-red-500 to-purple-800 hover:scale-105 hover:drop-shadow-[0_0px_10px_rgba(0,120,64,1)] ease-in duration-200">
            Hire Me!
          </button>
          <button
            onClick={getResume}
            className="font-[Aldrich] text-white text-lg w-44 h-10 rounded-lg bg-gradient-to-br from-red-500 to-purple-800 hover:scale-105 hover:drop-shadow-[0_0px_10px_rgba(0,120,64,1)] ease-in duration-200"
          >
            Get my Resume
          </button>
        </div>
      </div>

      
    
    </div>
  );
}
