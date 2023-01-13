import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className="navbar" >
 <Navbar  >
        <Container>
          <Navbar.Brand href="/">Pop Corn Time</Navbar.Brand>
          <Nav className="mx-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/contact">contact</Nav.Link>

          </Nav>
        </Container>
      </Navbar>  
    </div>
  )
}

export default NavBar
