import "./Projects.css";
import { projectData, FEATURED_PROJECT_IDS } from "../../Constants/TempProjectData";
import { Reveal } from "../Reveal";
import { ProjectCard } from "../ProjectCard";

// Featured projects render first as large hero tiles (each alone in its own row --
// pairing a large tile with a single small one in the same row means their image
// heights mismatch by nearly 2x, driven by width alone, no matter how their text
// content is tuned), followed by the remaining projects as a uniform small row.
const orderedProjects = [
  ...FEATURED_PROJECT_IDS.map((id) => projectData.find((project) => project.id === id)),
  ...projectData.filter((project) => !FEATURED_PROJECT_IDS.includes(project.id)),
].filter(Boolean);

const Projects = () => {
  return (
    <div className="project-main">
      <div className="project-header">
        <h1>My Projects</h1>
      </div>

      <div className="project-grid">
        {orderedProjects.map((project) => (
          <Reveal key={project.id} className="project-grid-item">
            <ProjectCard
              project={project}
              size={FEATURED_PROJECT_IDS.includes(project.id) ? "large" : "small"}
            />
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default Projects;
