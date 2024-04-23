import React from 'react';
import { motion } from 'framer-motion';
import { BiLinkExternal, BiLink, BiCodeBlock } from 'react-icons/bi';
import { AiOutlineLogin, AiOutlineUserAdd } from 'react-icons/ai';

const Process = () => {
  return (
    <div className="bg-gray-100 py-16 px-8">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <motion.span
            className="border-b-2 border-blue-500"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ delay: 0.2 }}
          >
            How It Works
          </motion.span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        
          <motion.div
            className="flex flex-col items-center bg-white p-8 rounded-xl shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-2xl font-semibold text-gray-800 mb-4 bg-gradient-to-r from-blue-400 to-purple-400 py-1 px-2 rounded-full">Step 1</span>
            <AiOutlineUserAdd className="text-4xl text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Sign Up
            </h3>
            <p className="text-gray-600 mb-4">
              Sign up for an account to start shortening links.
            </p>
          </motion.div>

          
          <motion.div
            className="flex flex-col items-center bg-white p-8 rounded-xl shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-2xl font-semibold text-gray-800 mb-4 bg-gradient-to-r from-blue-400 to-purple-400 py-1 px-2 rounded-full">Step 2</span>
            <AiOutlineLogin className="text-4xl text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Log In</h3>
            <p className="text-gray-600 mb-4">
              Already have an account? Log in here.
            </p>
          </motion.div>

          
          <motion.div
            className="flex flex-col items-center bg-white p-8 rounded-xl shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-2xl font-semibold text-gray-800 mb-4 bg-gradient-to-r from-blue-400 to-purple-400 py-1 px-2 rounded-full">Step 3</span>
            <BiLink className="text-4xl text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Shorten Link
            </h3>
            <p className="text-gray-600 mb-4">
              Paste your long URL and click to generate a shortened link.
            </p>
          </motion.div>

        
          <motion.div
            className="flex flex-col items-center bg-white p-8 rounded-xl shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-2xl font-semibold text-gray-800 mb-4 bg-gradient-to-r from-blue-400 to-purple-400 py-1 px-2 rounded-full">Step 4</span>
            <BiCodeBlock className="text-4xl text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Generate QR Code
            </h3>
            <p className="text-gray-600 mb-4">
              After shortening your link, generate a QR code for easy sharing.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Process;
