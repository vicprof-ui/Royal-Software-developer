import React from 'react';
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3>ROYAL Software developer</h3>
          <p>&copy; {new Date().getFullYear()} Royal Software Developer. All rights reserved.</p>
        </div>

        <div className="footer-center">
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-right">
          <p>Follow us:</p>
          <div className="social-icons">
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
