import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.css'
import logo from "../../assets/logo/logo.png"
import HelpIcon from "../../assets/icons/help-icon.png"
import CartWidget from "../../cart/cartWidget/CartWidget"
import {Link} from "react-router-dom"


function NavBar() {
  return (
    <Navbar className="navbar-container" fixed="top" expand="lg">
      <Container>
        <Link to="/">
        <Navbar.Brand to="/"><img id='navbar-logo' alt="text logo" src={logo} /></Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto text-white">
            <Nav.Link to="/">Our Mission</Nav.Link>
            <NavDropdown title="Courses" id="basic-nav-dropdown">
              <NavDropdown.Item>English</NavDropdown.Item>
              <NavDropdown.Item >Spanish</NavDropdown.Item>
              <NavDropdown.Item >French</NavDropdown.Item>
              <NavDropdown.Item className="all-lang-btn">All Languages</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                Pricing
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>For Business</Nav.Link>
            <Nav.Link>Blog</Nav.Link>
          </Nav>
          <div className="navbar-left-icons">
            <CartWidget className="cart-widget"/>
            <Link to="/"><img className="help-icon" src={HelpIcon} alt="help icon" /></Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



export default NavBar
