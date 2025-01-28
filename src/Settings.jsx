


import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import ProfileSettings from "./ProfileSettings";
import "./Settings.css";

const Settings = () => {
  const handleDeleteProfile = () => {
    // Confirm deletion
    const confirmDelete = window.confirm(
      "Are you sure you want to delete your profile? This action cannot be undone."
    );

    if (confirmDelete) {
      // Clear all stored data for the user
      localStorage.removeItem("analyticsData"); // Delete analytics data
      localStorage.removeItem("links"); // Delete created links
      localStorage.removeItem("userData"); // Delete user profile or settings (if stored)

      // Additional cleanup if needed, such as cookies or session data
      alert("Profile and all associated data have been deleted.");
      // Redirect user to the login or home page
      window.location.href = "/"; // Adjust path as needed
    }
  };

  return (
    <div className="settings-page">
      <Navbar />
      <div className="settings-container">
        <Sidebar />
        <div className="settings-content">
          <ProfileSettings onDeleteProfile={handleDeleteProfile} />
        </div>
      </div>
    </div>
  );
};

export default Settings;

