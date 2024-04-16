import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-white min-h-screen flex flex-col justify-between">
      
      <header className="text-white py-12 text-center">
        <div className="container mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl font-bold mb-4"
          >
            Welcome to ShortenIt
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg mb-8"
          >
            Shorten any long URL and save it with a custom name!
          </motion.p>
          <Link to="/signup" className="bg-white text-blue-900 font-semibold px-8 py-3 rounded-full hover:bg-blue-100 transition duration-300">
            Get Started
          </Link>
        </div>
      </header>

      
      <section className="bg-white text-blue-900 py-20">
        <div className="container mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl font-bold mb-8 text-center"
          >
            How It Works
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="text-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-5xl text-blue-900 mx-auto mb-4 w-16 h-16">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <h3 className="text-2xl font-semibold mb-4">Sign Up</h3>
              <p>Create an account with a unique username and password.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="text-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-5xl text-blue-900 mx-auto mb-4 w-16 h-16">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
              <h3 className="text-2xl font-semibold mb-4">Shorten</h3>
              <p>Paste any long URL and customize the shortened link.</p>
            </motion.div>
        
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2 }}
              className="text-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-5xl text-blue-900 mx-auto mb-4 w-16 h-16">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
              <h3 className="text-2xl font-semibold mb-4">Save & Share</h3>
              <p>Save your shortened links and share them with others.</p>
            </motion.div>
          </div>
        </div>
      </section>

      
      <section className="bg-blue-900 text-white py-20 flex flex-col justify-center items-center">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="container mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-8">Make Your Links Shorter</h2>
          <p className="text-lg mb-12">Transform long, cumbersome URLs into custom, memorable links. Explore the possibilities.</p>
          <Link to="/signup" className="bg-white text-blue-900 font-semibold px-8 py-3 rounded-full hover:bg-blue-100 transition duration-300">Get Started</Link>
        </motion.div>
      </section>

      
      <section className="bg-white text-blue-900 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Get QR Code for Your Shortened Link</h2>
          <div className="bg-blue-900 p-6 rounded-lg mb-8 inline-block">
            
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" className="w-24 h-24 mx-auto">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
            </svg>
          </div>
          <p className="text-lg mb-12">Generate a QR code for your shortened link and easily share it with others.</p>
          <Link to="/signup" className="bg-blue-900 text-white font-semibold px-8 py-3 rounded-full hover:bg-blue-800 transition duration-300">Get QR Code</Link>
        </div>
      </section>

      
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20 text-center">
        <div className="container mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl font-bold mb-8"
          >
            Pricing Plans
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4">Basic</h3>
              <p className="text-2xl font-bold mb-4">$5/month</p>
              <ul className="text-left mb-6">
                <li>10 Shortened Links</li>
                <li>Basic Analytics</li>
                <li>Limited Support</li>
              </ul>
              <Link to="/signup" className="bg-blue-900 text-white font-semibold px-6 py-2 rounded-full hover:bg-blue-800 transition duration-300">Choose Plan</Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4">Standard</h3>
              <p className="text-2xl font-bold mb-4">$10/month</p>
              <ul className="text-left mb-6">
                <li>50 Shortened Links</li>
                <li>Advanced Analytics</li>
                <li>Priority Support</li>
              </ul>
              <Link to="/signup" className="bg-blue-900 text-white font-semibold px-6 py-2 rounded-full hover:bg-blue-800 transition duration-300">Choose Plan</Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4">Premium</h3>
              <p className="text-2xl font-bold mb-4">$20/month</p>
              <ul className="text-left mb-6">
                <li>Unlimited Shortened Links</li>
                <li>Full Analytics Suite</li>
                <li>24/7 Priority Support</li>
              </ul>
              <Link to="/signup" className="bg-blue-900 text-white font-semibold px-6 py-2 rounded-full hover:bg-blue-800 transition duration-300">Choose Plan</Link>
            </motion.div>
          </div>
        </div>
      </section>

      
      <section className="bg-blue-900 text-white py-8 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3 }}
          className="container mx-auto"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <Link to="/login" className="bg-white text-blue-900 font-semibold px-8 py-3 rounded-full hover:bg-blue-100 transition duration-300">Log In</Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
