'use client';
import React from 'react';
import { TracingBeam } from './Ui/beam';
import { DirectionAwareHover } from './Ui/hoverCard';
import backImage from '../assets/wabi.png';
import Ezpromptor from '../assets/ezPromptor.png'
import Link from 'next/link';
import vaule from '@/app/assets/vaul-e.jpg'
import Chess from '@/app/assets/chess.png'
import Image from 'next/image';
import Farmingo from '@/app/assets/Farmingo.png'
import Git from '@/app/assets/github.svg'
import Vercel from '@/app/assets/vercel.ico'
const Projects = () => {
  return (
    <div className="relative bottom-16 text-center px-4 sm:px-8 md:px-16">
      <h1 id='Projects' className="text-3xl decoration-solid border-green-200 border-b-2 border-r-2 rounded-lg p-2 inline-block font-semibold md:text-6xl bg-gradient-to-r from-green-200 to-green-600 bg-clip-text text-transparent">
        Projects
      </h1>
      <h2 className='mt-16 text-2xl'>Here are some of the projects I've worked on</h2> {/* Changed to h2 */}
      <TracingBeam>
      
        <div className='mt-16 ml-16 md:ml-0 h-full'>
          <div className='flex flex-col md:flex-row  '>
          <DirectionAwareHover  imageUrl={backImage}> 
            <p className='text-lg text-green-300'>Wabi Sabi</p>
            <p>An app to help children suffering from Alexythimea</p>
          </DirectionAwareHover> <div>
          <h1 className='text-lg md:text-3xl text-green-300 m-8 font-bold'>Wabi Sabi</h1>
          <p className='text-left md:w-[40vw] pl-10'>An app to help children suffering from Alexythimea by using Machine Learning and using a gamified interface</p>
         <div className='mt-12'> <Image 
          src={Git}
          width={40}
          height={40}
          className='bg-white p-2 inline rounded-lg m-2'
          alt = 'Git icon'
          />
          <Link href="https://github.com/Senpai-489/Wabi-Sabi" className='text-sm md:text-lg'>Github Repository</Link></div>
          </div>
          </div>
        </div>

        {/* second project */}
        <div className='mt-16 ml-16 md:ml-0 h-full'>
          <div className='flex align-items-center md:flex-row flex-col '>
          <DirectionAwareHover  imageUrl={Ezpromptor}> 
            <p className='text-lg text-green-300'>EZ Promptor</p>
            <p>A WebApp to share AI prompts</p>
          </DirectionAwareHover> 
          
          <div>
          <h1 className='text-lg md:text-3xl text-green-300 m-8 font-bold'>EZ Promptor</h1>
          <p className='text-left md:w-[40vw] pl-10'>A fullstack CRUD WebApp to share creative AI Prompts with a built in AI bot to test Prompts.</p>
         <div className='mt-12'> <Image 
          src={Git}
          width={40}
          height={40}
          className='bg-white p-2 inline rounded-lg m-2'
          alt = 'Git icon'
          />
          <Link href="https://github.com/Senpai-489/ez_promptor" className='text-sm md:text-lg'>Github Repository</Link></div>
          <div > <Image 
          src={Vercel}
          width={40}
          height={40}
          className='bg-white p-2 inline rounded-lg m-2'
          alt = 'Git icon'
          />
          <Link href="https://ez-promptor.vercel.app/" className='text-sm md:text-lg'>Visit Deployment</Link></div>
          </div>
          
          </div>
        </div>
        {/* Third Project */}
        <div className='mt-16 ml-16 md:ml-0 h-full'>
          <div className='flex gap-4 align-items-center md:flex-row flex-col '>
          <DirectionAwareHover  imageUrl={Farmingo}> 
            <p className='text-lg text-green-300'>Farmingo</p>
            <p>An app to help farmers with innovative Solutions</p>
          </DirectionAwareHover> <div>
          <h1 className='text-lg md:text-3xl text-green-300 m-8 font-bold'>Farmingo</h1>
          <p className='text-left md:w-[40vw] pl-10'>A fullstack WebApp to help farmers in various of their everyday tasks and leveraging AI capabilities to help them detect plant diseases and suggesting suitable pesticides.</p>
         <div className='mt-12'> <Image 
          src={Git}
          width={40}
          height={40}
          className='bg-white p-2 inline rounded-lg m-2'
          alt = 'Git icon'
          />
          <Link href="https://github.com/Senpai-489/Wabi-Sabi" className='text-sm md:text-lg'>Github Repository</Link></div>
          </div>
          </div>
        </div>
        {/* fourth project */}
        <div className='mt-16 ml-16 md:ml-0 h-full'>
          <div className='flex gap-4 align-items-center md:flex-row flex-col '>
          <DirectionAwareHover  imageUrl={Chess}> 
            <p className='text-lg text-green-300'>Multiplayer Chess</p>
            <p>A Multiplayer chess game using web sockets</p>
          </DirectionAwareHover> <div>
          <h1 className='text-lg md:text-3xl text-green-300 m-8 font-bold'>Multiplayer Chess</h1>
          <p className='text-left md:w-[40vw] pl-10'>An online multiplayer chess game made using web sockets and chess logic written in TypeScript.</p>
         <div className='mt-12'> <Image 
          src={Git}
          width={40}
          height={40}
          className='bg-white p-2 inline rounded-lg m-2'
          alt = 'Git icon'
          />
          <Link href="https://github.com/Senpai-489/Multiplayer_Chess" className='text-sm md:text-lg'>Github Repository</Link></div>
          </div>
          </div>
        </div>
        {/* fifth project */}
        <div className='mt-16 ml-16 md:ml-0 h-full'>
          <div className='flex align-items-center md:flex-row flex-col '>
          <DirectionAwareHover  imageUrl={vaule}> 
            <p className='text-lg text-green-300'>Vaul-E</p>
            <p>A WebApp to share AI prompts</p>
          </DirectionAwareHover> 
          
          <div>
          <h1 className='text-lg md:text-3xl text-green-300 m-8 font-bold'>Vaul-E</h1>
          <p className='text-left md:w-[40vw] pl-10'>A web3 wallet organizer, currently works on Ethereum and solana wallets</p>
         <div className='mt-12'> <Image 
          src={Git}
          width={40}
          height={40}
          className='bg-white p-2 inline rounded-lg m-2'
          alt = 'Git icon'
          />
          <Link href="https://github.com/Senpai-489/Vaul-e" className='text-sm md:text-lg'>Github Repository</Link></div>
          <div > <Image 
          src={Vercel}
          width={40}
          height={40}
          className='bg-white p-2 inline rounded-lg m-2'
          alt = 'Git icon'
          />
          <Link href="https://vaul-e.vercel.app/" className='text-sm md:text-lg'>Visit Deployment</Link></div>
          </div>
          
          </div>
        </div>
      </TracingBeam>
    </div>
  );
};

export default Projects;
