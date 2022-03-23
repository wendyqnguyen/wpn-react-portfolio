import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    
    <footer>
       <Navbar bg="dark" variant="dark" className="justify-content-center">
       <Nav >
         <Nav.Item><Nav.Link href="https://github.com/wendyqnguyen">GitHub</Nav.Link></Nav.Item>
         <Nav.Item><Nav.Link href="https://www.linkedin.com/in/wenguyen/">Linkedin</Nav.Link></Nav.Item>
      </Nav>
      </Navbar>
    </footer>
    
  );
}

export default Footer;