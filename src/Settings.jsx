


// import React from "react";
// import Sidebar from "./components/Sidebar";
// import Navbar from "./components/Navbar";
// import ProfileSettings from "./ProfileSettings";
// import "./Settings.css";

// const Settings = () => {
//   const handleDeleteProfile = () => {
//     // Confirm deletion
//     const confirmDelete = window.confirm(
//       "Are you sure you want to delete your profile? This action cannot be undone."
//     );

//     if (confirmDelete) {
//       // Clear all stored data for the user
//       localStorage.removeItem("analyticsData"); // Delete analytics data
//       localStorage.removeItem("links"); // Delete created links
//       localStorage.removeItem("userData"); // Delete user profile or settings (if stored)

//       // Additional cleanup if needed, such as cookies or session data
//       alert("Profile and all associated data have been deleted.");
//       // Redirect user to the login or home page
//       window.location.href = "/"; // Adjust path as needed
//     }
//   };

//   return (
//     <div className="settings-page">
//       <Navbar />
//       <div className="settings-container">
//         <Sidebar />
//         <div className="settings-content">
//           <ProfileSettings onDeleteProfile={handleDeleteProfile} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Settings;



import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import ProfileSettings from "./ProfileSettings";
import axios from "axios";
import "./Settings.css";

const Settings = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      const token = localStorage.getItem("token");
      
      if (token) {
        try {
          const response = await axios.get("http://localhost:5009/api/user", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          
          setUserData(response.data);
          setLoading(false);
        } catch (err) {
          setError("Failed to fetch user details. Please try again later.");
          setLoading(false);
        }
      } else {
        setError("No token found. Please log in.");
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, []);

  const handleDeleteProfile = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete your profile? This action cannot be undone."
    );

    if (confirmDelete) {
      localStorage.removeItem("token");
      localStorage.removeItem("analyticsData");
      localStorage.removeItem("links");
      localStorage.removeItem("userData");
      alert("Profile and all associated data have been deleted.");
      window.location.href = "/login";
    }
  };

  if (loading) {
    return <p>Loading user details...</p>;
  }

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  return (
    <div className="settings-page">
      <Navbar />
      <div className="settings-container">
        <Sidebar />
        <div className="settings-content">
          {userData ? (
            <ProfileSettings userData={userData} onDeleteProfile={handleDeleteProfile} />
          ) : (
            <p>No user data found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;


