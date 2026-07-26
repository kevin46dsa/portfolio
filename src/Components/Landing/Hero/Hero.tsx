import Button from "react-bootstrap/Button";
import Typewriter from "typewriter-effect";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Stack from "react-bootstrap/Stack";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import DeveloperVector from "../../../Assets/DeveloperVector.svg";
import "./Hero.css";

const EASE_OUT_SOFT = [0.16, 1, 0.3, 1] as const;

export const Hero = () => {
  const reduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduceMotion ? 0 : 0.18, delayChildren: reduceMotion ? 0 : 0.1 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 24 },
    visible: { opacity: 1, y: 0, transition: { duration: reduceMotion ? 0 : 0.7, ease: EASE_OUT_SOFT } },
  };

  return (
    <div className="hero-section">
      <Container>
        <Row className="rowContainer">
          <Col sm="12" md="12" lg="5" className="columnContainer">
            <motion.div initial="hidden" animate="visible" variants={container}>
              <motion.div className="Typewriter" variants={item}>
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
              </motion.div>
              <motion.div variants={item}>
                <img src={DeveloperVector} alt="Site Logo" className="HomepageVector " />
              </motion.div>
              <motion.div className="buttonContainer" variants={item}>
                <Stack direction="horizontal" gap={3}>
                  <Button variant="primary" size="lg" href="/about">
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
                    <Button variant="primary" size="lg" href="/resume">
                      Resume
                    </Button>
                  </OverlayTrigger>
                  <div className="vr" />
                  <Button variant="primary" size="lg" href="/projects">
                    Projects
                  </Button>
                </Stack>
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
