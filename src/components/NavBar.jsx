import React, { useState } from "react";
import { FiMenu, FiX, FiShoppingCart, FiUser, FiSearch } from "react-icons/fi";
import { FaCarAlt } from "react-icons/fa";
import "../styles/navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    console.log("changing");
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "visible" : "hidden";
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo with icon */}
        <div className="logo-container">
          <FaCarAlt className="logo-icon" />
          <h1 className="logo">
            AutoParts<span className="logo-highlight">Pro</span>
          </h1>
        </div>

        {/* Search Bar - Desktop */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Search parts..."
            className="search-input"
          />
          <button className="search-button">
            <FiSearch className="search-icon" />
          </button>
        </div>

        {/* Desktop Links */}
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li>
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="/products" className="nav-link">
              Products
            </a>
          </li>
          <li>
            <a href="/about" className="nav-link">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="nav-link">
              Contact
            </a>
          </li>
          <li className="nav-icons">
            <a href="/account" className="icon-link" aria-label="Account">
              <FiUser className="nav-icon" />
            </a>
          </li>
        </ul>

        {/* Mobile Icons */}
        <div className="mobile-icons">
          <div className="hamburger" onClick={toggleMenu}>
            {isOpen ? (
              <FiX className="menu-icon" />
            ) : (
              <FiMenu className="menu-icon" />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Search - Only appears on mobile */}
      <div className="mobile-search-container">
        <input
          type="text"
          placeholder="Search parts..."
          className="search-input"
        />
        <button className="search-button">
          <FiSearch className="search-icon" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
