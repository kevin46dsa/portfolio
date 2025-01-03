import { Card, Carousel } from "react-bootstrap";
import { projectData } from "../../Data/Default/TempProjectData";

export const ProjectsNewHomeComponent = () => {
  return (
    <div style={{ textAlign: "center" }}>
      {!!projectData &&
        projectData.map((project, index) => (
          <div style={{ width: "70%" }}>
            <Card>
              <Card.Title>{project.projectName}</Card.Title>

              <Card.Body>
                <Carousel fade>
                  {project.slides &&
                    project.slides.map((slide, index) => (
                      <Carousel.Item key={index}>
                        <img
                          style={{ height: "275px" }}
                          src={slide}
                          alt={`${project.projectName}-slide-${index}`}
                        />
                      </Carousel.Item>
                    ))}
                </Carousel>
              </Card.Body>
              <Card.Text>{project.projectDescription}</Card.Text>
            </Card>
          </div>
        ))}
    </div>
  );
};
