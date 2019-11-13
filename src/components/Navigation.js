import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

class Navigation extends React.Component {
  render() {
    return (
      <header className="App-header">
        <Navbar bg="dark" expand="lg">
          <Navbar.Brand href="#home">Primate Land</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Accueil</Nav.Link>
              <Nav.Link href="/gestion">Gestion des primates</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    )
  }
}

export default Navigation;
