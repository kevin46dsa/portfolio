import { useEffect, useRef, useState } from "react";
import { useReducedMotion, useScroll, useTransform } from "framer-motion";
import { projectData, FEATURED_PROJECT_IDS } from "../../../Constants/TempProjectData";
import { SectionHeading } from "../../SectionHeading";
import { SectionDivider } from "../../SectionDivider";
import { RevealGroup, RevealItem } from "../../Reveal";
import { ProjectCard } from "../../ProjectCard";
import "./ProjectsPreview.css";

const featuredProjects = FEATURED_PROJECT_IDS.map((id) =>
  projectData.find((project) => project.id === id)
).filter((project): project is (typeof projectData)[number] => Boolean(project));

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

const ParallaxProjectCard = ({ project, size }: { project: Project; size: "large" | "small" }) => {
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
    <RevealItem className="projects-preview-card" direction="up">
      <ProjectCard
        project={project}
        size={size}
        frameRef={cardRef}
        imageMotionStyle={{ y: imageY, scale: imageScale }}
        captionMotionStyle={{ y: captionY }}
      />
    </RevealItem>
  );
};

export const ProjectsPreview = () => (
  <section className="projects-preview-section">
    <div className="projects-preview-inner">
      <SectionDivider />
      <SectionHeading eyebrow="Featured Work" title="Projects" to="/projects" />
      <RevealGroup className="projects-preview-grid">
        {featuredProjects.map((project, index) => (
          <ParallaxProjectCard key={project.id} project={project} size={index === 0 ? "large" : "small"} />
        ))}
      </RevealGroup>
    </div>
  </section>
);
