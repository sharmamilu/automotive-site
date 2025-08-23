import React, { useState, useEffect, useRef } from "react";
import {
  FiMenu,
  FiX,
  FiShoppingCart,
  FiUser,
  FiSearch,
  FiLock,
  FiMail,
} from "react-icons/fi";
import { FaCarAlt } from "react-icons/fa";
import "../styles/navbar.css";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const [loginError, setLoginError] = useState("");
  const location = useLocation();
  const menuRef = useRef(null);
  const loginRef = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "visible" : "hidden";
  };

  const openLogin = () => {
    const [isLoggedIn] = [localStorage.getItem("isLoggedIn")];
    if (isLoggedIn) {
      navigate("/upload");
      return;
    }
    setIsLoginOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLogin = () => {
    setIsLoginOpen(false);
    setLoginData({ username: "", password: "" });
    setLoginError("");
    document.body.style.overflow = "visible";
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setLoginError("");
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!loginData.username.trim() || !loginData.password.trim()) {
      setLoginError("Please enter both username and password");
      return;
    }

    // Here you would typically make an API call to your backend
    // For demo purposes, we'll use a simple check
    //want to create a list of login and password
    const validLogins = [
      { username: "admin", password: "admin123" },
      { username: "info@bavariaceneter.com", password: "info123" },
      { username: "Aftab@bavariacenter.com", password: "Aftab123" },
    ];

    const isValidLogin = validLogins.some(
      (login) =>
        login.username === loginData.username &&
        login.password === loginData.password
    );

    if (isValidLogin) {
      // Successful login
      localStorage.setItem("isLoggedIn", "true");
      closeLogin();
      navigate("/upload");
    } else {
      setLoginError("Invalid username or password");
    }
  };

  const isActive = (path) => location.pathname === path;

  const handleOutsideClick = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setIsOpen(false);
      document.body.style.overflow = "visible";
    }

    if (
      loginRef.current &&
      !loginRef.current.contains(e.target) &&
      isLoginOpen
    ) {
      closeLogin();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isLoginOpen]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo with icon */}
        <div className="logo-container" onClick={() => navigate("/")}>
          <img src="/images/logo.jpeg" alt="Logo" className="logo-icon" />
          <h1 className="logo">
            BAVARIA<span className="logo-highlight">CENTER</span>
          </h1>
        </div>

        {/* Search Bar - Desktop */}
        {/* <form
          onSubmit={(e) => {
            e.preventDefault();
            if (inputValue.trim()) {
              navigate(
                `/products?search=${encodeURIComponent(inputValue.trim())}`
              );
            }
          }}
          className="search-container"
        >
          <input
            type="text"
            placeholder="Search parts..."
            className="search-input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit" className="search-button">
            <FiSearch className="search-icon-nav" />
          </button>
        </form> */}

        {/* Desktop Links */}
        <ul ref={menuRef} className={`nav-links ${isOpen ? "active" : ""}`}>
          <li>
            <Link
              to="/"
              className={`nav-link ${isActive("/") ? "active" : ""}`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className={`nav-link ${isActive("/products") ? "active" : ""}`}
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`nav-link ${isActive("/about") ? "active" : ""}`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`nav-link ${isActive("/contact") ? "active" : ""}`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/documents"
              className={`nav-link ${isActive("/documents") ? "active" : ""}`}
              onClick={() => setIsOpen(false)}
            >
              View Documents  
            </Link>
          </li>
          <li className="nav-icons">
            <button
              onClick={openLogin}
              className="icon-link admin-login-btn"
              aria-label="Admin Login"
            >
              <FiUser className="nav-icon" />
            </button>
          </li>
        </ul>

        {/* Mobile Icons */}
        <div className="mobile-icons">
          <button
            onClick={openLogin}
            className="icon-link"
            aria-label="Admin Login"
          >
            <FiUser className="nav-icon" />
          </button>
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
      {/* <div className="mobile-search-container">
        <input
          type="text"
          placeholder="Search parts..."
          className="search-input"
        />
        <button className="search-button">
          <FiSearch className="search-icon-nav" />
        </button>
      </div> */}

      {/* Admin Login Popup */}
      {isLoginOpen && (
        <div className="login-overlay">
          <div ref={loginRef} className="login-popup">
            <button className="login-close" onClick={closeLogin}>
              <FiX />
            </button>

            <div className="login-header">
              <FiLock className="login-icon" />
              <h2>Admin Login</h2>
              <p>Enter your credentials to access the admin panel</p>
            </div>

            <form onSubmit={handleLoginSubmit} className="login-form">
              <div className="form-group">
                {/* <FiMail className="input-icon" /> */}
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={loginData.username}
                  onChange={handleLoginChange}
                  className="login-input"
                />
              </div>

              <div className="form-group">
                {/* <FiLock className="input-icon" /> */}
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  className="login-input"
                />
              </div>

              {loginError && <div className="login-error">{loginError}</div>}

              <button type="submit" className="login-submit-btn">
                Sign In
              </button>
            </form>

            {/* <div className="login-footer">
              <p>Send Login Credentials</p>
            </div> */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
