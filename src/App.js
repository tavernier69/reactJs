import React, { useState, Fragment } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel} from 'react-bootstrap';
import { Link } from "react-router-dom";

import Navigation from './components/Navigation';
import FooterPage from './components/Footer'


function App() {

  return (

    <div className="App">
      <Navigation />
      <div className="container bg-light">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./primate1.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 className="h3-carousel">BEBE PRIMATE</h3>
              <p className="p-carousel">Tout ce qu'il y a de plus beau dans le monde du primate</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./primate2.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3 className="h3-carousel">PRIMATE A TÊTE DE B...</h3>
              <p className="p-carousel">Il aime bien sentir les fruits de pres, primate long et mou</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./primate3.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3 className="h3-carousel">PRIMATE GRINCHEUX</h3>
              <p className="p-carousel">Espece rare de primate qui est grincheux comme Julien</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className="row row-description">
          <div className="col-6">

            <img className="img-description" src="./primate4.jpg"/>
            <img className="img-description" src="./primatemange.jpg"/>
          </div>
          <div className="col-6">
            <div className="row">
              <div className="col-md-12">
                <h1 className="title-description bold">Qu'est ce qu'un primate?</h1>
                <div className="row">
                  <div className="col-md-11 offset-md-1">
                    <p className="text-description">Animal (mammifère) à dentition complète et à main préhensile.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <h1 className="title-description bold">Où vit le primate?</h1>
                <div className="row">
                  <div className="col-md-11 offset-md-1">
                    <p className="text-description">Presque tous sont au moins encore en partie arboricoles. À l'exception de l'homme moderne, qui habite tous les continents, la plupart des primates vivent dans des régions tropicales ou subtropicales d'Amérique, d'Afrique et d'Asie.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <h1 className="title-description bold">Que mange le primate?</h1>
                <div className="row">
                  <div className="col-md-11 offset-md-1">
                    <p className="text-description">Quant à la nourriture animale, de nombreux primates mangent des invertébrés (insectes, araignées, vers, escargots). Pour certains, c'est même la nourriture prépondérante. Ainsi, l'alimentation ďArcíocebus est constituée d'insectes jusqu'à 90%.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <h1 className="title-description bold">Combien y a-t-il d'especes de primate ?</h1>
                <div className="row">
                  <div className="col-md-11 offset-md-1">
                    <p className="text-description">Il existe 182 espèces de primates, dont 147 espèces de singes et 22 espèces de lémuriens. On distingue aussi les lorisiformes et les tarsiers. Les "grands singes" sont anthropomorphes, ce qui signifie que leur forme ressemble à celle de l'homme.</p>
                  </div>
                </div>
              </div>
            </div>
            
            
          </div>
        </div>
      </div>
      <FooterPage/>
    </div>
  );
}

export default App;

