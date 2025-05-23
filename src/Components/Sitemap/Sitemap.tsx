import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

/**
 * Simple Sitemap component listing all available routes in the app.
 * Place a link to "/sitemap" in your header or footer to make this accessible.
 */
export const Sitemap = () => {
  return (
    <Container className="py-5">
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <h2 className="mb-4 text-center">Site Map</h2>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Link to="/">Home</Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link to="/about">About</Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link to="/bookshelf">Bookshelf</Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link to="/music">Music</Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link to="/resume">Resume</Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link to="/projects">Projects</Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link to="/blog">Blog</Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link to="/photography">Photography</Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link to="/contact-me">Contact</Link>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};
