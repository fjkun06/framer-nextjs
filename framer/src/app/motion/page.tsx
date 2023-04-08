"use client";
import { useDragControls, motion } from "framer-motion";

import React from "react";

const Page = () => {
  return (
    <>
      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} style={{ x: 100 }} />
      <motion.div style={{ originX: 0.5 }} />
    </>
  );
};

export default Page;
