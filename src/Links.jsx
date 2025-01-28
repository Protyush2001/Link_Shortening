



import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Table from "./components/Table";
import "./Links.css";

const Links = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const savedLinks = localStorage.getItem("links");
    if (savedLinks) {
      setData(JSON.parse(savedLinks));
    }
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      localStorage.setItem("links", JSON.stringify(data));
    }
  }, [data]);

  return (
    <div className="links-page">
      <Sidebar />
      <div className="main-content">
        <Navbar data={data} setData={setData} />
        <div className="table-section">
          <Table data={data} setData={setData} />
        </div>
      </div>
    </div>
  );
};

export default Links;


