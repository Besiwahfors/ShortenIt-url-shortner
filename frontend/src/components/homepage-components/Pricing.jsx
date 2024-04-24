import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <div className="bg-gray-100 py-16 px-8">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-800 relative inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Pricing Plans
          <motion.div
            className="absolute bottom-0 left-1/2 bg-blue-500 h-1 w-1/3 transform -translate-x-1/2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.2 }}
          />
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <motion.div
            className="bg-white rounded-lg p-6 shadow-md text-center hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Free Plan</h3>
            <p className="text-lg text-gray-600 mb-6">
              Limited access to analytics
            </p>
            <p className="text-3xl font-bold mb-6">
              $0<span className="text-gray-500 text-lg">/month</span>
            </p>
            <Link to="/signup">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-600 transition duration-300"
              >
                Sign Up
              </motion.button>
            </Link>
          </motion.div>
          <motion.div
            className="bg-white rounded-lg p-6 shadow-md text-center hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Premium Plan</h3>
            <p className="text-lg text-gray-600 mb-6">
              Full access to analytics
            </p>
            <p className="text-3xl font-bold mb-6">
              $9.99<span className="text-gray-500 text-lg">/month</span>
            </p>
            <button className="bg-blue text-black border border-black px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-blue transition duration-300">
              Subscribe
            </button>
          </motion.div>
        </div>
       
      </div>
    </div>
  );
};

export default Pricing;
