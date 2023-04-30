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
import {
  SiPytorch,
  SiFirebase,
  SiNextdotjs,
} from "react-icons/si";
import './MyCard.css';

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} >
        <Card className="my-card"><CgCPlusPlus size={40}/></Card>
      </Col>
      <Col xs={4} md={2} >
        <Card className="my-card"><DiJavascript1 size={40}/></Card>
      </Col>
      <Col xs={4} md={2} >
        <Card className="my-card"><DiNodejs size={40}/></Card>
      </Col>
      <Col xs={4} md={2} >
        <Card className="my-card"><DiReact size={40}/></Card>
      </Col>
      <Col xs={4} md={2} >
        <Card className="my-card"><DiMongodb size={40}/></Card>
      </Col>
      <Col xs={4} md={2} >
        <Card className="my-card"><SiNextdotjs size={40}/></Card>
      </Col>
      <Col xs={4} md={2} >
        <Card className="my-card"><DiGit size={40}/></Card>
      </Col>
      <Col xs={4} md={2}>
        <Card className="my-card"><SiFirebase size={40}/></Card>
      </Col>
      <Col xs={4} md={2}>
        <Card className="my-card"><DiPython size={40}/></Card>
      </Col>
      <Col xs={4} md={2} >
        <Card className="my-card"><SiPytorch size={40}/></Card>
      </Col>
    </Row>
  );
}

export default Techstack;