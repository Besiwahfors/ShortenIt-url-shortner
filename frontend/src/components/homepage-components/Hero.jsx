import React from 'react';
import { motion } from 'framer-motion';
import backgroundImage from '../../assets/images/undraw.svg'; 

const Hero = () => {
  const numAnimations = 5; 

  const generateRandomPosition = () => {
    return {
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    };
  };

  return (
    <div className="relative h-screen md:h-auto w-full flex flex-col md:flex-row items-center justify-center">
      
      <div className="w-full md:w-1/2 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
          className="absolute inset-0 z-[-1] overflow-hidden pointer-events-none"
        >
          {[...Array(numAnimations)].map((_, index) => (
            <motion.div
              key={index}
              className="absolute"
              style={{
                ...generateRandomPosition(),
                zIndex: -1,
              }}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                loop: Infinity,
                ease: 'linear',
                delay: Math.random() * 5,
              }}
            >
              <motion.div
                className="w-1 h-8 bg-black"
                animate={{
                  y: [-50, 50],
                }}
                transition={{
                  duration: Infinity,
                  loop: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut',
                  repeat: Infinity,
                }}
              />
              <motion.div
                className="w-8 h-1 bg-black"
                animate={{
                  x: [-50, 50],
                }}
                transition={{
                  duration: Math.random() * 5 + 5,
                  loop: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut',
                  repeat: Infinity,
                }}
              />
              <motion.div
                className="w-4 h-4 bg-transparent border-2 border-black rounded-full"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: Math.random() * 10 + 5,
                  loop: Infinity,
                  ease: 'linear',
                  delay: Math.random() * 5,
                  repeat: Infinity,
                }}
              />
            </motion.div>
          ))}
        </motion.div>
        <div className="text-black px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center h-full w-full">
          <h1 className="text-4xl sm:text-4xl lg:text-6xl font-bold mb-4 text-center">
            Welcome to <span className="text-pink-600">ShortenIt!</span>
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl mb-8 text-center">
            The ultimate URL shortener and QR code generator.
          </p>
          <div className="flex space-x-4">
            <motion.button
             href="/register"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-pink-600 border border-purple-700 text-white px-8 py-4 rounded-lg font-semibold shadow-md hover:bg-pink-600 hover:text-gray-900 transition duration-300"
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </div>
      {/* Right side */}
      <div className="hidden md:block w-full md:w-1/2 h-full">
        <img src={backgroundImage} alt="Hero Image" className="h-full w-full object-cover" />
      </div>
    </div>
  );
};

export default Hero;
