import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../components/Navbar/Navbar';
import Project from '../components/Project/Project';
import image1 from '../images/projects/coffeeshop.png';

const work = props => (
  <section id="work">
    <Navbar />
    <div className="work-content">
      <div className="work-header">
        <h1>Work</h1>
        <Link to={`${process.env.PUBLIC_URL}/projects`}>
          See all projects...
        </Link>
      </div>
      <Project image={image1} title="Coffee Shop" tech="HTML, SCSS, Javascript">
        Laborum et doloribus exercitationem numquam vero rerum. Velit rerum
        ullam et repellat. Ducimus temporibus nesciunt eaque impedit explicabo
        ipsa. Quod et in quasi et. Ducimus enim beatae omnis est. Officia magnam
        impedit molestiae in impedit dolorem.
      </Project>
      <Project
        direction="reverse"
        image={image1}
        title="Coffee Shop"
        tech="HTML, SCSS, Javascript"
      >
        Laborum et doloribus exercitationem numquam vero rerum. Velit rerum
        ullam et repellat. Ducimus temporibus nesciunt eaque impedit explicabo
        ipsa. Quod et in quasi et. Ducimus enim beatae omnis est. Officia magnam
        impedit molestiae in impedit dolorem.
      </Project>
      <Project image={image1} title="Coffee Shop" tech="HTML, SCSS, Javascript">
        Laborum et doloribus exercitationem numquam vero rerum. Velit rerum
        ullam et repellat. Ducimus temporibus nesciunt eaque impedit explicabo
        ipsa. Quod et in quasi et. Ducimus enim beatae omnis est. Officia magnam
        impedit molestiae in impedit dolorem.
      </Project>
    </div>
  </section>
);

export default work;
