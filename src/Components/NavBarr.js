import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBarr = () => {
  return (
    <div className="navbarr">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">IMDb</Navbar.Brand>
          <Nav className="me-auto">
            <Link className="navOptions" to="/">Home </Link>
            <Link className="navOptions" to="/">Features </Link>
            <Link className="navOptions" to="/">Pricing </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBarr;
