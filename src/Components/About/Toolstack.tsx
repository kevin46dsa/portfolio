import { Card, Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
  SiNetlify,
} from "react-icons/si";
import "./MyCard.css";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

const tools = [
  { name: "Linux", icon: <SiLinux size={40} /> },
  { name: "VS Code", icon: <SiVisualstudiocode size={40} /> },
  { name: "Postman", icon: <SiPostman size={40} /> },
  { name: "Vercel", icon: <SiVercel size={40} /> },
  { name: "Heroku", icon: <SiHeroku size={40} /> },
  { name: "Netlify", icon: <SiNetlify size={40} /> },
];

export function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col xs={4} md={2} key={index}>
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id={`tooltip-${index}`}>{tool.name}</Tooltip>}
          >
            <Card className="my-card">
              <div>{tool.icon}</div>
              <div className="my-card-text">{tool.name}</div>
            </Card>
          </OverlayTrigger>
        </Col>
      ))}
    </Row>
  );
}
