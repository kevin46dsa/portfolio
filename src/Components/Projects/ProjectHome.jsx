import React, { useState, useEffect } from "react";
import { octokit } from "../../octokit";
import "./Projects.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/esm/Col";
import { Carousel, Button, Modal } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import { projectData } from "../../TempProjectData";

const Projects = () => {
  return (
    <div className="project-main">
      <div className="project-header">
        <h1>My Projects</h1>
      </div>

      <Container fluid="xxl">
        {projectData.map((project, index) => (
          <div
            style={{
              backgroundColor: "#F5F5F5",
              padding: "40px",
              margin: "40px",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
            }}
          >
            <Row key={index}>
              <Col style={{ padding: "40px" }}>
                <div style={{ alignItems: "center" }}>
                  <h2>{project.projectName}</h2>
                  <p>{project.projectDescription}</p>
                  {project.githubLink === "" ? null : (
                    <Button
                      variant="primary"
                      target="_blank"
                      href={project.githubLink}
                    >
                      Open Github
                    </Button>
                  )}
                  {"   "}
                  {project.websitePage === "" ? null : (
                    <Button
                      variant="primary"
                      target="_blank"
                      href={project.websitePage}
                    >
                      View Project
                    </Button>
                  )}
                  {"   "}
                </div>
              </Col>

              <Col>
                <Carousel fade>
                  {project.slides.map((slide, index) => (
                    <Carousel.Item key={index}>
                      <img
                        className="project-carusel-image"
                        src={slide}
                        alt={`Slide ${index + 1}`}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
              </Col>
            </Row>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default Projects;
