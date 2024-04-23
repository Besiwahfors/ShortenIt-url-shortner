import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const numAnimations = 10; // Number of animations

  // Generate random positions for animations
  const generateRandomPosition = () => {
    return {
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    };
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="relative flex flex-col items-center justify-center h-screen bg-black overflow-hidden"
    >
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 z-[-1] overflow-hidden pointer-events-none"
        whileHover={{ scale: 1.05 }} // Pause animation on hover
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
              loop: Infinity, // Repeat the animation infinitely
              ease: 'linear',
              delay: Math.random() * 5,
            }}
          >
            <motion.div
              className="w-1 h-8 bg-white"
              animate={{
                y: [-50, 50],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                loop: Infinity, // Repeat the animation infinitely
                repeatType: 'reverse',
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="w-8 h-1 bg-white"
              animate={{
                x: [-50, 50],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                loop: Infinity, // Repeat the animation infinitely
                repeatType: 'reverse',
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="w-4 h-4 bg-transparent border-2 border-white rounded-full"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: Math.random() * 10 + 5,
                loop: Infinity, // Repeat the animation infinitely
                ease: 'linear',
                delay: Math.random() * 5,
              }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 text-white py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-center">
          Welcome to <span className="text-blue-500">Shortify!</span>
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-center">
          The ultimate URL shortener and QR code generator.
        </p>
        <div className="flex space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition duration-300"
          >
            Sign Up
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent border border-white text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-white hover:text-gray-900 transition duration-300"
          >
            Log In
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
