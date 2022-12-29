import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className="navbar" >
 <Navbar >
      <Container>
        <Navbar.Brand href="#home">Popcorn Time</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Favorites</Nav.Link>
            <NavDropdown title="Genres" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Horror</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                comedy
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Fantasy</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Anime
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>   
    </div>
  )
}

export default NavBar
