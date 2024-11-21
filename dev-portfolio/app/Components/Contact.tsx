'use client'
import React from 'react'
import { Input } from './Ui/input'  

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
    <h1 className="text-3xl decoration-solid m-20 border-green-200 border-b-2 border-r-2 rounded-lg p-2 inline-block font-semibold md:text-6xl bg-gradient-to-r from-green-200 to-green-600 bg-clip-text text-transparent">
      Contact
    </h1>
    <div className='flex justify-center'>
     <form className='border-[1px] w-full md:w-[60vw] rounded-lg border-green-300 p-4'>
      <h1 className='text-3xl mb-8'>Send Your Queries</h1><div className='flex justify-center'>
      
    </div>
      <p className='text-left p-2'>Full Name</p>
      <Input type='text' placeholder='John Doe' className='bg-stone-800 text-white'/>
      <p className='text-left p-2'>Email</p>
      <Input type='email' placeholder='example@gmail.com' className='bg-stone-800 text-white'/>
      <p className='text-left p-2'>Message</p>
      <textarea rows={10} placeholder='Type your message here' className='`text-white flex h-40 w-full border-none bg-gray-50 dark:bg-zinc-800  dark:text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent 
          file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
          focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
           disabled:cursor-not-allowed disabled:opacity-50
           dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
           group-hover/input:shadow-none transition duration-400 text-white
           `, bg-stone-800 text-white'>
      </textarea>
      <button  className="px-8 py-2 h-10 w-72 m-4 rounded-full relative bg-slate-700 text-white text-sm hover:bg-rose-500 hover:shadow-white/[0.1] transition duration-200 border border-slate-600">
  <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
  <span className="relative z-20">
    Submit
  </span>
</button>
    </form>
    

    </div>
    </div>
  )
}

export default Contact