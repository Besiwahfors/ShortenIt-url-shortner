import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import bookImage from "../assets/images/unboarding.svg";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [successMessage, setSuccessMessage] = useState(false);

  const { username, email, password, confirmPassword } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.id]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    console.log("onSubmit function called");
    try {
      const res = await axios.post("http://localhost:4000/api/users/register", formData);
      
      console.log("Response:", res.data);
      setSuccessMessage(true);
      // Redirect to login page after successful registration
      setTimeout(() => {
        window.location.href = "/login";
      }, 3000); // Redirect after 3 seconds
    } catch (err) {
      console.error("Error:", err.response.data);
      // Handle error
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-purple-700 to-pink-500">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-4/5 bg-white p-8 rounded-lg shadow-xl max-w-4xl flex flex-col md:flex-row"
      >
        <div className="md:w-1/2 pr-4">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
            Create an Account
          </h2>
          <form onSubmit={onSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                id="username"
                placeholder="Username"
                value={username}
                onChange={onChange}
                className="w-full border-b-2 border-purple-800 py-3 px-3 focus:outline-none rounded-md"
              />
            </div>
            <div>
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={onChange}
                className="w-full border-b-2 border-purple-800 py-3 px-3 focus:outline-none rounded-md"
              />
            </div>
            <div>
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={onChange}
                className="w-full border-b-2 border-purple-800 py-3 px-3 focus:outline-none rounded-md"
              />
            </div>
            <div>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={onChange}
                className="w-full border-b-2 border-purple-800 py-3 px-3 focus:outline-none rounded-md"
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-pink-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-pink-500 transition duration-300 w-full"
              >
                Sign Up
              </button>
            </div>
          </form>
          <p className="mt-4 text-md text-gray-800 text-center">
            Already have an account?
            <Link to="/login" className="text-purple-500 ml-1">
              Log In
            </Link>
          </p>
        </div>
        <div className="md:w-1/2 pl-4">
          <motion.img
            src={bookImage}
            alt="Book"
            className="w-full h-full object-cover rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />
        </div>
      </motion.div>
      {successMessage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center"
        >
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-green-500 text-white px-6 py-3 rounded-md"
          >
            Registration successful, redirecting to login page...
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Signup;
