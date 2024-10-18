import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // const handleLoginClick = () => {
  //   const password = prompt(
  //     "Enter the secret password to access the private page:"
  //   );
  //   if (password === "password") {
  //     // Replace with your desired password
  //     localStorage.setItem("auth", true); // Store the authentication status
  //     navigate("/private"); // Navigate to the secret page
  //     closeMenu(); // Close the menu after navigation
  //   } else {
  //     alert("Incorrect password!");
  //   }
  // };

  return (
    <nav className={isMenuOpen ? "nav-toggle" : ""}>
      <div className="container">
        {/* Main menu items */}
        <div className={`menu ${isMenuOpen ? "nav-open" : ""}`}>
          <ul>
            <li>
              <a href="#home" onClick={closeMenu}>Home</a>
            </li>
            <li>
              <a href="#projects" onClick={closeMenu}>Projects</a>
            </li>
            <li>
              <a href="#plugin" onClick={closeMenu}>Audio Plug-ins</a>
            </li>
            <li>
              <a href="#contact" onClick={closeMenu}>Contact</a>
            </li>
            {/* The login button for the secret page */}
            {/* <li>
              <button
                onClick={() => {
                  handleLoginClick();
                  closeMenu();
                }}
                style={{
                  color: "#ff6347",
                  cursor: "pointer",
                  background: "none",
                  border: "none",
                  padding: "0",
                  margin: "0",
                  fontSize: "inherit",
                  fontFamily: "inherit",
                }}
              >
                Login
              </button>
            </li> */}
          </ul>
          {/* Social media icons */}
          <ul className="social-media">
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                <i className="fab fa-youtube"></i>
              </a>
            </li>
          </ul>
        </div>
        {/* Menu button */}
        <div className="menu-btn" onClick={toggleMenu}>
          <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;