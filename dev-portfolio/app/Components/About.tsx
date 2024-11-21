'use client';
import React from 'react';
import Skills from './Ui/skills';
const About = () => {
 
  return (
    <div className="relative bottom-16 text-center px-4 sm:px-8 md:px-16">
      {/* Heading */}
      <h1 id='About' className="text-3xl decoration-solid border-green-200 border-b-2 border-r-2 rounded-lg p-2 inline-block font-semibold md:text-6xl bg-gradient-to-r from-green-200 to-green-600 bg-clip-text text-transparent">
        About Me!
      </h1>

        <h1 className='mt-16 text-md md:text-lg'>  I'm a Full Stack Web Developer currently pursuing my B.Tech in Computer Science Engineering (2022-26).
        </h1>
        <h1 className=' text-md md:text-lg'>   My goal is to contribute my skills to innovative projects, delivering exceptional value to both companies and clients.
        </h1>
       <h1 className='text-center decoration-solid border-green-200 border-b-2 border-r-2 rounded-lg p-2 text-4xl mt-16 bg-gradient-to-r from-green-200 to-green-600 bg-clip-text text-transparent font-bold'>My Skills</h1>
       <Skills/>
       </div>
  );
};

export default About;
