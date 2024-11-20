'use client';
import React, { useState, useEffect } from "react";
import Float from "@/app/Components/Ui/Float";
import Blob from "./Ui/blob";

export default function Body() {
  const getResume = () => {
    window.open(
      "https://drive.google.com/file/d/10IDTYUHBVDjZns9J_568j2Pe5REl1lXn/view?usp=drive_link",
      "_blank"
    );
  };

  const phrases = [
    "Full Stack Developer",
    "Coder",
    "Blockchain Enthusiast",
    "Web3 Developer",
    "Freelancer",
    "Software Engineer",
    "CSE Undergrad",
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setIsVisible(true);
      }, 500);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden  text-white">
      <Float />
      {/* Main Content Section */}
      <div className="flex flex-col items-start mt-8 justify-center p-6 md:p-16 space-y-2">
        <p className="font-[Aldrich] mt-16 text-md sm:text-2xl md:text-3xl">
          Hello, I'm
        </p>
        <h1 className="font-[Aldrich] font-semibold text-5xl md:text-9xl leading-tight">
          Amit Singh
        </h1>
        <p className="font-[Aldrich] text-lg sm:text-2xl md:text-4xl">
          and I'm a{" "}
          <b
            className={`text-green-300 transition-opacity duration-300 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0"
            }`}
            >
            {phrases[currentPhraseIndex]}
          </b>
        </p>

        {/* Buttons */}
        <div className="flex flex-row gap-4 mt-12">
          <button className="font-[Aldrich] text-white text-lg   w-40  h-10 rounded-lg bg-gradient-to-br from-red-500 to-purple-800 hover:scale-105 hover:drop-shadow-[0_0px_10px_rgba(0,120,64,1)] ease-in duration-200">
          <p>Hire Me!</p>
          </button>
          <button
            onClick={getResume}
            className="font-[Aldrich] text-white text-lg   w-40  h-10 rounded-lg bg-gradient-to-br from-red-500 to-purple-800 hover:scale-105 hover:drop-shadow-[0_0px_10px_rgba(0,120,64,1)] ease-in duration-200"
            >
            <p > Get my Resume</p>
          </button>
        </div>
              <Blob>

              </Blob>
        
      </div>
    </div>
  );
}
