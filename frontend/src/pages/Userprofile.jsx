import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  FaExternalLinkAlt,
  FaEdit,
  FaUserEdit,
  FaLock,
  FaTicketAlt,
  FaPlus,
  FaEye,
} from "react-icons/fa";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [shortenedLinks, setShortenedLinks] = useState([]);
  const [supportTickets, setSupportTickets] = useState([]);
    
  useEffect(() => {
    fetchUserData();
    
    fetchShortenedLinks();
    setSupportTickets([
      {
        id: 1,
        title: "Issue with Link",
        description: "Having trouble accessing the shortened link",
        status: "Open",
        date: "2024-04-18",
      },
      {
        id: 2,
        title: "General Inquiry",
        description: "Need assistance with account settings",
        status: "Closed",
        date: "2024-04-15",
      },
    ]);
  }, []);

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem("token"); // Assuming you're storing the token in localStorage
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.get(
        "http://localhost:4000/api/users/me",
        config
      );

      setUser(response.data);
      setError(null);
    } catch (error) {
      console.error("Error fetching user data:", error);
      setError(error.message);
    }
  };

  const fetchShortenedLinks = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/links/");
      setShortenedLinks(res.data);
    } catch (error) {
      console.error("Error fetching shortened links:", error);
    }
  };

  const handleEditUsername = () => {
    // Logic for editing username
    console.log("Edit username");
  };

  const handleEditPassword = () => {
    // Logic for editing password
    console.log("Edit password");
  };

  const handleEditLink = (id) => {
    // Logic for editing link
    console.log("Edit link with id:", id);
  };
  const UserProfile = () => {
   

//     // Function to handle logout
// const handleLogout = async () => {
//   try {
//     // Make a request to the logout endpoint on the backend
//     const response = await axios.post("/api/users/logout");

//     // Handle successful logout (clear token, redirect, etc.)
//     console.log(response.data); // Log the logout message (optional)

//     // Redirect the user to the login page
//     window.location.href = "/login"; // Change to your actual login page route
//   } catch (error) {
//     // Handle errors
//     console.error("Logout failed:", error);
//   }}

  
   
};

  return (
   
    <div className="flex flex-col lg:flex-row lg:min-h-screen bg-gray-100">
      <div className="bg-gray-800 text-white w-full lg:w-64 flex-shrink-0">
        <div className="p-4">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="mt-2">Welcome, {user && user.username}!</p>
          <div className="mt-4">
            <Link
              to="/profile"
              className="block mt-2 text-blue-200 hover:text-white transition duration-300"
            >
              Profile
            </Link>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-auto p-4">
        <a
        href="/logout" // Link to the logout endpoint
        // onClick={handleLogout} // Handle logout when clicked
        className="block text-sm text-red-200 hover:text-white transition duration-300"
      >
        Logout
      </a>
        </div>
      </div>

      <div className="flex-1 p-6 bg-white">
        <header className="py-6 px-4 bg-blue-500 text-white rounded-lg mb-8">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <h1 className="text-2xl md:text-3xl font-bold">
              Welcome, {user && user.username}!
            </h1>
            <div className="flex items-center space-x-4">
              <button
                onClick={handleEditUsername}
                className="text-white hover:text-gray-200"
              >
                <FaUserEdit className="text-xl" />
              </button>
              <button
                onClick={handleEditPassword}
                className="text-white hover:text-gray-200"
              >
                <FaLock className="text-xl" />
              </button>
            </div>
          </div>
        </header>

        <div className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-lg mb-8 w-48 text-center mx-auto">
          <Link
            to="/shorten-link"
            className="flex items-center justify-center space-x-2"
          >
            <FaPlus />
            <span className="font-semibold">Shorten New Link</span>
          </Link>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Your Shortened Links</h2>
          {shortenedLinks.map((link) => (
            <div
              key={link.id}
              className="bg-gray-200 rounded-lg shadow-lg p-6 mb-4"
            >
              <h3 className="text-lg font-semibold text-gray-800">
                {link.name}
              </h3>
              <p className="text-gray-600 mb-2">
                Description: {link.description}
              </p>
              <p className="text-gray-600 mb-2">
                Original URL: {link.originalUrl}
              </p>
              <p className="text-gray-600 mb-2">
                Shortened URL: {link.shortUrl}
              </p>
              <div className="flex items-center justify-between">
                <a
                  href={link.shortUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-900 font-semibold flex items-center hover:text-blue-700"
                >
                  <FaExternalLinkAlt className="mr-1" />
                  Visit Link
                </a>
                <button
                  onClick={() => handleEditLink(link.id)}
                  className="text-blue-700 font-semibold flex items-center hover:text-blue-900"
                >
                  <FaEdit className="mr-1" />
                  Edit
                </button>
              </div>
            </div>
          ))}
          <div className="text-center w-52 ">
            <Link
              to="/all-links"
              className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center space-x-2"
            >
              <FaEye />
              <span>View All Links</span>
            </Link>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Support Tickets</h2>
          {supportTickets.map((ticket) => (
            <div
              key={ticket.id}
              className="bg-gray-200 rounded-lg shadow-lg p-6 mb-4"
            >
              <h3 className="text-lg font-semibold text-gray-800">
                {ticket.title}
              </h3>
              <p
                className={`text-${
                  ticket.status === "Open" ? "red" : "green"
                }-600 font-semibold`}
              >
                {ticket.status}
              </p>
              <p className="text-gray-600 mb-2">{ticket.description}</p>
              <p className="text-gray-600 text-sm">Created on {ticket.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    
  );
};

export default UserProfile;
