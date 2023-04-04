"use client";
import { useDragControls, motion } from "framer-motion";

import React from "react";

const Page = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.5, staggerDirection: -1 },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
    },
  };

  return (
    <>
      <motion.path animate={{ pathLength: 1 }} transition={{ duration: 2, type: "tween" }} />
      <motion.div animate={{ rotate: 180 }} transition={{ from: 90, duration: 2 }} />
      <motion.div animate={{ scale: [0, 1, 0.5, 1] }} transition={{ times: [0, 0.1, 0.9, 1], duration: 3 }} />
      <motion.div animate={{ x: 100 }} transition={{ type: "spring", duration: 0.8 }} />
      <motion.a animate={{ rotate: 180 }} transition={{ type: "spring", damping: 300 }}>
        helll
      </motion.a>
      <motion.div animate={{ rotate: 180 }} transition={{ type: "spring", mass: 10.5 }} />
      <motion.div animate={{ rotate: 180 }} transition={{ type: "spring", velocity: 200 }} />
    </>
  );
};

export default Page;
