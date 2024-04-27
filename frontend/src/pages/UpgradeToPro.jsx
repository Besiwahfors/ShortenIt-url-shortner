import React from "react";

const UpgradeToProPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="max-w-4xl mx-auto px-8 py-12 bg-white shadow-md rounded-lg">
        <h1 className="text-3xl font-semibold text-gray-800 mb-8">Unlock Powerful Features</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      
          <div className="text-center bg-pink-200 text-gray-800 py-8 px-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Detailed Analytics</h2>
            <p className="text-base">Unlock comprehensive analytics to track your link performance.</p>
          </div>
          
          <div className="text-center bg-purple-200 text-gray-800 py-8 px-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">URL Unshortener</h2>
            <p className="text-base">Unshorten to reveal hidden links from any platform before clicking on it.</p>
          </div>
         
          <div className="text-center bg-pink-200 text-gray-800 py-8 px-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Collaboration with Peers</h2>
            <p className="text-base">Share your projects with teammates for seamless collaboration.</p>
          </div>
         
          <div className="text-center bg-purple-200 text-gray-800 py-8 px-6 rounded-lg font-bold">
            <h2 className="text-xl font-semibold mb-4">More Coming Soon</h2>
            <p className="text-base">Upgrade coming soon. Stay tuned!</p>
          </div>
        </div>
       
        <div className="mt-8 text-center text-black">
          <p className="text-lg font-bold">Unlock these and more features by upgrading to Pro!</p>
          <p className="text-lg font-bold">Upgrade coming soon. Stay tuned!</p>
        </div>
      </div>
    </div>
  );
};

export default UpgradeToProPage;
