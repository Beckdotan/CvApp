import React, { useState } from 'react';
import logo from '../assets/logo.png'; // Import the logo image
import cv from '../assets/Dotan-CV.pdf'; // Import your CV PDF

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-darkerColor bg-opacity-70 backdrop-blur-md text-lightGray z-50 shadow-md shadow-darkBackground">
      <div className="flex justify-between items-center h-16 px-8">
        {/* Left - Logo */}
        <div className="flex-shrink-0">
          <img className="h-12 w-50" src={logo} alt="Logo" />
        </div>

        {/* Center - Tabs Container (hidden on mobile) */}
        <div className="hidden md:flex items-stretch justify-start flex-grow pl-8">
          <nav className="flex space-x-8">
            <a href="#ask-anything" className="text-base font-medium text-lightGray hover:text-cyanBlue transition duration-300">Ask Anything</a>
            <a href="#projects" className="text-base font-medium text-lightGray hover:text-cyanBlue transition duration-300">Projects</a>
            <a href="#about-me" className="text-base font-medium text-lightGray hover:text-cyanBlue transition duration-300">About Me</a>
          </nav>
        </div>

        {/* Right - Download CV Button */}
        <div className="hidden md:flex items-center justify-center">
          <a 
            href={cv}
            download="my-cv.pdf"
            className="text-cyanBlue border border-cyanBlue px-3 py-2 rounded-full text-center hover:bg-cyanBlue hover:text-darkBackground transition duration-300"
          >
            Download CV
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-skyBlue focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-1">
          <a href="#ask-anything" className="block text-base font-medium text-lightGray hover:text-skyBlue transition duration-300">Ask Anything</a>
          <a href="#about-me" className="block text-base font-medium text-lightGray hover:text-skyBlue transition duration-300">About Me</a>
          <a href="#projects" className="block text-base font-medium text-lightGray hover:text-skyBlue transition duration-300">Projects</a>
          <a
            href={cv}
            download="my-cv.pdf"
            className="block text-skyBlue border border-skyBlue px-3 py-2 rounded-full text-center hover:bg-skyBlue hover:text-darkBackground transition duration-300"
          >
            Download CV
          </a>
        </div>
      )}
    </header>
  );
}

export default Header;
