import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Header.css';

const Header = () => (
  <header>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/login">Login</Link>
    </nav>
  </header>
);

export default Header;
