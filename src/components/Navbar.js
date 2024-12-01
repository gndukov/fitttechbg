// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>   
        <li><Link to="/calendar">Calendar</Link></li>
        <li><Link to="/goals">Goals</Link></li>
        <li><Link to="/challenges">Challenges</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;