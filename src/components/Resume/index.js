import React from "react";
import { Container, Button } from "react-bootstrap";

function Resume() {
  const OpenResume = () => {
    window.open("/WendyNguyen.pdf", "_blank");
  };

  return (
    <Container>
      <h1 className="heading">Resume</h1>
      <p>
        To be added....
      </p>
      <Button onClick={OpenResume}>Download Resume</Button>
    </Container>
  );
}

export default Resume;
