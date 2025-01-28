

import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './Login.css';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (formData.password !== formData.confirmPassword) {
//       alert("Passwords do not match");
//       return;
//     }

//     try {
//     //   const response = await axios.post("http://localhost:5009/signup", {
//     //     method: "POST",
//     //     headers: { "Content-Type": "application/json" },
//     //     body: JSON.stringify(formData),
//     //   });
//     const response = await axios.post("http://localhost:5009/signup", formData);

//       if (response.ok) {
//         alert("Signup successful");
//         navigate("/login");
//       } else {
//         // const errorMessage = await response.text();
//         alert("errorMessage");
//       }
//     } catch (error) {
//       alert("Error: " + error.message);
//     }
//   };

const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
  
    try {
      const response = await axios.post("https://link-shortening-backend.onrender.com/signup", formData);
  
      if (response.status === 201) { // Success status
        alert("Signup successful");
        navigate("/login");
      } else {
        alert("Signup failed: " + response.data.message);
      }
    } catch (error) {
      alert("Error: " + (error.response?.data || error.message));
    }
  };
  
  return (
    <div className="login-container">
      <div className="left-section">
        <img src="./public/m_image.png" alt="Background" className="background-image" />
      </div>
      <div className="right-section">
        <div className="top-buttons">
          <button className="signup-button">SignUp</button>
          <button className="login-button" onClick={() => navigate("/login")}>Login</button>
        </div>
        <div className="form-container">
          <h2>Join us Today!</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" className="input-field" onChange={handleChange} />
            <input type="email" name="email" placeholder="Email id" className="input-field" onChange={handleChange} />
            <input type="text" name="mobile" placeholder="Mobile no." className="input-field" onChange={handleChange} />
            <input type="password" name="password" placeholder="Password" className="input-field" onChange={handleChange} />
            <input type="password" name="confirmPassword" placeholder="Confirm Password" className="input-field" onChange={handleChange} />
            <button type="submit" className="register-button">Register</button>
          </form>
          <p>
            Already have an account? <a href="/login" onClick={() => navigate("/login")}>Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
