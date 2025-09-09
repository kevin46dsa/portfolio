import { SiElasticsearch, SiRedis } from "react-icons/si";
import SkillIconElements from "./SkillIconElements";
import { DiDocker, DiMongodb, DiMysql, DiPostgresql } from "react-icons/di";

const tools = [
  { name: "MongoDB", icon: <DiMongodb size={40} /> },
  { name: "PostgreSQL", icon: <DiPostgresql size={40} /> },
  { name: "MySQL", icon: <DiMysql size={40} /> },
  { name: "Redis", icon: <SiRedis size={40} /> },
  { name: "Docker", icon: <DiDocker size={40} /> },
  { name: "ElasticSearch", icon: <SiElasticsearch size={40} /> },
];

export function DatabaseAndCloud() {
  return (
    <div className="about-techstack-section">
      <h3 className="project-heading">
        <strong className="purple">Database & Cloud </strong>
      </h3>
      <SkillIconElements elements={tools} />
    </div>
  );
}
