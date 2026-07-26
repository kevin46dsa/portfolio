import "./Projects.css";
import { projectData, FEATURED_PROJECT_IDS } from "../../Constants/TempProjectData";
import { Reveal } from "../Reveal";
import { ProjectCard } from "../ProjectCard";

// Featured (large) and supporting (small) projects are interleaved one-for-one --
// the 1024px+ bento grid below pairs each large tile with one small tile side by
// side in the same row, so the render order here must alternate large/small.
const featured = FEATURED_PROJECT_IDS.map((id) => projectData.find((project) => project.id === id));
const supporting = projectData.filter((project) => !FEATURED_PROJECT_IDS.includes(project.id));
const orderedProjects = featured.flatMap((project, index) => [project, supporting[index]]).filter(Boolean);

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
