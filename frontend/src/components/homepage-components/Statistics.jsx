import React from "react";
import { motion } from "framer-motion";
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown } from "react-icons/fa";
const Statistics = () => {
  const linkClicks = {
    daily: 124,
    weekly: 780,
    monthly: 3200,
    yearly: 45000,
    total: 120000,
  };

  const changeInClicks = {
    daily: linkClicks.daily - linkClicks.weekly,
    weekly: linkClicks.weekly - linkClicks.monthly,
    monthly: linkClicks.monthly - linkClicks.yearly,
    yearly: linkClicks.yearly - linkClicks.total,
  };

  return (
    <div className="bg-gray-100 py-16 px-8">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-800 relative inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Access Link Click Statistics
          <motion.div
            className="absolute bottom-0 left-1/2 bg-blue-500 h-1 w-1/3 transform -translate-x-1/2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.2 }}
          />
        </motion.h2>
        <div className="flex justify-center items-center mb-8">
          <motion.div
            className="h-1 bg-blue-500 w-16 mr-4"
            initial={{ width: 0 }}
            animate={{ width: "30%" }}
            transition={{ duration: 1, delay: 0.4 }}
          />
          <p className="text-lg font-semibold">Today</p>
        </div>
        <div className="flex justify-center items-center mb-4">
          {Object.keys(linkClicks).map((period) => (
            <motion.div
              key={period}
              className="text-center mx-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <p className="text-lg font-semibold">
                {period.charAt(0).toUpperCase() + period.slice(1)}
              </p>
              <p className="text-3xl font-bold mb-2">{linkClicks[period]}</p>
              <div className="flex items-center justify-center">
                {changeInClicks[period] > 0 ? (
                  <FaRegArrowAltCircleUp className="text-green-500 mr-2" />
                ) : (
                  <FaRegArrowAltCircleDown className="text-red-500 mr-2" />
                )}
                <p
                  className={`text-sm ${
                    changeInClicks[period] > 0
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {Math.abs(changeInClicks[period])}{" "}
                  {changeInClicks[period] > 0 ? "Increase" : "Increase"}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistics;
