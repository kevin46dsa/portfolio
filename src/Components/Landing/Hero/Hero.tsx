import Button from "react-bootstrap/Button";
import Typewriter from "typewriter-effect";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Stack from "react-bootstrap/Stack";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { GiCheckeredFlag, GiSteeringWheel } from "react-icons/gi";
import { FaBasketball, FaChevronDown } from "react-icons/fa6";
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

  const scrollToNextSection = () => {
    window.scrollTo({ top: window.innerHeight, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <div className="hero-section">
      <div className="hero-glyphs" aria-hidden="true">
        <GiCheckeredFlag className="hero-glyph hero-glyph-1" />
        <FaBasketball className="hero-glyph hero-glyph-2" />
        <GiSteeringWheel className="hero-glyph hero-glyph-3" />
      </div>

      <motion.svg
        className="hero-line"
        viewBox="0 0 400 400"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <linearGradient id="hero-line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--hero-accent)" />
            <stop offset="100%" stopColor="var(--hero-accent-2)" />
          </linearGradient>
        </defs>
        <motion.path
          d="M20,380 C120,320 180,120 380,20"
          stroke="url(#hero-line-gradient)"
          strokeWidth={3}
          strokeLinecap="round"
          fill="none"
          initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={reduceMotion ? { duration: 0 } : { duration: 1.6, ease: EASE_OUT_SOFT, delay: 0.3 }}
        />
      </motion.svg>

      <motion.div className="hero-content" initial="hidden" animate="visible" variants={container}>
        <motion.h1 className="hero-heading" variants={item}>
          Hi, I&apos;m <span className="hero-heading-accent">Kevin</span>
          <br />
          Full-Stack Developer
        </motion.h1>

        <motion.div className="Typewriter hero-subtitle" variants={item}>
          <Typewriter
            options={{
              strings: [
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

      <button
        type="button"
        className="hero-scroll-cue"
        onClick={scrollToNextSection}
        aria-label="Scroll down to see more"
      >
        <span className="hero-scroll-cue-line" aria-hidden="true" />
        <FaChevronDown className="hero-scroll-cue-icon" aria-hidden="true" />
      </button>
    </div>
  );
};
