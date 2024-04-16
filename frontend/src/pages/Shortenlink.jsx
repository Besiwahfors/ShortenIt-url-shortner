import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ShortenLink = () => {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setShortUrl("http://localhost:3000/link/yUvWeR");
    
    navigate(`/link/yUvWeR`);
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">Shorten Your Link</h1>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Enter your long URL"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          className="border border-gray-300 p-3 rounded-lg focus:outline-none"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Shorten
        </button>
      </form>
      {shortUrl && (
        <div className="mt-6">
          <p className="text-lg font-semibold mb-2">Shortened URL:</p>
          <a
            href={shortUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline break-all"
          >
            {shortUrl}
          </a>
        </div>
      )}
    </div>
  );
};

export default ShortenLink;
