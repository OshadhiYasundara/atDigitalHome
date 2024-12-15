import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={` ${isOpen?"bg-white h-screen overflow-hidden":"bg-primary"}  lg:px-16 xl:px-20 sm:px-10 px-5 `}>
      {!isOpen && <div className=" h-16 container sm:mx-auto  w-full flex justify-between items-center">
     
        <img src="/Logo.svg" alt="Logo" className="w-36 h-auto" />

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            
             
            
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
         
          </button>
        </div>

   
        <ul className="hidden md:flex space-x-7 text-white text-sm font-inter font-medium">
  <li className="hover:text-orange transition-all duration-300 ease-in-out">
    <a href="/">SERVICES</a>
  </li>
  <li className="hover:text-orange transition-all duration-300 ease-in-out">
    <a href="/">ABOUT US</a>
  </li>
  <li className="hover:text-orange transition-all duration-300 ease-in-out">
    <a href="/">CONTACT US</a>
  </li>
  <li className="hover:text-orange transition-all duration-300 ease-in-out">
    <a href="/">CAREERS</a>
  </li>
</ul>


      </div>}

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="  justify-between flex md:hidden mt-2 space-y-2  font-inter font-medium text-black  text-sm">
        <div  className="space-y-8 mt-4 ">
        <a
            href="/"
            className="block "
          >
            HOME
          </a>
          <a
            href="/"
            className="block "
          >
            SERVICES
          </a>
          <a
            href="/"
            className="block "
          >
            ABOUT US
          </a>
          <a
            href="/"
            className="block "
          >
            CONTACT US
          </a>
          <a
            href="/"
            className="block"
          >
            CAREERS
          </a>
        </div>

          <button className="size-8" onClick={() => setIsOpen(!isOpen)} >
          <svg
                className="w-8 h-8"
                fill="none"
                stroke="black"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
