import React, { useState, useEffect } from "react";
import axios from "axios";
import QRCode from "react-qr-code";

const QRCodePage = () => {
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

  const generateQRCode = async (linkId) => {
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        `http://localhost:4000/api/links/generate-qr-code/${linkId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      fetchShortenedLinks(); // Refresh links after generating QR code
    } catch (error) {
      console.error("Error generating QR code:", error);
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Generate QR Codes for Shortened Links</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {shortenedLinks.map((link) => (
          <div key={link._id} className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">{link.title || "Untitled"}</h2>
            <p className="text-gray-600 mb-4">{link.description || "No description"}</p>
            <p className="text-gray-600 mb-4">{link.shortLink || "No description"}</p>
            {link.qrCode ? (
              <div>
                <QRCode value={`http://localhost:4000/links/${link.shortCode}`} size={150} />
              </div>
            ) : (
              <button
                onClick={() => generateQRCode(link._id)}
                className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition duration-300"
              >
                Generate QR Code
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QRCodePage;
