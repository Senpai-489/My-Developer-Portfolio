"use client";
import React from "react";
import { StickyScroll } from "./stickyScroll";
import Image from "next/image";
import Front from "@/app/assets/Frontend.jpg"
import Back from "@/app/assets/Back.jpg"
import Data from "@/app/assets/database.jpg"
import Tools from "@/app/assets/tools.jpg"
import Lang from "@/app/assets/lang.jpeg"
const content = [
  {
    title: "Frontend Development",
    description:
      "HTML, CSS, JavaScript, NextJS, React, Typescript, ThreeJS, Bootstrap, MUI, and other UI/UX Libraries and Frameworks",
    content: (
      <Image src={Front}
      width={200}
      height={200}
      className="h-full w-full object-cover"
      alt="frontend dev"/>
    ),
  },
  {
    title: "Backend Development",
    description:
      "NodeJS, ExpressJS, FAST API, Firebase, Django",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={Back}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Database",
    description:
      "MySQL, MongoDB, Postgres, Firebase",
    content: (
     <Image
     src={Data}
     width={300}
     height={300}
     alt="database jpg"
     className="h-full w-full object-cover"
     />
    ),
  },
  {
    title: "Tools",
    description:
      "Git, Github, Adobe Illustrator, Adobe Photoshop, Postman, VS code, Notion, Android Studio, GSAP, Framer-motion",
    content: (
        <Image
        src={Tools}
        width={300}
        height={300}
        className="h-full w-full object-cover"
        alt="tools.jpg"/>
    ),
  },
  {
    title: "Languages",
    description:
      "C, C++, JavaScript, Python, Typescript",
    content: (
      <Image
      src={Lang}
      width={300}
      height={300}
      className="h-full w-full object-cover"
      alt="tools.jpg"/>
    ),
  },
];
export default function Skills() {
  return (
    <div className="p-12">
      <StickyScroll content={content} />
    </div>
  );
}
