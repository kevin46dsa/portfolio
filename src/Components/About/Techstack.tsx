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

export function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2}>
        <OverlayTrigger
          key="top"
          placement="top"
          overlay={<Tooltip id={`tooltip-top`}>C++</Tooltip>}
        >
          <Card className="my-card">
            <CgCPlusPlus size={40} />
          </Card>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2}>
        <OverlayTrigger
          key="top"
          placement="top"
          overlay={<Tooltip id={`tooltip-top`}>JavaScript</Tooltip>}
        >
          <Card className="my-card">
            <DiJavascript1 size={40} />
          </Card>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2}>
        <OverlayTrigger
          key="top"
          placement="top"
          overlay={<Tooltip id={`tooltip-top`}>Node JS</Tooltip>}
        >
          <Card className="my-card">
            <DiNodejs size={40} />
          </Card>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2}>
        <OverlayTrigger
          key="top"
          placement="top"
          overlay={<Tooltip id={`tooltip-top`}>React JS</Tooltip>}
        >
          <Card className="my-card">
            <DiReact size={40} />
          </Card>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2}>
        <OverlayTrigger
          key="top"
          placement="top"
          overlay={<Tooltip id={`tooltip-top`}>MongoDB</Tooltip>}
        >
          <Card className="my-card">
            <DiMongodb size={40} />
          </Card>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2}>
        <OverlayTrigger
          key="top"
          placement="top"
          overlay={<Tooltip id={`tooltip-top`}>NextJS</Tooltip>}
        >
          <Card className="my-card">
            <SiNextdotjs size={40} />
          </Card>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2}>
        <OverlayTrigger
          key="top"
          placement="top"
          overlay={<Tooltip id={`tooltip-top`}>Git</Tooltip>}
        >
          <Card className="my-card">
            <DiGit size={40} />
          </Card>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2}>
        <OverlayTrigger
          key="top"
          placement="top"
          overlay={<Tooltip id={`tooltip-top`}>FireBase</Tooltip>}
        >
          <Card className="my-card">
            <SiFirebase size={40} />
          </Card>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2}>
        <OverlayTrigger
          key="top"
          placement="top"
          overlay={<Tooltip id={`tooltip-top`}>Python</Tooltip>}
        >
          <Card className="my-card">
            <DiPython size={40} />
          </Card>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2}>
        <OverlayTrigger
          key="top"
          placement="top"
          overlay={<Tooltip id={`tooltip-top`}>PyTorch</Tooltip>}
        >
          <Card className="my-card">
            <SiPytorch size={40} />
          </Card>
        </OverlayTrigger>
      </Col>
    </Row>
  );
}
