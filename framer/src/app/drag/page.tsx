"use client";
import { useDragControls, motion } from "framer-motion";

import React from "react";

const Page = () => {
  const dragControls = useDragControls();
  function startDrag(event: React.PointerEvent<HTMLDivElement>) {
    dragControls.start(event, { snapToCursor: true });
  }
  return (
    <>
      <div onPointerDown={startDrag} />
      <motion.div drag="x" dragControls={dragControls} />
      <motion.div drag dragDirectionLock onDirectionLock={(axis) => console.log(axis)} />
      <motion.div animate={{ x: 100 }} transition={{ type: "spring", stiffness: 1000,delay:-1 }} />{" "}
    </>
  );
};

export default Page;
