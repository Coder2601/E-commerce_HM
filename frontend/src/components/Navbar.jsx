import React from 'react'
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'
import '../styles/Navbar.css'

const NavbarC = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">E-Commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link><NavLink to={'/'} className='navItem'>Home</NavLink></Nav.Link>
            <Nav.Link ><NavLink to={'/about'} className='navItem'>About</NavLink></Nav.Link>
            <Nav.Link><NavLink to={'/products'} className='navItem'>Products</NavLink></Nav.Link>
            <Nav.Link><NavLink to={'/cart'} className='navItem cartNav'>Cart</NavLink></Nav.Link>
            <Nav.Link><NavLink to={'/login'} className='navItem cartNav'>Login</NavLink></Nav.Link>
            <Nav.Link><NavLink to={'/register'} className='navItem cartNav'>Register</NavLink></Nav.Link>

          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Button className="d-flex" variant="outline-success">Search</Button>

        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavbarC
