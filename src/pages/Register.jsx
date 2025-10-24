

{/*import React from 'react';
import './Register.css'// Import the CSS file

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    alert('Registration Successful!');
  };
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="text-center">Register</h2>
        <form onSubmit={handleRegister}>
          <div className="input-group">
            <label>Username</label>
            <input type="text" placeholder="Enter username" required />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter email" required />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter password" required />
          </div>
          <button type="submit" className="btn-submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;*/}


import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Show success message
    alert('Registration successful!');

    // Reset form
    setFormData({
      username: '',
      email: '',
      password: ''
    });
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="text-center">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter username"
              required
            />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
              required
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              required
            />
          </div>
          <button type="submit" className="btn-submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
