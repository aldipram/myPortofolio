import { Github, Instagram, Linkedin, PhoneCall } from "lucide-react";
import React from "react";

function Footer() {
  return (
    <>
      <div className="bg-darkBackground text-white mt-10">
        <div className="w-[80%] mx-auto flex flex-col md:flex-row justify-between py-8 md:mx-32 md:gap-3">
          <div className="w-full md:w-1/4">
            <h1 className="font-semibold text-xl text-[#7977f1] pb-4">ALDIprmdy_</h1>
            <p className="text-sm">
                You want to cooperate with me? Contact me now!
            </p>
          </div>
          <div>
            <h1 className="font-medium text-[#7977f1] text-xl pb-4 pt-5 md:pt-0">About</h1>
            <nav className="flex flex-col gap-2">
              <a
                className="hover:text-brightColor transition-all cursor-pointer"
                href="#contact"
              >
                Contact Us
              </a>
              <a
                className="hover:text-brightColor transition-all cursor-pointer"
                href="#profile"
              >
                Profile
              </a>
              <a
                className="hover:text-brightColor transition-all cursor-pointer"
                href="#project"
              >
                Project
              </a>
            </nav>
          </div>
          <div>
            <h1 className="font-medium text-xl text-[#7977f1] pb-4">Follow Me</h1>
            <nav className="flex flex-col lg:flex-row md:items-center gap-2">
                <a className='hover:text-brightColor transition-all' href="https://www.instagram.com/nandaaaldii/"><Instagram /></a>
                <a className='hover:text-brightColor transition-all' href="https://wa.me/+6288232240609"><PhoneCall /></a>
                <a className='hover:text-brightColor transition-all' href="https://www.linkedin.com/in/aldipramudya-aldi/"><Linkedin /></a>
                <a className='hover:text-brightColor transition-all' href="https://github.com/aldipram"><Github /></a>
            </nav>
          </div>
        </div>
        <div className="w-[80%] mx-auto">
            <p className="text-center py-4">
                &copy; Copyright 2023 developed by <span className="text-[#7977f1]">ALDIprmdy</span> | All Rights Reserved.
            </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
