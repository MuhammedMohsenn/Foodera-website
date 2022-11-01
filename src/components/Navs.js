import React from "react";
import { Navbar, Nav, NavLink, Container } from "react-bootstrap";
import logo from "../assets/logo.png";
import "./Navs.css";
import { useState } from "react";

const Navs = () => {
  const [fixedNav, setFixedNav] = useState(false);

  const fixedNavbar = () => {
    if (window.scrollY > 80) {
      setFixedNav(true);
    } else {
      setFixedNav(false);
    }
  };

  window.addEventListener("scroll", fixedNavbar);

  return (
    <>
      <Navbar expand="lg" className={fixedNav ? "navbar fixed-nav" : "navbar"}>
        <Container className="container">
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo" className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about-us">About us</Nav.Link>
              <Nav.Link href="#explore-foods">Explore Foods</Nav.Link>
              <Nav.Link href="#reviews">Reviews</Nav.Link>
              <Nav.Link href="#FAQ">FAQ</Nav.Link>
            </Nav>
            <Nav>
              <NavLink className="lastnav-item">1800 789 123</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navs;
