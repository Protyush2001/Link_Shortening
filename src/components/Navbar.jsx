



import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Navbar.css";
import NewLinkPopup from "./NewLinkPopup";
import { useNavigate } from "react-router-dom";


const Navbar = ({ setData }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [user, setUser] = useState(null);
   const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        console.warn("No token found in localStorage");
        return;
      }

      try {
        const response = await axios.get("http://localhost:5009/api/user", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.status === 200) {
          const userData = response.data;
          console.log("User data fetched successfully:", userData);
          setUser(userData);
        } else {
          console.error("Failed to fetch user data:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching user data:", error.response || error.message);
      }
    };

    fetchUser();
  }, []);

  const getGreeting = () => {
    const hours = new Date().getHours();
    if (hours >= 5 && hours < 12) return "Good Morning";
    if (hours >= 12 && hours < 17) return "Good Afternoon";
    if (hours >= 17 && hours < 21) return "Good Evening";
    return "Good Night";
  };

  const today = new Date();
  const options = { weekday: "short", month: "short", day: "numeric" };
  const formattedDate = today.toLocaleDateString(undefined, options);

  return (
    <>
      <div className="navbar">
        <div className="navbar-left">
          <div className="logo"><img src="./download 2.png" alt="" /></div>
        </div>
        <div className="navbar-center">
          <p className="greeting">
            🌟 {getGreeting()}, {user ? user.name.split(" ")[0] : "Loading..."}
          </p>
          <p className="date">{formattedDate}</p>
        </div>
        <div className="navbar-right">
          <button className="create-button" onClick={() => setShowPopup(true)}>
            + Create new
          </button>
          <input
            type="text"
            placeholder="Search by remarks"
            className="search-input"
          />
          <div className="user-avatar" onClick={() => navigate("/settings")}>
            {user
              ? user.name
                  .split(" ")
                  .map((n) => n[0].toUpperCase())
                  .join("")
              : "??"}
          </div>
        </div>
      </div>
      {showPopup && (
        <NewLinkPopup onClose={() => setShowPopup(false)} setData={setData} />
      )}
    </>
  );
};

export default Navbar;
