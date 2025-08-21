import React, { useState, useEffect, useRef } from "react";
import { FiMenu, FiX, FiShoppingCart, FiUser, FiSearch } from "react-icons/fi";
import { FaCarAlt } from "react-icons/fa";
import "../styles/navbar.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null); // Reference to the mobile menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "visible" : "hidden";
  };

  // Function to check if the link is active
  const isActive = (path) => location.pathname === path;

  // Close the mobile menu if clicked outside
  const handleOutsideClick = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setIsOpen(false); // Close the menu
      document.body.style.overflow = "visible"; // Allow scrolling again
    }
  };

  // Adding event listener on mount and cleaning up on unmount
  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo with icon */}
        <div className="logo-container">
          {/* <FaCarAlt className="logo-icon" /> */}
          <img src="/images/logo.jpeg" alt="Logo" className="logo-icon" />
          <h1 className="logo">
            BAVARIA<span className="logo-highlight">CENTER</span>
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
            <Link to="/" className={`nav-link ${isActive("/") ? "active" : ""}`}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className={`nav-link ${isActive("/products") ? "active" : ""}`}>
              Products
            </Link>
          </li>
          <li>
            <Link to="/about" className={`nav-link ${isActive("/about") ? "active" : ""}`}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className={`nav-link ${isActive("/contact") ? "active" : ""}`}>
              Contact
            </Link>
          </li>
          <li className="nav-icons">
            <Link to="/account" className={`icon-link ${isActive("/account") ? "active" : ""}`} aria-label="Account">
              <FiUser className="nav-icon" />
            </Link>
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

      {/* Mobile Menu - This is wrapped in the ref to detect outside clicks */}
      <div ref={menuRef} className={`mobile-menu ${isOpen ? "active" : ""}`}>
        {/* Your mobile menu content goes here */}
      </div>
    </nav>
  );
};

export default Navbar;
