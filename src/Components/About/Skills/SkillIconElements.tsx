import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import "../MyCard.css";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

interface SkillIconElementsProps {
  elements: { name: string; icon: React.ReactNode }[];
}

export default function SkillIconElements(props: SkillIconElementsProps) {
  const { elements } = props;
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {elements.map((tech, index) => (
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
