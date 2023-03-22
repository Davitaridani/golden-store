import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

import imgLogo from "../../assets/img/logo.png";

const NavbarCompt = () => {
  const nav_link = [
    { path: "/", display: "Home" },
    { path: "about", display: "About" },
    { path: "product", display: "Product" },
    { path: "contact", display: "Contact" },
  ];

  return (
    <Navbar className="sticky-top" bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="nav-link p-0 d-flex align-items-center">
            <img src={imgLogo} alt="logo Navbar" />
            <h3>
              Golden <span>Store</span>
            </h3>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <ul className="ms-auto mb-0 d-flex align-items-center">
            {nav_link.map((item, index) => (
              <li className="nav-link d-flex" key={index}>
                <NavLink className="nav-link" to={item.path}>
                  {item.display}
                </NavLink>
              </li>
            ))}
            <li className="nav-link icon-whatsapp d-flex align-items-center ">
              <Link to="#">
                Whatsapp
                <span>
                  <iconify-icon icon="logos:whatsapp-icon"></iconify-icon>
                </span>
              </Link>
            </li>
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarCompt;
