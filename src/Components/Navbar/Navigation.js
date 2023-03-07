import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Navigation.css";
import logoOne from "../../Images/Storefront.png";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <Navbar key="xxl" expand="xxl" className="navigation mb-3">
      <Container fluid className="navContainer">
        <div className="head d-flex flex-row align-itmes-center">
          <img src={logoOne} alt="" />
          <Navbar.Brand href="#" className="text-light">
            NFT Marketplace
          </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xxl`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-xxl`}
          aria-labelledby={`offcanvasNavbarLabel-expand-xxl`}
          placement="end"
        >
          <Offcanvas.Header closeButton className="header">
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xxl`}>
              NFT Marketplace
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="body">
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link>Create Account</Nav.Link>
              <Nav.Link>Ranking</Nav.Link>
              <Nav.Link>Connect a wallet</Nav.Link>
              <Button className="btn">Login In</Button>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Navigation;
