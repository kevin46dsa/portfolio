import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up" | "right" | "none";

const OFFSETS: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 30 },
  right: { x: 30 },
  none: {},
};

const EASE_OUT_SOFT = [0.16, 1, 0.3, 1] as const;

function buildVariants(direction: Direction, reduceMotion: boolean): Variants {
  const offset = reduceMotion ? {} : OFFSETS[direction];
  return {
    hidden: { opacity: 0, ...offset },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.6,
        ease: EASE_OUT_SOFT,
      },
    },
  };
}

type RevealProps = {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
};

/** Single-item scroll reveal. Not for use inside a RevealGroup — use RevealItem there instead. */
export const Reveal = ({ children, direction = "up", delay = 0, className }: RevealProps) => {
  const reduceMotion = useReducedMotion();
  const variants = buildVariants(direction, Boolean(reduceMotion));

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: reduceMotion ? 0 : delay }}
    >
      {children}
    </motion.div>
  );
};

type RevealGroupProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
};

/** Wraps a set of RevealItem children so they animate in sequence, not simultaneously. */
export const RevealGroup = ({ children, className, stagger = 0.14 }: RevealGroupProps) => {
  const reduceMotion = useReducedMotion();
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : stagger,
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

type RevealItemProps = {
  children: ReactNode;
  direction?: Direction;
  className?: string;
};

/** A single item within a RevealGroup — inherits stagger timing from its parent. */
export const RevealItem = ({ children, direction = "up", className }: RevealItemProps) => {
  const reduceMotion = useReducedMotion();
  const variants = buildVariants(direction, Boolean(reduceMotion));

  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  );
};
