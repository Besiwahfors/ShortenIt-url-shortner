
import React from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const ShortenLinkSection = () => {
  return (
    <div className="bg-pink-600 text-white py-2 px-4 rounded-lg shadow-lg mb-8 w-48 text-center mx-auto">
      <Link
        to="/shorten-link"
        className="flex items-center justify-center space-x-2"
      >
        <FaPlus />
        <span className="font-semibold">Shorten New Link</span>
      </Link>
    </div>
  );
};

export default ShortenLinkSection;
