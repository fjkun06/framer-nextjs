"use client";
import { useDragControls, motion, useScroll, AnimatePresence } from "framer-motion";
import { Reorder } from "framer-motion";
import { useState } from "react";
import React from "react";

const Page = () => {
  const [items, setItems] = useState([1, "hello", "hemo", "hezo"]);
  const controls = useDragControls();
  const { scrollY, scrollX, scrollXProgress, scrollYProgress } = useScroll();

  // React.useEffect(() => {
  //   document.querySelector("body main")?.addEventListener("scroll", () => {
  //     console.log(scrollY);
  //   });

  //   return () => {};
  // }, [scrollY]);

  return (
    <Reorder.Group axis="y" values={items} onReorder={setItems}>
      <AnimatePresence>
     {items.map((item) => (
        <Reorder.Item key={item} value={item} dragListener={false} dragControls={controls}>
          <article>
            {item}

            <span className="" onPointerDown={(e) => controls.start(e)}>
              drag
            </span>
          </article>
        </Reorder.Item>
      ))}
      </AnimatePresence>
 
    </Reorder.Group>
  );
};

export default Page;
