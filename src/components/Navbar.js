import React from "react";
import { NavLink } from "react-router-dom";
import LLLogo from "../images/logos/littleLemonLogo.png";
import { Navbar, Nav } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar expand="md" bg="light" variant="light" className="mb-3" style={{ width: "100%", padding: "15px 0" }}>
      <div className="container d-flex justify-content-between align-items-center">
        <Navbar.Brand as={NavLink} to="/">
          <img className="logo-height img-fluid" src={LLLogo} alt="Little Lemon Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
        <Navbar.Collapse id="navbarNavAltMarkup" className="justify-content-end">
          <Nav>
            <NavLink className="nav-link" exact to="/">
              HOME
            </NavLink>
            <NavLink className="nav-link" to="/about">
              ABOUT
            </NavLink>
            <NavLink className="nav-link" to="/menu">
              MENU
            </NavLink>
            <NavLink className="nav-link" to="/reserve">
              RESERVE
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Navigation;
