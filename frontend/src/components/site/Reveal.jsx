import React from "react";
import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];

// Fade + rise on scroll into view
export function Reveal({ children, delay = 0, y = 28, className = "", as = "div" }) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  );
}

// Masked line-by-line reveal (heading lines rise from behind a clip mask)
export function MaskedLines({ lines, className = "", lineClassName = "", stagger = 0.12, delay = 0.15 }) {
  return (
    <span className={className} aria-label={lines.join(" ")}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden" aria-hidden="true">
          <motion.span
            className={`block ${lineClassName}`}
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1, delay: delay + i * stagger, ease: EASE }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
