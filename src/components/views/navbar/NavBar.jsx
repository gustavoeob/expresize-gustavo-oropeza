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
            <Link to="/our-mission" className="navbar-link">
           Our mission
            </Link>
            <NavDropdown title="Courses" id="basic-nav-dropdown">
              <Link to="/course/IJHwYBgvmD7CO58LcGNt" className="lang-link" >English</Link>
              <Link to="/course/YQTHNSksn0gCFfBV6798" className="lang-link" >German</Link>
              <Link to="/course/ZhevKU9pRaPoN5f04BKF" className="lang-link" >French</Link>
              <Link to="/courses" className="lang-link all-lang-btn">All Languages</Link>
              <Link to="/pricing" className="lang-link">
                Pricing
              </Link>
            </NavDropdown>
            <Link to="/for-business" className="navbar-link">For Business</Link>
            <Link to="/blog" className="navbar-link">Blog</Link>
          </Nav>
          <div className="navbar-left-icons">
            <CartWidget className="cart-widget"/>
            <Link to="/help"><img className="help-icon" src={HelpIcon} alt="help icon" /></Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



export default NavBar
