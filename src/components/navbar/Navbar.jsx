import React, { Component } from 'react'
import './navbar.scss'

import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'

export default class NavbarReact extends Component {
    render() {
        return (
            <div id='navbar'>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Sobre Nós</Nav.Link>
                            <Nav.Link href="#link">Serviços</Nav.Link>
                            <Nav.Link href="#link">Orçamentos</Nav.Link>
                            <Nav.Link href="#link">Projetos</Nav.Link>
                            <Nav.Link href="#link">Contato</Nav.Link>
                            <NavDropdown title="Redes" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Whatsapp</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Facebook action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Instagram</NavDropdown.Item>
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
