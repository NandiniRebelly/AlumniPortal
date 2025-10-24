

{/*import React from 'react';
import './Login.css'; // Import the CSS file

const Login = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="text-center">Login</h2>
        <form>
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter email" required />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter password" required />
          </div>
          <button type="submit" className="btn-submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;*/}

import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
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
    alert('Login successful!');

    // Reset form
    setFormData({
      email: '',
      password: ''
    });
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="text-center">Login</h2>
        <form onSubmit={handleSubmit}>
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
          <button type="submit" className="btn-submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;


