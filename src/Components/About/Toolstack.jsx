import React from "react";
import {Card, Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
  SiNetlify
} from "react-icons/si";
import './MyCard.css';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';;


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2}>
      <OverlayTrigger
          key='top'
          placement='top'
          overlay={
            <Tooltip id={`tooltip-top`}>
            Linux
            </Tooltip>
          }
        >
        <Card className="my-card"><SiLinux size={40}/></Card>
        </OverlayTrigger>
        
      </Col>
      <Col xs={4} md={2}>
      <OverlayTrigger
          key='top'
          placement='top'
          overlay={
            <Tooltip id={`tooltip-top`}>
              Visual Studio Code
            </Tooltip>
          }
        >
               <Card className="my-card"><SiVisualstudiocode size={40}/></Card>
        </OverlayTrigger>

      </Col>
      <Col xs={4} md={2}>
      <OverlayTrigger
          key='top'
          placement='top'
          overlay={
            <Tooltip id={`tooltip-top`}>
              Postman
            </Tooltip>
          }
        >
          <Card className="my-card"><SiPostman size={40}/></Card>
        </OverlayTrigger>
       
      </Col>
      <Col xs={4} md={2}>
      <OverlayTrigger
          key='top'
          placement='top'
          overlay={
            <Tooltip id={`tooltip-top`}>
             Vercel
            </Tooltip>
          }
        >
         <Card className="my-card"><SiVercel size={40}/></Card>
        </OverlayTrigger>
        
      </Col>
      <Col xs={4} md={2}>
      <OverlayTrigger
          key='top'
          placement='top'
          overlay={
            <Tooltip id={`tooltip-top`}>
              Heroku
            </Tooltip>
          }
        >
         <Card className="my-card"><SiHeroku size={40}/></Card>
        </OverlayTrigger>
        
      </Col>
      <Col xs={4} md={2}>
      <OverlayTrigger
          key='top'
          placement='top'
          overlay={
            <Tooltip id={`tooltip-top`}>
              Netlify
            </Tooltip>
          }
        >
         <Card className="my-card"><SiNetlify size={40}/></Card>
        </OverlayTrigger>
        
      </Col>
      
    </Row>
  );
}

export default Toolstack;