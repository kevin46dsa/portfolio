import { useState, type Ref } from "react";
import { motion, type MotionStyle } from "framer-motion";
import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";
import type { projectData } from "../../Constants/TempProjectData";
import "./ProjectCard.css";

type Project = (typeof projectData)[number];

type ProjectCardProps = {
  project: Project;
  size?: "large" | "small";
  className?: string;
  /** Forwarded to the image-frame wrapper so a parent (e.g. the landing page)
   * can drive scroll-linked parallax via useScroll({ target: frameRef }). The
   * card itself stays presentational and has no scroll-linked logic of its own. */
  frameRef?: Ref<HTMLDivElement>;
  imageMotionStyle?: MotionStyle;
  captionMotionStyle?: MotionStyle;
};

export const ProjectCard = ({
  project,
  size = "small",
  className,
  frameRef,
  imageMotionStyle,
  captionMotionStyle,
}: ProjectCardProps) => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className={`project-card project-card-${size} ${className ?? ""}`}>
      <div ref={frameRef} className="project-card-image-frame">
        {project.slides.map((slide, index) => (
          <motion.img
            key={slide}
            src={slide}
            alt={`${project.projectName} screenshot ${index + 1}`}
            className="project-card-image"
            style={{
              ...imageMotionStyle,
              opacity: index === activeSlide ? 1 : 0,
            }}
          />
        ))}
        {project.slides.length > 1 && (
          <div className="project-card-dots" role="tablist" aria-label={`${project.projectName} screenshots`}>
            {project.slides.map((slide, index) => (
              <button
                key={slide}
                type="button"
                role="tab"
                aria-selected={index === activeSlide}
                aria-label={`Show screenshot ${index + 1}`}
                className={`project-card-dot ${index === activeSlide ? "is-active" : ""}`}
                onClick={() => setActiveSlide(index)}
              />
            ))}
          </div>
        )}
      </div>

      <motion.div className="project-card-body" style={captionMotionStyle}>
        <h3 className="project-card-title">{project.projectName}</h3>

        {project.techStack && project.techStack.length > 0 && (
          <div className="project-card-tags">
            {project.techStack.map((tag) => (
              <span key={tag} className="project-card-tag">
                {tag}
              </span>
            ))}
          </div>
        )}

        <p className="project-card-description">{project.projectDescription}</p>

        <div className="project-card-links">
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-card-link">
              <FaGithub aria-hidden="true" /> GitHub
            </a>
          )}
          {project.websitePage && (
            <a href={project.websitePage} target="_blank" rel="noopener noreferrer" className="project-card-link">
              <FaArrowUpRightFromSquare aria-hidden="true" /> Live site
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
};
