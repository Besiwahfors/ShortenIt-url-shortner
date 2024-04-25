import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaExternalLinkAlt, FaEdit, FaEye} from "react-icons/fa";

const ShortenedLinksSection = () => {
  const [shortenedLinks, setShortenedLinks] = useState([]);

  useEffect(() => {
    fetchShortenedLinks();
  }, []);

  const fetchShortenedLinks = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:4000/api/links/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setShortenedLinks(res.data);
    } catch (error) {
      console.error("Error fetching shortened links:", error);
    }
  };

  const handleEditLink = (id) => {
    // Logic for editing link
    console.log("Edit link with id:", id);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Your Shortened Links</h2>
      {shortenedLinks.map((link) => (
        <div
          key={link.id}
          className="bg-gray-200 rounded-lg shadow-lg p-6 mb-4"
        >
          <h3 className="text-lg font-semibold text-gray-800">{link.name}</h3>
          <p className="text-gray-600 mb-2">Clicks: {link.clicks}</p>
          <p className="text-gray-600 mb-2">Description: {link.description}</p>
          <p className="text-gray-600 mb-2">Original URL: {link.longUrl}</p>
          <p className="text-gray-600 mb-2">Shortened URL: {link.shortLink}</p>
          <div className="flex items-center justify-between">
            <a
              href={link.longUrl}
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
      <div className="text-center w-52">
        <Link
          to="/all-links"
          className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center space-x-2"
        >
          <FaEye />
          <span>View All Links</span>
        </Link>
      </div>
    </div>
  );
};

export default ShortenedLinksSection;
