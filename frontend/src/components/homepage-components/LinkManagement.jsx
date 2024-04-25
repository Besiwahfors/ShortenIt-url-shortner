import React from "react";
import { motion } from "framer-motion";
import { FaQrcode } from "react-icons/fa";

const LinkManagementTeaser = () => {
  const links = [
    {
      id: 1,
      longUrl: "https://example.com/very-long-url-one",
      shortUrl: "short.link/xyz123",
      name: "Project 1: Portfolio",
      color: "from-pink-500 to-pink-700",
    },
    {
      id: 2,
      longUrl: "https://example.com/another-very-very-very-long-url-two",
      shortUrl: "short.link/abc456",
      name: "Project 2 : Blog",
      color: "from-purple-500 to-purple-700",
    },
    {
      id: 3,
      longUrl: "https://example.com/and-yet-another-very-long-url-three",
      shortUrl: "short.link/123xyz",
      name: "Project 3 : My Facebook Link",
      color: "from-gray-800 to-gray-900",
    },
  ];

  return (
    <div className="bg-gray-100 py-16 px-8">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Simplify Your Links
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          {links.map((link) => (
            <motion.div
              key={link.id}
              className={`rounded-lg shadow-md p-6 text-white bg-gradient-to-r ${link.color}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="mb-4">
                <p className="text-xl font-semibold mb-2">{link.name}</p>
                <p className="text-sm">{link.description}</p>
              </div>
              <div className="mb-4">
                <p className="text-sm font-semibold mb-1">Long URL:</p>
                <p className="text-sm">{link.longUrl}</p>
              </div>
              <div className="mb-2">
                <p className="text-sm font-semibold mb-1">Shortened URL:</p>
                <p className="text-sm">{link.shortUrl}</p>
              </div>
              <div className="flex justify-center items-center mt-4">
                <FaQrcode className="text-white mr-2" size={48} />
                <p className="text-sm">Get a QR Code</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.button
        href="/register"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-pink-600 text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-pink-600 transition duration-300 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          Get Started
        </motion.button>
      </div>
    </div>
  );
};

export default LinkManagementTeaser;
