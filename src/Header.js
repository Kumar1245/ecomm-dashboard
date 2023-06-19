import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto nav_bar_wrapper">
            <Link to="/add">Add Product</Link>
            <Link t="/update">Update Product</Link>
            <Link t="/login">Login</Link>
            <Link to="register">Register</Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
