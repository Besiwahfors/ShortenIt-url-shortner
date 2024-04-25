import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt, FaEdit, FaSave, FaTrash } from "react-icons/fa";

const AllLinks = () => {
  const [shortenedLinks, setShortenedLinks] = useState([]);

  useEffect(() => {
    // Fetch shortened links from backend API
    fetchShortenedLinks();
  }, []);

  const fetchShortenedLinks = () => {
    // Simulate fetching shortened links from backend API

    setShortenedLinks([
      {
        id: 1,
        name: "",
        description: "",
        originalUrl: "https://",
        shortUrl: "https://",
        date: "2024-04-16 09:30:00",
        editedName: false,
        editedDescription: false,
      },
      {
        id: 2,
        name: "Example Link 2",
        description: "This is another example link",
        originalUrl: "https://example.org",
        shortUrl: "https://your-shortened-url.com/def456",
        date: "2024-04-15 13:45:00",
        editedName: false,
        editedDescription: false,
      },
    ]);
  };

  const handleEditLink = (id) => {
    console.log("Edit link with id:", id);
    setShortenedLinks((prevLinks) =>
      prevLinks.map((link) =>
        link.id === id ? { ...link, editing: true } : link
      )
    );
  };

  const handleSaveLink = (id) => {
    console.log("Save link with id:", id);
    setShortenedLinks((prevLinks) =>
      prevLinks.map((link) =>
        link.id === id ? { ...link, editing: false } : link
      )
    );
  };

  const handleDeleteLink = (id) => {
    console.log("Delete link with id:", id);
    setShortenedLinks((prevLinks) =>
      prevLinks.filter((link) => link.id !== id)
    );
  };

  const handleNameChange = (id, value) => {
    setShortenedLinks((prevLinks) =>
      prevLinks.map((link) =>
        link.id === id ? { ...link, name: value, editedName: true } : link
      )
    );
  };

  const handleDescriptionChange = (id, value) => {
    setShortenedLinks((prevLinks) =>
      prevLinks.map((link) =>
        link.id === id
          ? { ...link, description: value, editedDescription: true }
          : link
      )
    );
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">All Shortened Links</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {shortenedLinks.map((link) => (
          <div key={link.id} className="bg-gray-100 rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold mb-2 flex items-center">
              {link.editing ? (
                <>
                  <input
                    type="text"
                    value={link.name}
                    onChange={(e) => handleNameChange(link.id, e.target.value)}
                    className="border-b border-gray-400 mb-1 focus:outline-none"
                  />
                  {link.editedName && (
                    <span className="ml-2 text-sm text-gray-500">
                      (Edit saved)
                    </span>
                  )}
                </>
              ) : (
                <>
                  {link.name}
                  <button
                    onClick={() => handleEditLink(link.id)}
                    className="text-blue-700 font-semibold flex items-center hover:text-blue-900 ml-2"
                  >
                    <FaEdit />
                  </button>
                </>
              )}
            </h2>
            <p className="text-gray-600 mb-2 flex items-center">
              {link.editing ? (
                <>
                  <textarea
                    value={link.description}
                    onChange={(e) =>
                      handleDescriptionChange(link.id, e.target.value)
                    }
                    className="border border-gray-400 p-1 mb-1 focus:outline-none"
                  />
                  {link.editedDescription && (
                    <span className="ml-2 text-sm text-gray-500">
                      (Edit saved)
                    </span>
                  )}
                </>
              ) : (
                <>
                  {link.description}
                  <button
                    onClick={() => handleEditLink(link.id)}
                    className="text-pink-600 font-semibold flex items-center hover:text-blue-900 ml-2"
                  >
                    <FaEdit />
                  </button>
                </>
              )}
            </p>
            <p className="text-gray-600 mb-2">
              Original URL: {link.originalUrl}
            </p>
            <p className="text-gray-600 mb-2">Shortened URL: {link.shortUrl}</p>
            <p className="text-gray-600 mb-2">Date Shortened: {link.date}</p>
            <div className="flex items-center justify-between">
              {link.editing && (
                <button
                  onClick={() => handleSaveLink(link.id)}
                  className="text-blue-700 font-semibold flex items-center hover:text-blue-900"
                >
                  <FaSave className="mr-1" />
                  Save
                </button>
              )}
              <button
                onClick={() => handleDeleteLink(link.id)}
                className="text-red-700 font-semibold flex items-center hover:text-red-900"
              >
                <FaTrash className="mr-1" />
                Delete
              </button>
              <a
                href={link.shortUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 font-semibold flex items-center hover:text-blue-900"
              >
                <FaExternalLinkAlt className="mr-1" />
                Visit Link
              </a>
            </div>
          </div>
        ))}
      </div>
      <Link
        to="/userprofile"
        className="block mt-8 text-blue-700 font-semibold hover:underline"
      >
        Back to Profile
      </Link>
    </div>
  );
};

export default AllLinks;
