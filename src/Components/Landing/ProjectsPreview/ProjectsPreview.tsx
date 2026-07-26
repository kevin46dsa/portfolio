import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { projectData } from "../../../Constants/TempProjectData";
import { SectionHeading } from "../../SectionHeading";
import { SectionDivider } from "../../SectionDivider";
import { RevealGroup, RevealItem } from "../../Reveal";
import "./ProjectsPreview.css";

const FEATURED_IDS = ["off-the-frame", "3d-tshirt-customizer", "soulmate"];

const featuredProjects = FEATURED_IDS.map((id) => projectData.find((project) => project.id === id)).filter(
  (project): project is (typeof projectData)[number] => Boolean(project)
);

function useIsMobile(breakpoint = 767) {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.innerWidth <= breakpoint
  );

  useEffect(() => {
    const query = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const handleChange = () => setIsMobile(query.matches);
    handleChange();
    query.addEventListener("change", handleChange);
    return () => query.removeEventListener("change", handleChange);
  }, [breakpoint]);

  return isMobile;
}

type Project = (typeof projectData)[number];

const ProjectCard = ({ project }: { project: Project }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const reduceMotion = useReducedMotion();
  const disableParallax = isMobile || Boolean(reduceMotion);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], disableParallax ? [0, 0] : [-50, 50]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], disableParallax ? [1, 1, 1] : [1.08, 1, 1.08]);
  const captionY = useTransform(scrollYProgress, [0, 1], disableParallax ? [0, 0] : [-15, 15]);

  return (
    <RevealItem className="project-preview-card" direction="up">
      <div ref={cardRef} className="project-preview-card-inner">
        <div className="project-preview-image-frame">
          <motion.img
            src={project.slides[0]}
            alt={project.projectName}
            className="project-preview-image"
            style={{ y: imageY, scale: imageScale }}
          />
        </div>
        <motion.div className="project-preview-caption" style={{ y: captionY }}>
          <h3>{project.projectName}</h3>
          <p>{project.projectDescription}</p>
          <div className="project-preview-links">
            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            )}
            {project.websitePage && (
              <a href={project.websitePage} target="_blank" rel="noopener noreferrer">
                Live site
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </RevealItem>
  );
};

export const ProjectsPreview = () => (
  <section className="projects-preview-section">
    <div className="projects-preview-inner">
      <SectionDivider />
      <SectionHeading eyebrow="Featured Work" title="Projects" to="/projects" />
      <RevealGroup className="projects-preview-grid">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </RevealGroup>
    </div>
  </section>
);
