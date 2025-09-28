import React from "react";
import BtnLink from "./BtnLink";

import { IoIosDocument } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Home: React.FC = () => {
  return (
    <>
      <div className="flex flex-col w-screen min-h-screen md:flex-row">
        <div className="flex flex-col flex-1 justify-center">
          <div className="flex flex-col gap-10 md:gap-11 lg:gap-12 px-12 md:px-14 lg:px-18">
            {/* info text */}
            <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
              <p className="lg:text-lg">Hi, I'm</p>
              <h1 className="text-green-800 text-5xl font-semibold md:text-[48px] lg:text-7xl">Jacob Damasco</h1>
              <p className="lg:text-lg">I’m a software engineer and a recent computer science & engineering grad from USC. Previously, I was building a test automation suite as an intern at LACERA.</p>
            </div>

            {/* links */}
            <div className="flex flex-col gap-3">
              <BtnLink Icon={IoIosDocument} text="Resume" link="#"/>
              <BtnLink Icon={MdEmail} text="Email" link="mailto:jacobdamasc@gmail.com"/>
              <BtnLink Icon={FaLinkedin} text="Linkedin" link="https://www.linkedin.com/in/jacobdamasco/"/>
              <BtnLink Icon={FaGithub} text="Github" link="https://github.com/jacobdamasco"/>
            </div>
          </div>
        </div>
        <div className="flex-1"></div>
      </div>
    </>
  );
};

export default Home;
