import React from 'react';

import Navbar from '../components/Navbar/Navbar';
import AboutMessage from '../components/AboutMessage/AboutMessage';

const about = props => (
  <section id="about">
    <Navbar />
    <AboutMessage />
  </section>
);

export default about;
