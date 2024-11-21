'use client';

import React from 'react';
import Lottie from 'lottie-react';
import animationData from '@/app/assets/cat.json';

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center relative">
     
      <Lottie
        animationData={animationData}
        className=" relative top-[9.5vh] md:top-24 h-44 md:h-64"
      />
    
      <h1 className="text-3xl md:text-5xl text-green-300 mt-4 mb-16">That's All Folks!</h1>
    </div>
  );
};

export default Footer;
