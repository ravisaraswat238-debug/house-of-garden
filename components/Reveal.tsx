"use client";

import React from "react";
import { motion, type TargetAndTransition } from "motion/react";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  x?: number;
  scale?: number;
  duration?: number;
  viewportAmount?: number;
  as?: "div" | "span" | "header" | "section" | "article";
}

export default function Reveal({
  children,
  className = "",
  delay = 0,
  y = 30,
  x = 0,
  scale = 1,
  duration = 0.75,
  viewportAmount = 0.2,
  as = "div",
}: RevealProps) {
  const Component = motion[as] || motion.div;

  const initial: TargetAndTransition = {
    opacity: 0,
    y,
    x,
  };

  const whileInView: TargetAndTransition = {
    opacity: 1,
    y: 0,
    x: 0,
  };

  if (scale !== 1) {
    initial.scale = scale;
    whileInView.scale = 1;
  }

  return (
    <Component
      className={className}
      initial={initial}
      whileInView={whileInView}
      viewport={{
        once: true,
        amount: viewportAmount,
      }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </Component>
  );
}
