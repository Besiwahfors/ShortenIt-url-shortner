import React, { useState } from "react";
import axios from "axios";
import Confetti from "react-confetti";
import { FaCopy, FaTrash } from "react-icons/fa";

const ShortenLink = () => {
  const [longUrl, setLongUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [shortLink, setShortLink] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [newShortenedLink, setNewShortenedLink] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const requestBody = { longUrl, title, description };
      const response = await axios.post(
        "http://localhost:4000/api/links/shorten-link",
        requestBody,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const { shortLink, ...linkData } = response.data.shortLink;
      setShortLink(shortLink);
      setNewShortenedLink(linkData);
      setShowSuccessPopup(true);
      setShowConfetti(true);
      setTimeout(() => {
        setShowSuccessPopup(false);
        setShowConfetti(false);
      }, 3000);
    } catch (error) {
      console.error(error);
      // Handle error response
    }
  };

  const copyToClipboard = (url) => {
    navigator.clipboard.writeText(url);
  };

  const handleDeleteLink = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:4000/api/links/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setNewShortenedLink(null);
    } catch (error) {
      console.error("Error deleting link:", error);
    }
  };

  return (
    <div className="flex flex-col h-screen justify-center items-center bg-gradient-to-br from-purple-700 to-pink-500 relative">
      
        <div className="p-10 bg-white rounded-lg shadow-lg relative z-10">
          <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Shorten Your Link</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center space-x-4">
              <input
                type="text"
                placeholder="Enter your long URL"
                value={longUrl}
                onChange={(e) => setLongUrl(e.target.value)}
                className="border border-gray-300 p-3 rounded-lg focus:outline-none flex-grow"
                style={{ minWidth: "300px" }}
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
          {showSuccessPopup && (
            <div className="bg-pink-500 text-white px-4 py-2 rounded absolute top-0 left-0 right-0 text-center">
              Link shortened successfully!
            </div>
          )}
          {newShortenedLink && (
            <div className="mt-6 bg-gray-200 rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800">{newShortenedLink.name}</h3>
              <p className="text-gray-600 mb-2">Clicks: {newShortenedLink.clicks}</p>
              <p className="text-gray-600 mb-2">Description: {newShortenedLink.description}</p>
              <p className="text-gray-600 mb-2">Original URL: {newShortenedLink.longUrl}</p>
              <p className="text-gray-600 mb-2">Shortened URL: {shortLink}</p>
              <div className="flex items-center justify-between">
                <button
                  onClick={() => copyToClipboard(shortLink)}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                >
                  <FaCopy className="mr-1" />
                  Copy
                </button>
                <button
                  onClick={() => handleDeleteLink(newShortenedLink.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
                >
                  <FaTrash className="mr-1" />
                  Delete
                </button>
              </div>
            </div>
          )}
        </div>
        {showConfetti && <Confetti />}
      </div>
    
  );
};

export default ShortenLink;
