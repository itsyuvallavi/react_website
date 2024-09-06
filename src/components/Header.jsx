import React from 'react';
import NavBar from './NavBar';
import About from './About.jsx'
import '../styles/header.css'

const Header = () => {
    return (
      <header id="home">
        <NavBar />
        <About />

      </header>
    );
  };
  
  export default Header;