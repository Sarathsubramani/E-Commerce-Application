import React from "react";
import { Navbar, Container, Nav, Badge } from "react-bootstrap";

class NavBar extends React.Component {
  render() {
    const { cartCount, onNavSelect, activePage } = this.props;

    return (
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="shadow-sm">
        <Container>
          <Navbar.Brand
            href="#"
            onClick={() => onNavSelect("home")}
            className="fw-bold"
          >
            🛍️ ShopEase
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar">
            <Nav className="ms-auto align-items-lg-center">
              <Nav.Link
                active={activePage === "home"}
                onClick={() => onNavSelect("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                active={activePage === "products"}
                onClick={() => onNavSelect("products")}
              >
                Products
              </Nav.Link>
              <Nav.Link
                active={activePage === "cart"}
                onClick={() => onNavSelect("cart")}
              >
                Cart{" "}
                <Badge bg="success" pill>
                  {cartCount}
                </Badge>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavBar;
