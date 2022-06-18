import React from 'react'
import './about.scss'

import { Container, Row, Col } from 'react-grid-system';


export default function About() {
  return (
    <div id='about'>

        <div className="col-12">
            <div className="text-box">
              <h2>Stylish Portfolio is the perfect theme for your next project!</h2>
              <h3>This theme features a flexible, UX friendly sidebar menu and stock photos from our friends at Unsplash !</h3>
              <div className="container">
                <div className="col-4">
                    <img src="/assets/icons/delivery.png" alt="" />
                    <h4>Delivery Free</h4>
                </div>
                <div className="col-4">
                    <img src="/assets/icons/price.png" alt="" />
                    <h4>Melhores Preços</h4>
                </div>
                <div className="col-4">
                    <img src="/assets/icons/forest.png" alt="" />
                    <h4>Responsabilidade Ambiental</h4>
                </div>
              </div>
            </div>
        </div>

        <div className="col">
              <h3>SERVICES</h3>
              <h2>Nossos Serviços</h2>

              <div className="container">
              <Container>
                <Row>
                  <Col sm={3} className="Col">
                    <img src="/assets/icons/vaso.png" alt="" width={'130px'} />
                    <h3>Lorem ipsum dolor sitame.</h3>
                  </Col>
                  <Col sm={3}  className="Col">
                      <img src="/assets/icons/terra.png" alt="" width={'130px'} />
                      <h3>Lorem ipsum dolor sitame.</h3>
                  </Col>
                  <Col sm={3}  className="Col">
                     <img src="/assets/icons/flor.png" alt="" width={'130px'} />

                     <h3>Lorem ipsum dolor sitame.</h3>
                  </Col>
                </Row>
              </Container>
              </div>
        </div>
    </div>
  )
}
