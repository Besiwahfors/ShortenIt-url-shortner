import React, { useState } from "react";
import axios from "axios";
import Confetti from "react-confetti";
import { FaCopy, FaTrash } from "react-icons/fa";
import QRCode from "react-qr-code";

const ShortenLink = () => {
  const [longUrl, setLongUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [newShortenedLink, setNewShortenedLink] = useState(null);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false); 
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
      const shortenedLink = response.data.shortLink;
      setNewShortenedLink(shortenedLink);
      setShowSuccessPopup(true);
      setShowConfetti(true);
      setShowQRCode(false); 
      setTimeout(() => {
        setShowSuccessPopup(false);
        setShowConfetti(false);
      }, 3000);
    } catch (error) {
      console.error(error);
      
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`http://localhost:4000/links/${newShortenedLink.shortCode}`);
    alert("Shortlink copied successfully!");
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

  const handleGenerateQRCode = () => {
    setShowQRCode(true);
  };

  return (
    <div className="flex flex-col h-screen justify-center items-center bg-gradient-to-br from-purple-700 to-pink-500 relative">
      <div className="p-10 bg-white rounded-lg shadow-lg relative z-10">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Shorten Your Link
        </h1>
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
            <h3 className="text-lg font-semibold mb-4 text-gray-00">Shortened URL: <a href={newShortenedLink.longUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-500">{`http://localhost:4000/links/${newShortenedLink.shortCode}`}</a></h3>
            <div className="flex justify-between items-center">
              <button
                onClick={copyToClipboard}
                className="bg-blue-500 text-white px-4 py-2 rounded flex items-center hover:bg-blue-600 transition duration-300"
              >
                <FaCopy className="mr-1" />
                <span>Copy</span>
              </button>

              
              <button
                onClick={handleGenerateQRCode}
                className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition duration-300"
              >
                Generate QR Code
              </button>

              <button
                onClick={() => handleDeleteLink(newShortenedLink._id)}
                className="bg-red-500 text-white px-4 py-2 rounded flex items-center hover:bg-red-600 transition duration-300"
              >
                <FaTrash className="mr-1" />
                <span>Delete</span>
              </button>
            </div>
            <p className="text-gray-600 mb-2">
              Clicks: {newShortenedLink.clicks}
            </p>
            <p className="text-gray-600 mb-2">
              Description: {newShortenedLink.description}
            </p>
            <p className="text-gray-600 mb-2">
              Original URL: {newShortenedLink.longUrl}
            </p>
           
            {showQRCode && (
              <div className="mt-4">
                <QRCode value={`http://localhost:4000/links/${newShortenedLink.shortCode}`} size={200} />
              </div>
            )}
          </div>
        )}
      </div>
      {showConfetti && <Confetti />}
    </div>
  );
};

export default ShortenLink;
