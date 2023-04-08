"use client";
import { useScroll, motion } from "framer-motion";
import React from "react";

export default function Page() {
  // export default function App1() {
  const ref = React.useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });
  React.useEffect(() => {
    console.log(scrollXProgress,scrollXProgress.get(),"");
  }, [scrollXProgress]);

  return (
    <>
      <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
        <motion.circle cx="50" cy="50" r="30" pathLength="1" className="indicator" style={{ pathLength: scrollXProgress }} />
      </svg>
      <ul ref={ref}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </>
  );
}
