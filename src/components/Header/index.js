import React  from "react";
import Menu from '../Menu';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';

function Header(props) {
  const {
    setCurrentNav,
    currentNav,
    navSelected,
    setNavSelected
  } = props;


  return (
    <Navbar>
      <Container>
      <Navbar.Brand onClick={() => setNavSelected('home')}>
        Wendy Nguyen
        
        </Navbar.Brand>
      <Menu
        setCurrentNav={setCurrentNav}
        currentNav={currentNav}
        navSelected={navSelected}
        setNavSelected={setNavSelected}
      ></Menu>
      </Container>
    </Navbar>
  )
};

export default Header;