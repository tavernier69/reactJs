import React, { useState, Fragment } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel} from 'react-bootstrap';
import { Link } from "react-router-dom";

import Navigation from './components/Navigation';
import GestionPrimates from './components/GestionPrimates';
import FooterPage from './components/Footer'


function App() {

  return (

    <div className="App">
      <Navigation />
      <div className="container">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./primate1.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>PRIMATE 1</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./primate2.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>PRIMATE 2</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./primate3.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>PRIMATE 3</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className="row row-description">
          <div className="col-6">
            <img className="img-description" src="./primate1.jpg"/>
          </div>
          <div className="col-6">
            <h1 className="title-description">Description détaillée</h1>
            <p className="text-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas congue lacinia urna vitae blandit. Praesent hendrerit gravida est, a venenatis orci mattis sit amet. Nullam pellentesque sit amet nisi eget maximus. Sed id congue elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt, velit quis pharetra eleifend, odio lacus faucibus urna, eget tincidunt elit neque eget lorem. Duis justo arcu, mollis fringilla urna nec, scelerisque euismod erat. Nunc sollicitudin elit tristique blandit imperdiet. Nulla facilisis arcu nisi, at feugiat nisl luctus non. Etiam et sollicitudin tellus, ac consectetur ligula. Praesent pharetra porttitor semper. Etiam eget faucibus arcu. Curabitur ut tempus leo.

Nunc lobortis nibh sed dui accumsan varius. Etiam vitae eros nec ante molestie viverra. Aenean ultricies, mauris sed tempor rhoncus, metus libero pretium quam, a porttitor massa sapien eu lacus. Fusce gravida scelerisque dolor, at consectetur ante fringilla sit amet. Vestibulum a ligula ut mi rhoncus aliquet. Sed nec velit quis nunc vestibulum facilisis. Aenean finibus, massa et congue consectetur, leo nisl bibendum augue, at vulputate purus ante eget ex. Nunc eget sem tellus. Ut lacinia efficitur varius. Duis ipsum felis, vehicula id eros ac, blandit auctor neque. Etiam vitae risus quis purus placerat lobortis et non sem. Maecenas mollis facilisis felis. Integer dapibus dictum ipsum, vitae viverra odio tristique id. Nam et turpis ut metus blandit interdum in sed ligula. Cras malesuada felis augue, sit amet aliquet lacus pellentesque eu.</p>
          </div>
        </div>
      </div>
      <FooterPage color="cyan"/>
    </div>
  );
}

export default App;

