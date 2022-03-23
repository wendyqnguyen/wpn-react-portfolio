import React, { useEffect } from "react";
import Nav from "react-bootstrap/Nav";

function Menu(props) {
  const { setCurrentNav, currentNav, navSelected, setNavSelected } = props;

  useEffect(() => {
    document.title = navSelected;
  }, [navSelected]);

  return (
    <Nav>
      <Nav.Item>
        <Nav.Link onClick={() => setNavSelected("About")}>About Me</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={() => setNavSelected("Portfolio")}>
          Portfolio
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={() => setNavSelected("Contact")}>Contact</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={() => setNavSelected("Resume")}>Resume</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Menu;