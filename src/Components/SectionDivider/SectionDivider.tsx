import { motion, useReducedMotion } from "framer-motion";
import "./SectionDivider.css";

const EASE_OUT_SOFT = [0.16, 1, 0.3, 1] as const;

/** A thin accent line that grows in as each landing section scrolls into view —
 * gives the scroll narrative distinct "beats" instead of one undifferentiated page. */
export const SectionDivider = () => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="section-divider"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: reduceMotion ? 0 : 0.8, ease: EASE_OUT_SOFT }}
    />
  );
};
