import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import { SiPytorch, SiFirebase, SiNextdotjs } from "react-icons/si";
import "./MyCard.css";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

// Define the tech stack as an array of objects
const techStack = [
  { name: "C++", icon: <CgCPlusPlus size={40} /> },
  { name: "JavaScript", icon: <DiJavascript1 size={40} /> },
  { name: "Node JS", icon: <DiNodejs size={40} /> },
  { name: "React JS", icon: <DiReact size={40} /> },
  { name: "MongoDB", icon: <DiMongodb size={40} /> },
  { name: "NextJS", icon: <SiNextdotjs size={40} /> },
  { name: "Git", icon: <DiGit size={40} /> },
  { name: "Firebase", icon: <SiFirebase size={40} /> },
  { name: "Python", icon: <DiPython size={40} /> },
  { name: "PyTorch", icon: <SiPytorch size={40} /> },
];

export function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techStack.map((tech, index) => (
        <Col xs={4} md={2} key={index}>
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id={`tooltip-${index}`}>{tech.name}</Tooltip>}
          >
            <Card className="my-card">
              <div>{tech.icon}</div>
              <div className="my-card-text">{tech.name}</div>
            </Card>
          </OverlayTrigger>
        </Col>
      ))}
    </Row>
  );
}
