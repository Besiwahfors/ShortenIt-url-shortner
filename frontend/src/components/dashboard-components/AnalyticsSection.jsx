// AnalyticsSection.jsx
import React from "react";
import { Line } from "react-chartjs-2";

const AnalyticsSection = ({ analyticsData }) => {
  // Sample data for demonstration
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Clicks",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Analytics</h2>
      <div className="bg-gray-200 rounded-lg shadow-lg p-6 mb-4">
        <Line data={data} />
      </div>
    </div>
  );
};

export default AnalyticsSection;
