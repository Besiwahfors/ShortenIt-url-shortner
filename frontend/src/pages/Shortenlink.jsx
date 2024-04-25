import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ShortenLink = () => {
  const [longUrl, setLongUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [showCelebration, setShowCelebration] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Fetch authentication token from local storage or wherever you store it
      const token = localStorage.getItem("token");
    
      const requestBody = { longUrl, title, description };

      const response = await axios.post(
        "http://localhost:4000/api/links/shorten-link",
        requestBody,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include authentication token in the headers
          },
        }
      );
      setShortUrl(response.data.shortUrl);
      setShowCelebration(true);
      setTimeout(() => setShowCelebration(false), 5000); // Hide celebration after 5 seconds
    } catch (error) {
      console.error(error);
      // Handle error response
    }
  };

  return (
    <div className="flex flex-col h-screen justify-center items-center bg-gradient-to-br from-purple-700 to-pink-500">
      <div className="p-10 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Shorten Your Link</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Enter your long URL"
              value={longUrl}
              onChange={(e) => setLongUrl(e.target.value)}
              className="border border-gray-300 p-3 rounded-lg focus:outline-none flex-grow"
              style={{ minWidth: "300px" }} // Increase the width of the input field
            />
            <button
              type="submit"
              className="bg-pink-500 text-white px-8 py-4 rounded-lg hover:bg-pink-600 transition duration-300"
            >
              Shorten It Now!
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Enter title (optional)"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border border-gray-300 p-3 rounded-lg focus:outline-none"
            />
            <input
              type="text"
              placeholder="Enter description (optional)"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border border-gray-300 p-3 rounded-lg focus:outline-none"
            />
          </div>
        </form>
        {showCelebration && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="bg-yellow-400 h-16 w-16 rounded-full animate-ping"></div>
            <div className="bg-yellow-600 h-12 w-12 rounded-full animate-bounce"></div>
          </div>
        )}
        {shortUrl && (
          <div className="mt-6">
            <p className="text-lg font-semibold mb-2 text-center text-gray-800">Shortened URL:</p>
            <a
              href={shortUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline break-all block text-center"
            >
              {shortUrl}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShortenLink;
