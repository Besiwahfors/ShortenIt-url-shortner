import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt, FaEdit, FaTrash } from "react-icons/fa";

const AllLinks = () => {
  const [shortenedLinks, setShortenedLinks] = useState([]);
  const [editId, setEditId] = useState(null);
  const [newTitle, setNewTitle] = useState("");

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

  const handleEdit = (_id, title) => {
    setEditId(_id);
    setNewTitle(title);
  };

  const handleSaveTitle = async (_id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.put(
        `http://localhost:4000/api/links/${id}`,
        { title: newTitle },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setEditId(null);
      fetchShortenedLinks();
    } catch (error) {
      console.error("Error saving title:", error);
    }
  };

  const handleDeleteLink = async (_id) => {
    try {
      console.log("Delete link with id:", id);
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:4000/api/links/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setShortenedLinks((prevLinks) =>
        prevLinks.filter((link) => link.id !== id)
      );
      alert("Delete successful");
    } catch (error) {
      console.error("Error deleting link:", error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">All Shortened Links</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {shortenedLinks.map((link) => (
          <div key={link.id} className="bg-gray-100 rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold mb-2 flex items-center">
              {editId === link.id ? (
                <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="border-b border-gray-400 mb-1 focus:outline-none"
                />
              ) : (
                <>
                  {link.title}
                  <button
                    onClick={() => handleEdit(link._id, link.title)}
                    className="text-blue-700 font-semibold flex items-center hover:text-blue-900 ml-2"
                  >
                    <FaEdit />
                  </button>
                </>
              )}
            </h2>
            
            <p className="text-gray-600 mb-2">
              Description: {link.description}
            </p>
            <p className="text-gray-600 mb-2">
              Original URL: {link.longUrl}
            </p>
            <p className="text-gray-600 mb-2">
              Shortened URL: {link.shortLink}
            </p>
            <p className="text-gray-600 mb-2">
              Clicks: {link.clicks}
            </p>
            <div className="flex items-center justify-between">
              <button
                onClick={() => handleDeleteLink(link._id)}
                className="text-red-700 font-semibold flex items-center hover:text-red-900"
              >
                <FaTrash className="mr-1" />
                Delete
              </button>
              <a
                href={link.longUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 font-semibold flex items-center hover:text-blue-900"
              >
                <FaExternalLinkAlt className="mr-1" />
                Visit Link
              </a>
              {editId === link.id && (
                <button
                  onClick={() => handleSaveTitle(link._id)}
                  className="text-blue-700 font-semibold flex items-center hover:text-blue-900"
                >
                  Save
                </button>
              )}
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
