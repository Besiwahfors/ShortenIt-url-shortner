import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Login = () => {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-white min-h-screen flex flex-col justify-center items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"
      >
        <h2 className="text-3xl font-bold mb-8 text-blue-900 text-center">
          Log In
        </h2>
        <form className="space-y-4">
          <div>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="w-full border-b-2 border-blue-900 py-2 px-3 focus:outline-none focus:border-blue-500 rounded-md"
            />
          </div>
          <div>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="w-full border-b-2 border-blue-900 py-2 px-3 focus:outline-none focus:border-blue-500 rounded-md"
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-blue-900 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-800 transition duration-300 w-full"
            >
              Log In
            </button>
          </div>
        </form>
        <p className="mt-4 text-sm text-blue-900 text-center">
          Don't have an account?
          <Link to="/signup" className="text-blue-500 ml-1">
            Sign Up
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
