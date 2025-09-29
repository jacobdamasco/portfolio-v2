import React from "react";
import BtnLink from "./BtnLink";
import { motion } from "motion/react"

import { IoIosDocument } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Home: React.FC = () => {
  return (
    <>
      <div className="flex flex-col w-screen overflow-auto md:flex-row md:min-h-screen">
        <div className="flex flex-col flex-10 gap-10 md:gap-11 lg:gap-12 md:justify-center p-12 md:p-0">
          {/* info text */}
          <div className="flex flex-col md:px-10 lg:px-14 gap-4 md:gap-6 lg:gap-8">
            <p className="lg:text-2xl">Hi, I'm</p>
            <h1 className="text-green-800 text-5xl font-semibold md:text-[48px] lg:text-7xl">Jacob Damasco</h1>
            <p className="lg:text-lg">
              I’m a software engineer and a recent computer science & engineering grad from USC. Previously, I was building an automated end-to-end test suite as an intern at LACERA.
            </p>
          </div>

          {/* links */}
          <div className="flex flex-col gap-3 md:px-10 lg:px-14">
            <BtnLink Icon={IoIosDocument} text="Resume" link="/Jacob-Damasco-Resume-Current.pdf" />
            <BtnLink Icon={MdEmail} text="Email" link="mailto:jacobdamasc@gmail.com" />
            <BtnLink Icon={FaLinkedin} text="Linkedin" link="https://www.linkedin.com/in/jacobdamasco/" />
            <BtnLink Icon={FaGithub} text="Github" link="https://github.com/jacobdamasco" />
          </div>
        </div>

        {/* Right panel med+ */}

        {/* Right panel med screens */}
        <div className="h-screen w-screen md:w-[50%] p-2">
          <div className="flex h-[67%] gap-2 pb-2">
            <div className="flex flex-col w-[70%] gap-2">
              <motion.img 
                src="imgs/tech.jpg" 
                alt="1" 
                className="h-[100%] object-cover"
                initial={{ opacity: 0 }}   // start hidden & slightly below
                animate={{ opacity: 1 }}    // fade in & move up
                transition={{ duration: 1, ease: "easeIn", delay: 0.25 }} 
              />
            </div>
            <div className="flex flex-col w-[30%] gap-2">
              <motion.img 
                src="imgs/joes.jpg" 
                alt="4" 
                className="h-[48%] object-cover object-[10%] overflow-hidden"
                initial={{ opacity: 0 }}   // start hidden & slightly below
                animate={{ opacity: 1 }}    // fade in & move up
                transition={{ duration: 1, ease: "easeIn", delay: 0.5 }}  
              />
              <motion.img 
                src="imgs/matcha.jpg" 
                alt="5" 
                className="h-[52%] object-cover overflow-hidden"
                initial={{ opacity: 0 }}   // start hidden & slightly below
                animate={{ opacity: 1 }}    // fade in & move up
                transition={{ duration: 1, ease: "easeIn", delay: 0.75 }}  
              />
            </div>
          </div>
          <div className="flex h-[33%] gap-2">
            <motion.img 
              src="imgs/plane.jpg" 
              alt="6" 
              className="flex-1 object-cover"
              initial={{ opacity: 0 }}   // start hidden & slightly below
              animate={{ opacity: 1 }}    // fade in & move up
              transition={{ duration: 1, ease: "easeIn", delay: 1 }}  
            />
            <div className="flex-2 overflow-hidden">
              <motion.img
                src="/imgs/family-2.jpg"
                alt="8"
                className="w-full h-full object-cover object-center scale-136"
                initial={{ opacity: 0 }}   // start hidden & slightly below
                animate={{ opacity: 1 }}    // fade in & move up
                transition={{ duration: 1, ease: "easeIn", delay: 1.25 }} 
              />
            </div>
            <motion.img 
              src="imgs/pastries.jpg" 
              alt="7" 
              className="flex-1 object-cover"
              initial={{ opacity: 0 }}   // start hidden & slightly below
              animate={{ opacity: 1 }}    // fade in & move up
              transition={{ duration: 1, ease: "easeIn", delay: 1.5 }}  
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
