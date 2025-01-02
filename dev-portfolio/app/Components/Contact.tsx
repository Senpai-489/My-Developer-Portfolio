'use client'
import React from 'react'
import { Input } from './Ui/input'  
import Float from './Ui/Float'
import Link from 'next/link'
import Phone from "@/app/assets/phone.svg";
import Github from "@/app/assets/github.svg";
import Email from "@/app/assets/email.svg";
import LinkedIn from "@/app/assets/linkedin.svg";
import Image from 'next/image'
const Contact = () => {
//   const client = new SMTPClient({
//     user: process.env.NEXT_PUBLIC_EMAIL_USER,
//     password: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
//     host: process.env.NEXT_PUBLIC_EMAIL_HOST,
//     ssl: true,
//   });
  
// function handleClick(){
  
//   client.send(
//     {
//       text: 'i hope this works',
//       from: 'you <username@your-email.com>',
//       to: '22csaiml043@jssaten.ac.in',
//       cc: 'else <else@your-email.com>',
//       subject: 'testing emailjs',
//     },
//     (err, message) => {
//       console.log(err || message);
//     }
//   );}
  return (
    <div className="relative bottom-16 text-center px-4 sm:px-8 md:px-16">
    {/* Heading */}
    <h1 id='Contact' className="text-3xl decoration-solid m-20 border-green-200 border-b-2 border-r-2 rounded-lg p-2 inline-block font-semibold md:text-6xl bg-gradient-to-r from-green-200 to-green-600 bg-clip-text text-transparent">
      Contact
    </h1>
    <div className='flex flex-col justify-center'>
    <h1 className='text-3xl'>Get in touch with me! Let's Work Together</h1>
    <div
      className="text-white relative top-20 w-[80vw] md:w-[40vw] h-20 md:h-[20vh] px-4 md:px-12 py-8 items-center  mx-auto hover:drop-shadow-[0_0px_8px_rgba(255,255,255,1)]  ease-in duration-300  bg-white   rounded-2xl shadow-lg flex flex-row justify-between gap-4"
    >
      <Link href="tel:7627023295">
        <Image
          src={Phone}
          alt="Phone"
          width={50}
          height={50}
          className="hover:scale-110 hover:drop-shadow-[0_0px_2px_rgba(0,190,0,1)] mb-2 transition-transform"
        />
      </Link>
      <Link
        href="https://github.com/Senpai-489"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={Github}
          alt="Github"
          width={50}
          height={50}
          className="hover:scale-110 hover:drop-shadow-[0_0px_2px_rgba(0,190,0,1)] mb-2 transition-transform"
        />
      </Link>
      <Link href="mailto:amitfr489@gmail.com">
        <Image
          src={Email}
          alt="Email"
          width={50}
          height={50}
          className="hover:scale-110 hover:drop-shadow-[0_0px_2px_rgba(0,190,0,1)] mb-2 transition-transform"
        />
      </Link>
      <Link
        href="https://www.linkedin.com/in/amitsingh489/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={LinkedIn}
          alt="LinkedIn"
          width={50}
          height={50}
          className="hover:scale-110 hover:drop-shadow-[0_0px_2px_rgba(0,190,0,1)] mb-2 transition-transform"
        />
      </Link>
    </div>

    </div>
    </div>
  )
}

export default Contact