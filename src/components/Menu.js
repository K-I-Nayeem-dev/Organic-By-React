import React from 'react'
import { Container,Navbar,Nav } from 'react-bootstrap'
import {HiOutlineShoppingBag} from 'react-icons/hi'
import {FiSearch} from 'react-icons/fi'

const Menu = () => {
  return (
    <Navbar expand="lg" className='menu-bg'>
      <Container>
        <Navbar.Brand href="Home">Organic</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="Home">Home</Nav.Link>
            <Nav.Link href="Organic1">Accessories</Nav.Link>
            <Nav.Link href="Category">Category</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <Nav.Link href="#link">About Us</Nav.Link>
            <Nav.Link href="#link">Faqs</Nav.Link>
            <div className="nav_cart">
                <a href="#home"><HiOutlineShoppingBag className='shopping_bag'/></a>
                <a href="#home"><FiSearch className='search'/></a>
            </div>                 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Menu