import React from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import "./Header.css";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        className="shadow p-3 rounded"
      >
        <Container>
          <Navbar.Brand
            onClick={() => navigate("/")}
            className="headerLogo"
            style={{ cursor: "pointer" }}
          >
            Kevin D'sa
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => navigate("/about")}>About</Nav.Link>

              <OverlayTrigger
                key="bottom"
                placement="bottom"
                overlay={
                  <Tooltip id={`tooltip-top`}>
                    This Page may require you to solve reCAPTCHA, for security
                    reasons
                  </Tooltip>
                }
              >
                <Nav.Link onClick={() => navigate("/resume")}>Resume</Nav.Link>
              </OverlayTrigger>

              <Nav.Link onClick={() => navigate("/projects")}>
                Projects
              </Nav.Link>
            </Nav>
            <Nav>
              <NavDropdown title="Hobbies" id="collasible-nav-dropdown">
                <NavDropdown.Item onClick={() => navigate("/music")}>
                  Music
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/photography")}>
                  Photography
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/bookshelf")}>
                  Bookshelf
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/blog")}>
                  Blog
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link onClick={() => navigate("/contact-me")}>
                Get in touch
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
