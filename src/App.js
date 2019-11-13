import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, NavDropdown, Carousel} from 'react-bootstrap';
import ListePrimateTable from './components/ListePrimateTable';
import NewPrimateTable from './components/NewPrimateTable';
import EditPrimateTable from './components/EditPrimateTable';

function App() {


  const NewPrimate = primate => {
    primate.id = primates.length + 1
    setPrimates([...primates, primate])
  }

  const deletePrimate = id => {
    setPrimates(primates.filter(primate => primate.id !== id))
  }

  const primatesData = [
    { id: 1, name: 'Tania'},
    { id: 2, name: 'Craig'},
    { id: 3, name: 'Ben'},
  ]

  const [primates, setPrimates] = useState(primatesData)

  const [editing, setEditing] = useState(false)
  const initialFormState = { id: null, name: ''}
  const [currentPrimate, setCurrentPrimate] = useState(initialFormState)

  const editRow = primate => {
    setEditing(true)

    setCurrentPrimate({ id: primate.id, name: primate.name})
  }

  const updatePrimate = (id, updatedPrimate) => {
    setEditing(false)

    setPrimates(primates.map(primate => (primate.id === id ? updatePrimate : primate)))
  }

  return (

    <div className="App">
    <ListePrimateTable primates={primates} editRow={editRow} deletePrimate={deletePrimate} />
      <header className="App-header">
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand href="#home">Primate Land</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Accueil</Nav.Link>
            <Nav.Link href="#link">Ajouter un primate</Nav.Link>
            <Nav.Link href="#link">Liste des primates</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=First slide&bg=373940"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      </header>
    </div>
  );
}

export default App;

