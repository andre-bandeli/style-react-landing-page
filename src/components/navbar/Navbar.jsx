import React, { Component } from 'react'
import './navbar.scss'

import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'

export default class NavbarReact extends Component {
    render() {
        return (
            <div id='navbar'>
                <Navbar expand="lg">
                    <Container>
                        <Navbar.Brand href="#home"> <img src="/assets/img/youtube.png" width={'40px'} alt="" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='hv' href="#home">Home</Nav.Link>
                            <Nav.Link className='hv' href="#about">Sobre</Nav.Link>
                            <Nav.Link className='hv' href="#about">Categorias</Nav.Link>
                            <Nav.Link className='hv' href="#budget">Receitas</Nav.Link>
                            <NavDropdown className='hv' title="Redes" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Canal do Youtube</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Repositório open source</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">linkedin</NavDropdown.Item>
                            <NavDropdown.Divider />
                            </NavDropdown>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
          )
    }
  
}
