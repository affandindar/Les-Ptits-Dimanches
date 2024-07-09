"use client";
import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { alisson } from "@/app/fonts";
import students1 from "../public/goalsImg.jpg";
import img44 from "../public/IMG_4400.jpg";




export const Hero = () => {
  
  
  return (
    <div className="flex flex-col justify-center items-center">
      
      <div className="flex flex-col gap-3 md:gap-10 justify-center text-white items-center z-10 absolute">
        <div className={alisson.className}>
          <h1 className="text-center text-6xl md:text-9xl">
            Les P'tits Dimanches
          </h1>
        </div>
      
        <div className={`flex justify-center items-center`}>
          <Typewriter
            options={{
              strings: ["Kuşlar uçar, balıklar yüzer, çocuklar oyun oynar..."],
              autoStart: true,
              loop: true,
              delay: 70,
              wrapperClassName: `md:text-3xl text-bold`,
            }}
          />
        </div>
        
      </div>

      <div className="hidden md:flex">
      <Image src={students1} alt="hero" className="brightness-[0.80] h-svh object-cover" />
      </div>

      <div className="md:hidden">
      <Image src={img44} alt="hero" className="brightness-[0.80] h-svh object-cover object-[50%]" />
      </div>
      
      
      
    </div>
  );
};
