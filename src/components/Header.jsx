import { useContext } from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import { BsCart4 } from "react-icons/bs"
import { orderCart } from "./App"
import { NavLink } from "react-router-dom"

function Header({cartOpen}) {
  const {cartArr} = useContext(orderCart)

  return (
    <header>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary fixed-top">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="main" className="nav-link">Home</NavLink>
              <NavLink to="pizza" className="nav-link">Pizza</NavLink>
              <NavLink to="contact" className="nav-link">Contact</NavLink>
            </Nav>
            <Nav className="position-relative">
              <BsCart4 onClick={()=> cartOpen(true)}  className="fs-3" />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartArr.length}</span>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header