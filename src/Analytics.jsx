


import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import AnalyticsTable from "./components/AnalyticsTable";
import "./Analytics.css";

const Analytics = () => {
  const [data, setData] = useState([]);

  // Load initial data from localStorage
  useEffect(() => {
    const savedData = localStorage.getItem("analyticsData");
    if (savedData) {
      setData(JSON.parse(savedData));
    }
  }, []);

  // Listen for updates in localStorage to dynamically update analytics data
  useEffect(() => {
    const handleStorageUpdate = () => {
      const updatedData = JSON.parse(localStorage.getItem("analyticsData")) || [];
      setData(updatedData);
    };

    window.addEventListener("storage", handleStorageUpdate);

    return () => {
      window.removeEventListener("storage", handleStorageUpdate);
    };
  }, []);

  return (
    <div className="analytics-page">
      <Navbar />
      <div className="analytics-content">
        <Sidebar />
        <div className="analytics-table-wrapper">
          <AnalyticsTable data={data} />
        </div>
      </div>
    </div>
  );
};

export default Analytics;

