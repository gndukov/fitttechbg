// components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p>&copy; 2024 Our Website</p>
        <ul className="footer-links">
          <li>
            <a href="#">Terms of Service</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
        </ul>
        <div className="social-media-links">
          <a href="#" className="social-media-link">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="social-media-link">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="social-media-link">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="social-media-link">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;