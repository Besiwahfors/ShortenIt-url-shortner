import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import loginImage from "../assets/images/login.svg"; // Import your image

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.id]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:4000/api/users/login",
        formData
      );
      console.log(res.data);
      // Check if login was successful
      if (res.data && res.data.token) {
        // Save the token to local storage or session storage for future requests
        localStorage.setItem("token", res.data.token);

        // Fetch user info to get the user's unique identifier (e.g., user ID or username)
        const userInfoRes = await axios.get(
          "http://localhost:4000/api/users/me",
          {
            headers: {
              Authorization: `Bearer ${res.data.token}`,
            },
          }
        );
        const userId = userInfoRes.data.id; // Assuming the backend returns the user's ID
        console.log("User ID:", userId);

        // Construct the URL for the user's personalized dashboard
        const userProfileUrl = `/userprofile/${userId}`; // Update the route as per your application
        console.log("User Profile URL:", userProfileUrl);

        // Redirect the user to their personalized dashboard
        window.location.href = userProfileUrl;
      } else {
        console.error("Login failed: Invalid response data");
      }
    } catch (err) {
      console.error(err.response.data);
      // Handle error
    }
  };

  return (
    <div className="bg-gradient-to-br from-purple-700 to-pink-500 min-h-screen flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full flex flex-col md:flex-row justify-between items-center p-8 md:p-24">
        <motion.img
          src={loginImage}
          alt="Login"
          className="w-full md:max-w-md h-auto object-contain rounded-lg shadow-lg mb-8 md:mb-0"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
            Log In
          </h2>
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                id="username"
                placeholder="Username"
                value={username}
                onChange={onChange}
                className="w-full border-b-2 border-purple-500 py-3 px-3 focus:outline-none focus:border-purple-500 rounded-md"
              />
            </div>
            <div>
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={onChange}
                className="w-full border-b-2 border-purple-500 py-3 px-3 focus:outline-none focus:border-purple-500 rounded-md"
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-pink-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-pink-600 transition duration-300 w-full"
              >
                Log In
              </button>
            </div>
          </form>
          <p className="mt-4 text-sm text-blue-900 text-center">
            Don't have an account?
            <Link to="/register" className="text-purple-500 ml-1">
              Sign Up
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
