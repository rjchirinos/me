import React from 'react';

const header = () => (
  <section className="header">
    <nav className="navbar">
      <h1 className="logo"> </h1>
      <ul className="menu">
        <li className="menu-item">
          <a href="#about">ABOUT</a>
        </li>
        <li className="menu-item">
          <a href="work">WORK</a>
        </li>
        <li className="menu-item">
          <a href="contact">CONTACT</a>
        </li>
      </ul>
    </nav>
    <div className="header-message">
      <h1>I'm a creative freelance web developer doing some awesome work</h1>
    </div>
    <button className="btn btn-blue btn-header">
      See projects <i class="fas fa-arrow-right" />
    </button>
  </section>
);

export default header;
