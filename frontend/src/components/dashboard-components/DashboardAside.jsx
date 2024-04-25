import React from "react";
import { FiHome, FiLink, FiGrid, FiBarChart2, FiClipboard, FiUser, FiLogOut, FiStar } from "react-icons/fi";

const DashboardAside = () => {
  return (
    <div className="border-r border-gray-700 py-4 px-6 w-1/5 bg-gray-900 sticky top-0 h-screen overflow-y-auto">
      <nav className="space-y-4">
        <div>
          <h2 className="text-gray-400 text-xs uppercase font-semibold mt-6 mb-4">Navigation</h2>
          <ul className="space-y-2">
            <li>
              <a href="/" className="flex items-center text-gray-300 hover:text-white transition duration-300 mt-2">
                <FiHome className="mr-2" />
                Overview
              </a>
            </li>
            <li>
              <a href="/shortened-links" className="flex items-center text-gray-300 hover:text-white transition duration-300">
                <FiLink className="mr-2" />
                Shortened Links
              </a>
            </li>
            <li>
              <a href="/qr-code" className="flex items-center text-gray-300 hover:text-white transition duration-300">
                <FiGrid className="mr-2" />
                QR Code
              </a>
            </li>
            <li>
              <a href="/analytics" className="flex items-center text-gray-300 hover:text-white transition duration-300">
                <FiBarChart2 className="mr-2" />
                Analytics
              </a>
            </li>
            <li>
              <a href="/support-tickets" className="flex items-center text-gray-300 hover:text-white transition duration-300">
                <FiClipboard className="mr-2" />
                Support Tickets
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-gray-400 text-xs uppercase font-semibold mb-4 mt-8">Account</h2>
          <ul className="space-y-2">
            <li>
              <a href="/profile" className="flex items-center text-gray-300 hover:text-white transition duration-300">
                <FiUser className="mr-2" />
                Profile
              </a>
            </li>
            <li>
              <a href="/login" className="flex items-center text-red-300 hover:text-red-500 transition duration-300">
                <FiLogOut className="mr-2" />
                Logout
              </a>
            </li>
          </ul>
        </div>
        <div >
          <div className="bg-pink-600 mt-40 text-white py-2 px-4 rounded-lg shadow-lg flex items-center justify-center space-x-2 hover:bg-pink-700 transition duration-300 ">
            <FiStar />
            <span >Upgrade to Pro</span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default DashboardAside;
