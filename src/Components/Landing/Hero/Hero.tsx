import Button from "react-bootstrap/Button";
import Typewriter from "typewriter-effect";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Stack from "react-bootstrap/Stack";
import { motion, useReducedMotion, type Variants } from "framer-motion";
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
      <div className="hero-blobs" aria-hidden="true">
        <span className="hero-blob hero-blob-1" />
        <span className="hero-blob hero-blob-2" />
        <span className="hero-blob hero-blob-3" />
        <span className="hero-blob hero-blob-4" />
      </div>

      <motion.div className="hero-content" initial="hidden" animate="visible" variants={container}>
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

        <motion.div className="buttonContainer" variants={item}>
          <Stack direction="horizontal" gap={3}>
            <Button variant="primary" size="lg" className="hero-cta" href="/about">
              About Me
            </Button>

            <OverlayTrigger
              key="top"
              placement="top"
              overlay={
                <Tooltip id={`tooltip-top`}>
                  This Page may require you to solve reCAPTCHA, for security reasons
                </Tooltip>
              }
            >
              <Button variant="primary" size="lg" className="hero-cta" href="/resume">
                Resume
              </Button>
            </OverlayTrigger>

            <Button variant="primary" size="lg" className="hero-cta" href="/projects">
              Projects
            </Button>
          </Stack>
        </motion.div>
      </motion.div>
    </div>
  );
};
