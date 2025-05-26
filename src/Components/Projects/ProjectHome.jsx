import React, { useState, useEffect, useRef } from "react";
import { octokit } from "../../octokit";
import "./Projects.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/esm/Col";
import { Carousel, Button, Modal } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import { projectData } from "../../TempProjectData";

const Projects = () => {
  const [visibleCards, setVisibleCards] = useState([]);

  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.dataset.index);
          if (entry.isIntersecting && !visibleCards.includes(index)) {
            setVisibleCards((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.3 } // trigger when 30% of card is visible
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [visibleCards]);
  return (
    <div className="project-main">
      <div className="project-header">
        <h1>My Projects</h1>
      </div>

      <Container fluid="xxl">
        {projectData.map((project, index) => (
          <div
            className={`project-card-container ${
              visibleCards.includes(index) ? "animate" : ""
            }`}
            key={index}
            data-index={index}
            ref={(el) => (cardRefs.current[index] = el)}
          >
            <Row key={index} className="align-items-center">
              {/* Carousel Column - shown first on mobile */}
              <Col
                xs={12}
                md={6}
                order={{ xs: 1, md: 2 }}
                style={{ padding: "20px" }}
              >
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

              {/* Text Column - shown second on mobile */}
              <Col
                xs={12}
                md={6}
                order={{ xs: 2, md: 1 }}
                style={{ padding: "20px" }}
              >
                <div>
                  <h2>{project.projectName}</h2>
                  <p>{project.projectDescription}</p>
                  <div className="project-button-container">
                    {project.githubLink && (
                      <Button
                        variant="primary"
                        target="_blank"
                        href={project.githubLink}
                      >
                        Open Github
                      </Button>
                    )}{" "}
                    {project.websitePage && (
                      <Button
                        variant="primary"
                        target="_blank"
                        href={project.websitePage}
                      >
                        View Project
                      </Button>
                    )}
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default Projects;
