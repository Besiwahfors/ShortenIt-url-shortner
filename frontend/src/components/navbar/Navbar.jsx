import React, { useState } from 'react';

const Navbar = () => {
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-blue-900 py-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-white text-2xl font-bold">
            ShortenIt
          </a>
        </div>
        <div className="md:hidden">
          
          <button className="text-white focus:outline-none" onClick={toggleMobileMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
        <div className={`md:flex items-center space-x-4 md:space-x-8 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          
          <a href="#" className="text-white hover:text-black transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:bg-white px-3 py-2 rounded-md">
            Home
          </a>
          <a href="#" className="text-white hover:text-black transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:bg-white px-3 py-2 rounded-md">
            Sign Up
          </a>
          <a href="#" className="text-white hover:text-black transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:bg-white px-3 py-2 rounded-md">
            Login
          </a>
          <a href="#" className="text-white hover:text-black transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:bg-white px-3 py-2 rounded-md">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
