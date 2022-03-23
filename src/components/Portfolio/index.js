import React, { useState } from 'react';
import Project from '../Project';
import { Container, CardGroup } from 'react-bootstrap/';

function Portfolio() {
  const [projects] = useState([
    {
      title: 'Cache',
      imageSrc: 'cache.png',
      github: 'https://github.com/sivanagar/garage-finder',
      link: 'https://cache-project.herokuapp.com/',
    },
    {
      title: 'nourishMe',
      imageSrc: 'nourishMe.png',
      github: 'https://github.com/ellysecarter/nourish-me',
      link: 'https://ellysecarter.github.io/nourish-me/index.html',
    },
    {
      title: 'ConnectUs',
      imageSrc: 'ConnectUs.png',
      github: 'https://github.com/asecord92/convectus',
      link: 'https://bit.ly/3JMI8DS',
    },
  ]);

  return (
    <Container>
      <h2 className="heading">Portfolio</h2>
      <CardGroup>
        {projects.map((project) => (
          <Project currentProject={project} key={project.title}></Project>
        ))}
      </CardGroup>
    </Container>
  );
}

export default Portfolio;