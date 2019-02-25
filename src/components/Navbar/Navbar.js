import React from 'react';
import { NavLink } from 'react-router-dom';

const navbar = props => (
  <nav className={`navbar ${props.text}`}>
    <h1 className="logo">
      <NavLink activeClassName="active" to={process.env.PUBLIC_URL}>
        RAUL
      </NavLink>
    </h1>
    <ul className="menu">
      <li className="menu-item">
        <NavLink
          activeClassName="active"
          to={`${process.env.PUBLIC_URL}/about`}
        >
          ABOUT
        </NavLink>
      </li>
      <li className="menu-item">
        <NavLink activeClassName="active" to={`${process.env.PUBLIC_URL}/work`}>
          WORK
        </NavLink>
      </li>
      <li className="menu-item">
        <NavLink
          activeClassName="active"
          to={`${process.env.PUBLIC_URL}/contact`}
        >
          CONTACT
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default navbar;
