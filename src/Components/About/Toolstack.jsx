import React from "react";
import {Card, Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
} from "react-icons/si";
import './MyCard.css';

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2}>
        <Card className="my-card"><SiLinux size={40}/></Card>
      </Col>
      <Col xs={4} md={2}>
        <Card className="my-card"><SiVisualstudiocode size={40}/></Card>
      </Col>
      <Col xs={4} md={2}>
        <Card className="my-card"><SiPostman size={40}/></Card>
      </Col>
      <Col xs={4} md={2}>
        <Card className="my-card"><SiVercel size={40}/></Card>
      </Col>
      <Col xs={4} md={2}>
        <Card className="my-card"><SiHeroku size={40}/></Card>
      </Col>
    </Row>
  );
}

export default Toolstack;