"use client";
import { useDragControls, motion } from "framer-motion";

import React from "react";

const Page = () => {
  return (
    <>
      <motion.div animate={{ rotate: 180 }} transition={{ type: "inertia", velocity: 500 }} />
      <motion.div
        drag
        dragTransition={{
          power: 0,
          // Snap calculated target to nearest 50 pixels
          modifyTarget: (target) => Math.round(target / 50) * 50,
        }}
      />
      <motion.div
        drag
        dragTransition={{
          bounceStiffness: 10,
        }}
      />
      <motion.div
        drag
        dragTransition={{
          min: -100,
          max: 200,
          bounceDamping: 8,
        }}
      />
<motion.div
  drag
  dragTransition={{ timeConstant: 700 }}
/>    </>
  );
};

export default Page;
