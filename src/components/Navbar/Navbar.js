import React from 'react';
import { NavLink } from 'react-router-dom';

const navbar = props => (
  <nav className={`navbar ${props.text}`}>
    <ul className="menu">
      <li className="menu-item">
        <NavLink to="/about">ABOUT</NavLink>
      </li>
      <li className="menu-item">
        <NavLink to="/work">WORK</NavLink>
      </li>
      <li className="menu-item">
        <NavLink to="/contact">CONTACT</NavLink>
      </li>
    </ul>
  </nav>
);

export default navbar;
