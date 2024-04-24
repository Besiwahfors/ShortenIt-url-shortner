
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const { username, email, password, confirmPassword } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.id]: e.target.value });

    const onSubmit = async e => {
      e.preventDefault();
      console.log("onSubmit function called");
      try {
        const res = await axios.post("http://localhost:4000/api/users/register", formData);
        
        console.log("Response:", res.data);
        // Redirect to login page after successful registration
        window.location.href = "/login";
      } catch (err) {
        console.error("Error:", err.response.data);
        // Handle error
      }
    };
    

  return (
    <div className="min-h-screen flex flex-col md:flex-row justify-center items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full md:mr-8 border border-blue-500"
      >
        <h2 className="text-3xl font-bold mb-8 text-blue-900 text-center">
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
              className="w-full border-b-2 border-blue-900 py-3 px-3 focus:outline-none rounded-md"
            />
          </div>
          <div>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={onChange}
              className="w-full border-b-2 border-blue-900 py-3 px-3 focus:outline-none rounded-md"
            />
          </div>
          <div>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={onChange}
              className="w-full border-b-2 border-blue-900 py-3 px-3 focus:outline-none rounded-md"
            />
          </div>
          <div>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={onChange}
              className="w-full border-b-2 border-blue-900 py-3 px-3 focus:outline-none rounded-md"
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-blue-900 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-800 transition duration-300 w-full"
            >
              Sign Up
            </button>
          </div>
        </form>
        <p className="mt-4 text-sm text-blue-900 text-center">
          Already have an account?
          <Link to="/login" className="text-blue-500 ml-1">
            Log In
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Signup;

