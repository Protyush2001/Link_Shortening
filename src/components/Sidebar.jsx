import React from "react";
import "./Sidebar.css";
import { useNavigate } from "react-router-dom";


const Sidebar = () => {
    const navigate = useNavigate();
    
  return (
    <div className="sidebar">
      <ul className="sidebar-menu">
        <li className="menu-item active" onClick={() => navigate("/dashboard")}><img src="./Icons.png" alt="" /> Dashboard</li>
        <li className="menu-item" onClick={() => navigate("/links")}><img src="./Icons (1).png" alt="" /> Links</li>
        <li className="menu-item" onClick={() => navigate("/analytics")}><img src="./Icons (2).png" alt="" /> Analytics</li>
        <li className="menu-item" onClick={() => navigate("/settings")}><img src="./Icons (3).png" alt="" /> Settings</li>
      </ul>
      <button className="logout"  onClick={() => navigate("/login")} style={{marginTop:"250px",width:"150px",height:"50px",backgroundColor:"red",color:"whitesmoke"}}>Log Out</button>
    </div>
  );
};

export default Sidebar;
