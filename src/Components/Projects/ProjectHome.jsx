import { useEffect, useRef, useState } from "react";
import "./Projects.css";
import { projectData, FEATURED_PROJECT_IDS } from "../../Constants/TempProjectData";
import { Reveal } from "../Reveal";
import { ProjectCard } from "../ProjectCard";

const featuredProjects = FEATURED_PROJECT_IDS.map((id) =>
  projectData.find((project) => project.id === id)
).filter(Boolean);

const otherProjects = projectData.filter(
  (project) => !FEATURED_PROJECT_IDS.includes(project.id)
);

const Projects = () => {
  const moreScrollRef = useRef(null);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const handleWheel = (e) => {
    const el = moreScrollRef.current;
    if (!el) return;
    // If the user is using a vertical wheel, horizontalize it -- there's no
    // natural horizontal-scroll gesture for a mouse otherwise.
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    }
  };

  const updateIsAtEnd = () => {
    const el = moreScrollRef.current;
    if (!el) return;
    setIsAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  };

  useEffect(() => {
    updateIsAtEnd();
    window.addEventListener("resize", updateIsAtEnd);
    return () => window.removeEventListener("resize", updateIsAtEnd);
  }, []);

  return (
    <div className="project-main">
      <div className="project-header">
        <h1>My Projects</h1>
      </div>

      <section className="project-featured-section">
        <h2 className="project-section-title">Featured</h2>
        <div className="project-featured-list">
          {featuredProjects.map((project) => (
            <Reveal key={project.id} className="project-featured-item">
              <ProjectCard project={project} size="large" />
            </Reveal>
          ))}
        </div>
      </section>

      {otherProjects.length > 0 && (
        <section className="project-more-section">
          <h2 className="project-section-title">All Projects</h2>
          <div className={`project-more-scroll-wrap ${isAtEnd ? "is-at-end" : ""}`}>
            <div
              className="project-more-scroll"
              ref={moreScrollRef}
              onWheel={handleWheel}
              onScroll={updateIsAtEnd}
            >
              {otherProjects.map((project) => (
                <Reveal key={project.id} className="project-more-item">
                  <ProjectCard project={project} size="small" />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Projects;
