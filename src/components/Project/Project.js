import React from 'react';

const project = props => (
  <div className={`project-container ${props.direction}`}>
    <img src={props.image} alt="project" />
    <div className="project-content">
      <h1>{props.title}</h1>
      <h3>
        <li>{props.tech}</li>
      </h3>
      <p>{props.children}</p>
    </div>
  </div>
);

export default project;
