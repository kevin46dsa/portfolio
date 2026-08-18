import { cloneElement, isValidElement } from "react";
import "../MyCard.css";

interface SkillIconElementsProps {
  elements: { name: string; icon: React.ReactNode }[];
}

export default function SkillIconElements(props: SkillIconElementsProps) {
  const { elements } = props;
  return (
    <div className="skill-pill-row">
      {elements.map((tech) => (
        <span className="skill-pill" key={tech.name}>
          {isValidElement<{ size?: number }>(tech.icon)
            ? cloneElement(tech.icon, { size: 18 })
            : tech.icon}
          {tech.name}
        </span>
      ))}
    </div>
  );
}
