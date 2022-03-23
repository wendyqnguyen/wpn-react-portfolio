
   
import React from "react";
import { Card, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import githubIcon from "../../assets/icons/github-brands.svg";

function Project(props) {
  const { currentProject } = props;
  return (
    <Col md="4">
      <Card className="m-3">
        <Card.Header className="project cardheader d-flex justify-content-between">
          <Card.Title className="m-1">{currentProject.title}</Card.Title>
          <a href={currentProject.github}>
            <Image className="icon" src={githubIcon} />
          </a>
        </Card.Header>
        <a href={currentProject.link}>
          <Card.Img
            src={require(`../../assets/project-images/${currentProject.imageSrc}`)}
            alt={currentProject.title}
          />
        </a>
      </Card>
    </Col>
  );
}

export default Project;