{/*import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex space-x-6">
            <a href="#" className="hover:text-blue-400"><Instagram size={24} /></a>
            <a href="#" className="hover:text-blue-400"><Facebook size={24} /></a>
            <a href="#" className="hover:text-blue-400"><Twitter size={24} /></a>
            <a href="#" className="hover:text-blue-400"><Linkedin size={24} /></a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/about" className="hover:text-blue-400">About</Link>
            <Link to="/faq" className="hover:text-blue-400">FAQ</Link>
            <Link to="/services" className="hover:text-blue-400">Services</Link>
            <Link to="/daa" className="hover:text-blue-400">DAA</Link>
            <Link to="/alumni-incubatees" className="hover:text-blue-400">Alumni Incubatees</Link>
            <Link to="/more" className="hover:text-blue-400">More</Link>
          </div>
          
          <div className="text-center text-sm text-gray-400">
            <p>© 2024 VNRVJIET Alumni Association. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;*/}

import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';
import './Footer.css'; // Importing the CSS file

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-4">
      <div className="container text-center">
        <div className="social-icons mb-3">
          <a href="#" className="social-link"><Instagram size={24} /></a>
          <a href="#" className="social-link"><Facebook size={24} /></a>
          <a href="#" className="social-link"><Twitter size={24} /></a>
          <a href="#" className="social-link"><Linkedin size={24} /></a>
        </div>
        
        {/*<div className="footer-links mb-3">
          <Link to="/about" className="footer-link">About</Link>
          <Link to="/faq" className="footer-link">FAQ</Link>
          <Link to="/services" className="footer-link">Services</Link>
          <Link to="/daa" className="footer-link">DAA</Link>
          <Link to="/alumni-incubatees" className="footer-link">Alumni Incubatees</Link>
          <Link to="/more" className="footer-link">More</Link>
        </div>*/}
        
        {/*<p className="text-muted small">© 2024 VNRVJIET Alumni Association. All rights reserved.</p>*/}
        <p className='para'>© 2024 VNRVJIET Alumni Association. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;


