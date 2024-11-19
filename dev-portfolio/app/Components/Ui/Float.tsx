'use client';
import React from "react";
import Phone from "@/app/assets/phone.svg";
import Github from "@/app/assets/github.svg";
import Email from "@/app/assets/email.svg";
import LinkedIn from "@/app/assets/linkedin.svg";
import Image from "next/image";
import Link from "next/link";

export default function Float() {
  return (
    <div
      className="text-white absolute hover:drop-shadow-[0_0px_8px_rgba(255,255,255,1)]  ease-in duration-300 -translate-y-1/2 right-4 p-4 md:right-8 lg:right-16 bg-white top-[55vh] sm:top-72 w-16  rounded-lg shadow-lg flex flex-col items-center"
    >
      <Link href="tel:7627023295">
        <Image
          src={Phone}
          alt="Phone"
          width={40}
          height={40}
          className="hover:scale-110 mb-2 transition-transform"
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
          width={40}
          height={40}
          className="hover:scale-110 mb-2 transition-transform"
        />
      </Link>
      <Link href="mailto:amitfr489@gmail.com">
        <Image
          src={Email}
          alt="Email"
          width={40}
          height={40}
          className="hover:scale-110 mb-2 transition-transform"
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
          width={40}
          height={40}
          className="hover:scale-110 mb-2 transition-transform"
        />
      </Link>
    </div>
  );
}
