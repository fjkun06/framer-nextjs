"use client";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

interface init {
  opacity: number;
  scale: number;
}

type ini = boolean | init;
export default function Home() {
  const [visible, setVisible] = React.useState(false);
  const [initial, setInitial] = React.useState<ini>(false);
  const [isOpen, setOpen] = React.useState(false);
  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 1,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };
  return (
    <main>
      Hello framer motion
      <div>
        <motion.div initial={initial} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} />{" "}
      </div>
      <motion.ul initial="hidden" animate="visible" variants={list}>
        <motion.li variants={item}>hello</motion.li>
        <motion.li variants={item}>hello</motion.li>
        <motion.li variants={item}>hello</motion.li>
      </motion.ul>
      <motion.button
        initial={{ opacity: 0.6 }}
        whileHover={{
          scale: 1.2,
          opacity: 0.6,
          transition: { duration: 1 },
        }}
        whileTap={{ scale: 0.9 }}
        whileInView={{ opacity: 0 }}
      />
      {/* <div>
        <motion.div initial={initial} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} />{" "}
      </div> */}
      {/* <motion.div
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        transition={{ duration: 5 }}
      /> */}
      {/* <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} /> */}
      <motion.div animate={{ x: [0, 100, 0] }} />
      <motion.div initial={{ x: -100 }} animate={{ x: [null, 100, 0] }} transition={{ duration: 3, times: [0, 0.2, 1] }} />
      {/* <motion.div animate={{ x: 100 }} transition={{ ease: "easeOut", duration: 2 }} /> */}
      <AnimatePresence>{visible && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 2 }} />}</AnimatePresence>
      <AnimatePresence>{visible && <motion.div initial={initial} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 2 }} />}</AnimatePresence>
      <motion.div layout style={{ height: isOpen ? "100px" : "500px" }} onClick={() => setOpen(!isOpen)} />
      <motion.div drag="y" dragElastic={0.2} dragMomentum={true} dragSnapToOrigin={false} dragConstraints={{ left: 0, right: 300, bottom: 100 }} whileDrag={{ scale: 2 }} >
        <span>hello</span>
        <span>hello</span>
        <span>hello</span>
        <span>hello</span>
        <span>hello</span>
      </motion.div>
      <button type="button" onClick={() => setVisible(!visible)}>
        toggleVisibilty()
      </button>
      <button type="button" onClick={() => setInitial({ opacity: 0, scale: 0.5 })}>
        toggleInitial()
      </button>
    </main>
  );
}
