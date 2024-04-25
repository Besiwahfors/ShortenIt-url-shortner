import React, { useState } from 'react';
import { motion } from 'framer-motion';
import logoImage from '../../assets/images/shortenit.png'; 

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white py-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={logoImage} alt="ShortenIt Logo" className="h-20 md:h-20" /> 
          <span className="text-black text-lg md:text-3xl font-bold ml-2">ShortenIt</span> 
        </div>
        <div className="md:hidden">
          <button className="text-black focus:outline-none" onClick={toggleMobileMenu}>
            <svg
              className="w-8 h-8"
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
        <motion.div
          className={`md:flex items-center space-x-4 md:space-x-8 ${
            isMobileMenuOpen ? 'block' : 'hidden'
          }`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.a
            href="/register"
            className="bg-pink-600 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:bg-pink-700 hover:text-white transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Sign Up
          </motion.a>
          <motion.a
            href="/login"
            className="bg-transparent border border-purple-600 text-purple-600 px-6 py-2 rounded-full font-semibold shadow-md hover:bg-purple-600 hover:text-white transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Sign In
          </motion.a>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
