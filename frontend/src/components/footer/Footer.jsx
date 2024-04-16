import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold">ShortenIt</p>
        <div className="flex justify-center items-center mt-4">
          <a
            href="#"
            className="text-white hover:text-gray-200 mx-2 transition duration-300"
          >
            Home
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-200 mx-2 transition duration-300"
          >
            Sign Up
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-200 mx-2 transition duration-300"
          >
            Login
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-200 mx-2 transition duration-300"
          >
            Contact
          </a>
        </div>
        <p className="mt-6">
          &copy; {new Date().getFullYear()} ShortenIt. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
