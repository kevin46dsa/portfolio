import React from "react";
import {
  Container,
  Row,
  Col,
  Nav,
  Form,
  InputGroup,
  Button,
  Image,
} from "react-bootstrap";
import kevimg from "../../Assets/GithubProfile.png";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
// import "./Footer.css";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer border-top mt-4">
      <Container>
        <Row className="py-4 d-flex justify-content-evenly">
          {/* About */}
          <Col md={2}>
            <div className="pb-3">
              <Image
                src={kevimg}
                className="img-fluid"
                style={{ maxHeight: "70px" }}
                alt="Responsive Image"
                onClick={() => {
                  window.open("/about", "_self");
                }}
              />
            </div>
            <h5>About Me</h5>
            <p>Full-Stack Developer crafting intuitive web experiences.</p>
            <a href="/sitemap">Sitemap</a>
          </Col>

          {/* Quick Links */}
          <Col md={2}>
            <h5>Quick Links</h5>
            <Nav className="flex-column">
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/resume">Resume</Nav.Link>
              <Nav.Link href="/projects">Projects</Nav.Link>
              <Nav.Link href="/blog">Blog</Nav.Link>
              <Nav.Link href="/contact-me">Contact</Nav.Link>
            </Nav>
          </Col>
        </Row>

        <Row>
          <Col className="text-center pt-3 border-top">
            <small>© {year} All rights reserved to NosEnterprise. </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
