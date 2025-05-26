import Button from "react-bootstrap/Button";
import Typewriter from "typewriter-effect";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "./Home.css";
import kevimg from "../../Assets/profilephoto.png";
import DeveloperVector from "../../Assets/DeveloperVector.svg";
import QRcode from "../../Assets/kevindsa.png";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import Stack from "react-bootstrap/Stack";

/*
 <Col sm="12" md="12" lg="5" className="columnContainer">
              <div className="qrCode">
                <Image src={QRcode} className="QRCode" alt="Responsive Image" />
              </div>
            </Col>
            */

export const Home = () => {
  return (
    <div>
      <div>
        <Container>
          <Row className="rowContainer">
            <Col sm="12" md="12" lg="5" className="columnContainer">
              <div className="Typewriter">
                <Typewriter
                  options={{
                    strings: [
                      "Hi, I am Kevin D'sa !!",
                      "FullStack Developer",
                      "Software Engineer",
                      "Web Developer",
                      "Follow Me on LinkedIn",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
              <div>
                <img
                  src={DeveloperVector}
                  alt="Site Logo"
                  className="HomepageVector "
                />
              </div>
              <div className="buttonContainer">
                <Stack direction="horizontal" gap={3}>
                  <Button variant="secondary" size="lg" href="/about">
                    About Me
                  </Button>
                  <div className="vr" />

                  <OverlayTrigger
                    key="top"
                    placement="top"
                    overlay={
                      <Tooltip id={`tooltip-top`}>
                        This Page may require you to solve reCAPTCHA, for
                        security reasons
                      </Tooltip>
                    }
                  >
                    <Button variant="secondary" size="lg" href="/resume">
                      Resume
                    </Button>
                  </OverlayTrigger>
                  <div className="vr" />
                  <Button variant="secondary" size="lg" href="/projects">
                    Projects
                  </Button>
                </Stack>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm="12" md="12" lg="5" className="invisibleColumn">
              <div className="qrCode">
                <Image src={QRcode} className="QRCode" alt="Responsive Image" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
