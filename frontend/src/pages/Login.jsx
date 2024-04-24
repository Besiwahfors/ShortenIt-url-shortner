import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";

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
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              id="username"
              placeholder="Username"
              value={username}
              onChange={onChange}
              className="w-full border-b-2 border-blue-900 py-2 px-3 focus:outline-none focus:border-blue-500 rounded-md"
            />
          </div>
          <div>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={onChange}
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
