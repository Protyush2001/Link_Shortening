



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Signup.css";

const Login = ({ clearUserData }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://link-shortening-backend.onrender.com/login", formData, {
        headers: { "Content-Type": "application/json" },
      });

      const token = response.data.token;
      clearUserData(); // Clear previous user data
      localStorage.setItem("token", token);
      alert("Login successful");
      navigate("/dashboard");
    } catch (error) {
      if (error.response) {
        alert(`Error: ${error.response.data}`);
      } else {
        alert(`Error: ${error.message}`);
      }
    }
  };

  return (
    <div className="signup-container">
      <div className="left-section">
        <img src="./public/m_image.png" alt="Background" className="background-image" />
      </div>
      <div className="right-section">
        <div className="top-buttons">
          <button className="signup-button" onClick={() => navigate("/")}>
            SignUp
          </button>
          <button className="login-button">Login</button>
        </div>
        <div className="form-container">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email id"
              className="input-field"
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input-field"
              onChange={handleChange}
              required
            />
            <button type="submit" className="register-button">
              Login
            </button>
          </form>
          <p>
            Don’t have an account?{" "}
            <a href="#" onClick={() => navigate("/")}>
              SignUp
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
