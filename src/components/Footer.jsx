import React from "react";
 
const Footer = () => {
  return (
    <footer className="px-5 sm:px-10 xl:px-20 lg:px-16 bg-primary text-white py-8 mt-10">
      <div className="container mx-auto max:sm:grid lg:grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-6 md:col-span-6  grid md:grid  ">
        <img src={"/Logo.svg"} alt="AT Digital Logo" className="h-6  mb-4 lg:mb-0 "  />
          <p className="text-base sm:w-[413px] font-Lato sm:mx-0 mr-5">
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve a single objective - your
            business results.
          </p>
        </div>
    
        <div className="  sm:hidden lg:block col-span-12 md:col-span-3 mt-10 xl:mt-0 font-inter">
          <h3 className=" font-medium sm:text-lg text-[21px] mb-2">Our Technologies</h3>
          <ul className="space-y-2 text-sm">
            <li>ReactJS</li>
            <li>Gatsby</li>
            <li>NextJS</li>
            <li>NodeJS</li>
          </ul>
        </div>
        <div className=" sm:hidden lg:block col-span-12 md:col-span-2 mt-8 xl:mt-0   lg:col-span-3 font-inter">
          <h3 className=" font-medium text-[21px] mb-2">Our Services</h3>
          <ul className="space-y-3 text-sm ">
            <li>Social Media Marketing</li>
            <li>Web & Mobile App Development</li>
            <li>Data & Analytics</li>
          </ul>
        </div>
        <div className="hidden  mt-12  lg:hidden sm:grid grid-cols-2">

        <div className="  font-inter">
          <h3 className="font-semibold sm:text-lg text-[21px] mb-2">Our Technologies</h3>
          <ul className="space-y-2 text-sm">
            <li>ReactJS</li>
            <li>Gatsby</li>
            <li>NextJS</li>
            <li>NodeJS</li>
          </ul>
        </div>
        <div className="  font-inter">
          <h3 className="font-semibold text-lg mb-2">Our Services</h3>
          <ul className="space-y-3 text-sm ">
            <li>Social Media Marketing</li>
            <li>Web & Mobile App Development</li>
            <li>Data & Analytics</li>
          </ul>
        </div>
        </div>
      </div>

      <div className="border-t border-custom-purple-light mt-8 pt-3 text-sm text-center sm:mx-8 xl:mx-96 lg:mx-36">
        <div className="flex justify-center space-x-4">
          <a href="/  " className="hover:underline">
            Privacy Policy
          </a>
          <span>|</span>
          <a href="/" className="hover:underline ">
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



