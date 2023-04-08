"use client";
import React, { useRef } from "react";
import { motion, transform, useMotionValue, useMotionValueEvent, useScroll, useSpring, useTransform } from "framer-motion";

interface MyComponentProps {
  myRef: React.RefObject<HTMLDivElement>;
}
const Page: React.FC<MyComponentProps> = ({}) => {
  const refC = useRef<HTMLDivElement>(null);
  const wd = useMotionValue(0);
  const { scrollYProgress } = useScroll({ container: refC });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("x changed to", latest);
    wd.set((Math.round(latest * 100) / 100) * 100);
  });
  const scaleX = useSpring(wd);
  const x = useMotionValue(0);
  // const input = ["0vw", 0, 200];
  const input = [-200, 0, 200];
  const output = [0, 1, 0];
  const output2 = ["#f00", "#0f0", "#00f"];
  const opacity = useTransform(x, input, output);
  const backgroundColor = useTransform(x, input, output2);
  const { scrollY } = useScroll();
  const rotate = useTransform(scrollY, [0, 100], [0, 360], { clamp: false });
  return (
    <>
      <svg width='100' height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="10" pathLength="1" className="bg" stroke="white" strokeOpacity="0.75" />
        <motion.circle cx="50" cy="50" r="10" pathLength="1" stroke="green" style={{ pathLength: scrollYProgress }} />
        {/* <motion.rect x="50" y="50" height="10" width="20" pathLength="1" stroke="gold" /> */}
        <motion.rect x="0" y="50" height="10" width='100' pathLength="1" stroke="gold" />
        {/* <motion.rect x="50" y="50" height="10" width='0' pathLength="1" stroke="gold" style={{ transform: `scale(calc(100vw * ${scrollYProgress.get()}),1)` }} /> */}
      </svg>
      {/* <motion.div id="max" style={{transform:`scaleX(${state})`}}/> */}
      <motion.div id="max" style={{ scaleX }} />
      {/* <motion.div id="max" style={{scaleX:wd}}/> */}
      <section id="tr" ref={refC}>
        {/* <Item ref={refC} />
        <Item ref={refC} />
        <Item ref={refC} />
        <Item ref={refC} />
        <Item ref={refC} />
        <Item ref={refC} />
        <Item ref={refC} />
        <Item ref={refC} /> */}
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <motion.div drag="x" style={{ x, opacity, backgroundColor }} />
        <MyComponent />
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </section>
    </>
  );
};
export default Page;
const MyComponent = () => {
  const x = useMotionValue(10);
  const y = useTransform(x, (value) => Math.cos(value / 10) * 50);

  return <motion.div style={{ x, y }} />;
};
