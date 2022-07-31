import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.css'
import logo from "../../assets/logo/logo.png"

function NavBar() {
  return (
    <Navbar className="navbar-container" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img id='navbar-logo' alt="text logo" src={logo} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto text-white">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#our-mission">Our Mission</Nav.Link>
            <Nav.Link href="#for-business">For Business</Nav.Link>
            <NavDropdown title="Courses" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">English</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Spanish</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">French</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1" className="all-lang-btn">All Languages</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Pricing
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



export default NavBar
