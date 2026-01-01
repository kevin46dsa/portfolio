import { SiExpress, SiFirebase, SiGraphql } from "react-icons/si";
import SkillIconElements from "./SkillIconElements";
import { DiNodejs } from "react-icons/di";

const tools = [
  { name: "NodeJS", icon: <DiNodejs size={40} /> },
  { name: "ExpressJS", icon: <SiExpress size={40} /> },
  { name: "Firebase", icon: <SiFirebase size={40} /> },
  { name: "GraphQL", icon: <SiGraphql size={40} /> },
];

export function Backend() {
  return (
    <div className="about-techstack-section">
      <h3 className="project-heading">
        <strong className="purple">Backend </strong>
      </h3>
      <SkillIconElements elements={tools} />
    </div>
  );
}
