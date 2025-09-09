import { SiTypescript } from "react-icons/si";
import SkillIconElements from "./SkillIconElements";
import { DiJava, DiJavascript1, DiPython } from "react-icons/di";

const tools = [
  { name: "JavaScript", icon: <DiJavascript1 size={40} /> },
  { name: "TypeScript", icon: <SiTypescript size={40} /> },
  { name: "Python", icon: <DiPython size={40} /> },
  { name: "Java", icon: <DiJava size={40} /> },
];

export function ProgrammingLanguages() {
  return (
    <div className="about-techstack-section">
      <h3 className="project-heading">
        <strong className="purple">Programming </strong>Languages
      </h3>
      <SkillIconElements elements={tools} />
    </div>
  );
}
