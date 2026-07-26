import "./Projects.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/esm/Col";
import { Carousel, Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import { projectData } from "../../Constants/TempProjectData";
import { Reveal } from "../Reveal";

const Projects = () => {
  return (
    <div className="project-main">
      <div className="project-header">
        <h1>My Projects</h1>
      </div>

      <Container fluid="xxl">
        {projectData.map((project, index) => (
          <Reveal key={index} className="project-card-container">
            <Row className="align-items-center">
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
          </Reveal>
        ))}
      </Container>
    </div>
  );
};

export default Projects;
