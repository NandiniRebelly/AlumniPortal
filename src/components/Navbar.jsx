{/*import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary shadow-lg">
      <div className="container">
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <GraduationCap size={32} className="me-2" />
          <span className="fw-bold">ALUMNI CONNECT</span>
        </Link>

        

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item dropdown">
              <Link to="/about" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                About
              </Link>
              <ul className="dropdown-menu">
                <li><Link to="/about-college" className="dropdown-item">About College</Link></li>
                <li><Link to="/executive-committee" className="dropdown-item">Executive Committee</Link></li>
                <li><Link to="/faculty-coordination" className="dropdown-item">Faculty Coordination</Link></li>
              </ul>
            </li>
            <li className="nav-item"><Link to="/faq" className="nav-link">FAQ</Link></li>
            <li className="nav-item"><Link to="/services" className="nav-link">Services</Link></li>
            <li className="nav-item"><Link to="/daa" className="nav-link">DAA</Link></li>
            <li className="nav-item"><Link to="/alumni-incubatees" className="nav-link">Alumni Incubatees</Link></li>
            <li className="nav-item dropdown">
              <Link to="/more" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                More
              </Link>
              <ul className="dropdown-menu">
                <li><Link to="/events" className="dropdown-item">Events</Link></li>
                <li><Link to="/gallery" className="dropdown-item">Gallery</Link></li>
                <li><Link to="/directory" className="dropdown-item">Directory</Link></li>
                <li><Link to="/achievements" className="dropdown-item">Achievements</Link></li>
              </ul>
            </li>
          </ul>

          <div className="d-flex gap-2">
            <button className="btn btn-light">Register</button>
            <button className="btn btn-warning">Login</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;*/}



import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary shadow-lg">
      <div className="container">
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <GraduationCap size={32} className="me-2" />
          <span className="fw-bold">ALUMNI CONNECT</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
            <li className="nav-item"><Link to="/faq" className="nav-link">FAQ</Link></li>
            <li className="nav-item"><Link to="/services" className="nav-link">Services</Link></li>
            <li className="nav-item"><Link to="/daa" className="nav-link">DAA</Link></li>
            <li className="nav-item"><Link to="/alumni-incubatees" className="nav-link">Alumni Incubatees</Link></li>
            <li className="nav-item"><Link to="/more" className="nav-link">More</Link></li>
            
          </ul>

          <div className="d-flex gap-2">
            <Link to="/register" className="btn btn-light">Register</Link>
            <Link to="/login" className="btn btn-warning">Login</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;





