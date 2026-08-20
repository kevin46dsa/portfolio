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
        variant="dark"
        data-bs-theme="dark"
        className="site-navbar p-3"
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
              {/* Uncontrolled: react-bootstrap's own click-to-open/click-outside
                  (or Escape) -to-close behavior, rather than a hand-rolled hover
                  + setTimeout mechanism. That custom version was unreliable and
                  hover doesn't apply on touch anyway, so plain click behavior is
                  both more robust and better for mobile. */}
              <NavDropdown title="Hobbies" id="collasible-nav-dropdown">
                <NavDropdown.Item onClick={() => navigate("/music")}>
                  Music
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/photography")}>
                  Photography
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/blog")}>
                  Blog
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                href="https://www.linkedin.com/in/kevindsa2017"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get in touch
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
