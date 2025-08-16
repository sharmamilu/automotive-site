import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1 - Logo / About */}
        <div className="footer-section">
          <h2 className="footer-logo">AutoParts</h2>
          <p className="footer-text">
            Delivering reliable automotive parts with quality assurance and
            trusted service across the nation.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div className="footer-section">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Products</h3>
          <ul className="footer-links">
            <li><a href="/products/tires">Tires</a></li>
            <li><a href="/products/batteries">Batteries</a></li>
            <li><a href="/products/oils">Oils</a></li>
            <li><a href="/products/filters">Filters</a></li>
          </ul>
        </div>

        {/* Column 3 - Contact Info */}
        <div className="footer-section">
          <h3 className="footer-heading">Contact Us</h3>
          <p>Email: support@autoparts.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Address: 123 Auto Street, New Delhi, India</p>
        </div>

        {/* Column 4 - Social Media */}
        <div className="footer-section">
          <h3 className="footer-heading">Follow Us</h3>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} AutoParts. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
