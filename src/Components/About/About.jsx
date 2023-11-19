import React from "react";
import { Container, Row, Col } from "react-bootstrap";
//import Particle from "../Particle";
//import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/About_2.jpeg";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              About Me
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" style={{ maxHeight: "600px"}}/>
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong>Tools</strong> I use
        </h1>
        <Toolstack />
        <div style={{textAlign:"center"}}>
        <a href="https://www.buymeacoffee.com/kevin46dsa" target="_blank">
        <img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"/></a>
        </div>
        

      
       {/*<Github />*/}
      </Container>
    </Container>
  );
}

export default About;