import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-blue-900 py-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <a href="/" className="text-white text-3xl font-bold">
            ShrinkIt
          </a>
        </div>
        <div className="md:hidden">
          <button className="text-white focus:outline-none" onClick={toggleMobileMenu}>
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
            href="#"
            className="nav-link text-white text-lg transition duration-300 ease-in-out"
            whileHover={{
              backgroundColor: '#FFFFFF',
              color: '#000000',
              scale: 1.1,
              borderRadius: '4px',
              padding: '8px 16px',
            }}
          >
            Home
          </motion.a>
          <motion.a
            href="#"
            className="nav-link text-white text-lg transition duration-300 ease-in-out"
            whileHover={{
              backgroundColor: '#FFFFFF',
              color: '#000000',
              scale: 1.1,
              borderRadius: '4px',
              padding: '8px 16px',
            }}
          >
            Features
          </motion.a>
          <motion.a
            href="#"
            className="nav-link text-white text-lg transition duration-300 ease-in-out"
            whileHover={{
              backgroundColor: '#FFFFFF',
              color: '#000000',
              scale: 1.1,
              borderRadius: '4px',
              padding: '8px 16px',
            }}
          >
            Pricing
          </motion.a>
          <motion.a
            href="/pricing"
            className="nav-link text-white text-lg transition duration-300 ease-in-out"
            whileHover={{
              backgroundColor: '#FFFFFF',
              color: '#000000',
              scale: 1.1,
              borderRadius: '4px',
              padding: '8px 16px',
            }}
          >
            Testimonials
          </motion.a>
          <motion.a
            href="#"
            className="nav-link text-white text-lg transition duration-300 ease-in-out"
            whileHover={{
              backgroundColor: '#FFFFFF',
              color: '#000000',
              scale: 1.1,
              borderRadius: '4px',
              padding: '8px 16px',
            }}
          >
            Contact
          </motion.a>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
