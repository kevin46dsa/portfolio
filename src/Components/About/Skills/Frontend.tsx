import {
  SiBootstrap,
  SiMantine,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiVite,
} from "react-icons/si";
import SkillIconElements from "./SkillIconElements";

const tools = [
  { name: "React", icon: <SiReact size={40} /> },
  { name: "NextJS", icon: <SiNextdotjs size={40} /> },
  { name: "Vite", icon: <SiVite size={40} /> },
  { name: "TailwindCSS", icon: <SiTailwindcss size={40} /> },
  { name: "Bootstrap", icon: <SiBootstrap size={40} /> },
  { name: "Mantine", icon: <SiMantine size={40} /> },
];

export function Frontend() {
  return (
    <div className="about-techstack-section">
      <h3 className="project-heading">
        <strong className="purple">Frontend </strong>
      </h3>
      <SkillIconElements elements={tools} />
    </div>
  );
}
