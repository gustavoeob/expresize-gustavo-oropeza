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
              <Link to="/" className="lang-link" >English</Link>
              <Link to="/" className="lang-link" >Spanish</Link>
              <Link to="/" className="lang-link" >French</Link>
              <Link to="/" className="lang-link all-lang-btn">All Languages</Link>
              <Link to="/" className="lang-link">
                Pricing
              </Link>
            </NavDropdown>
            <Link to="/" className="navbar-link">For Business</Link>
            <Link to="/" className="navbar-link">Blog</Link>
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
