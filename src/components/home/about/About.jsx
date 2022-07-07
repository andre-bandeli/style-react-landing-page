import React from 'react'
import './about.scss'

import { Container, Row, Col } from 'react-grid-system';


export default function About() {
  return (
    <div id='about'>

        <div className="col-12">
            <div className="text-box">
              <h3>SOBRE O SITE</h3>
              <h2>REPOSITÓRIO DE RECEITAS DA PAOLLA</h2>
              <div className="container">
                <div className="col-4">
                    <img src="/assets/icons/delivery.png" alt="" />
                    <h4>RECEITAS LISTADAS</h4>
                </div>
                <div className="col-4">
                    <img src="/assets/icons/price.png" alt="" />
                    <h4>Melhores Preços</h4>
                </div>
                <div className="col-4">
                    <img src="/assets/icons/forest.png" alt="" />
                    <h4>UM SITE PARA ESTUDOS EM REACT E JAVA</h4>
                </div>
              </div>
            </div>
        </div>

        <div className="col">
              <h3>CATEGORIAS</h3>
              <h2>Principais Categorias</h2>

              <div className="container">
              <Container>
                <Row>
                  <Col sm={3} className="Col">
                    <img src="/assets/img/massas.png" alt="" width={'230px'} />
                    <h3>Receitas vegetarianas</h3>
                  </Col>
                  <Col sm={3}  className="Col">
                      <img src="/assets/img/vegan.png" alt="" width={'230px'} />
                      <h3>Massas e doces</h3>
                  </Col>
                  <Col sm={3}  className="Col">
                     <img src="/assets/img/doces.png" alt="" width={'230px'} />

                     <h3>Doces e Bolos</h3>
                  </Col>
                </Row>
              </Container>
              </div>
        </div>
    </div>
  )
}
