import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">

        {/* OTP Description */}
        <div className="footer-about">
          <h4>OTP Studios</h4>
          <p>Capturing your best moments with passion and precision. From weddings to personal shoots, we make your memories last forever.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h5>Quick Links</h5>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h5>Contact Us</h5>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Email:</strong> contact@otpstudios.com</p>
          <p><strong>Address:</strong> OTP Studios, 2nd Floor, Creative Plaza, Hyderabad, India</p>

          {/* Social Links */}
          <div className="footer-socials">
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><Instagram /></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><Facebook /></a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer"><Youtube /></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} OTP Studios. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
