"use client";
import React, { RefObject, createRef, forwardRef, useRef } from "react";
import { motion, useScroll } from "framer-motion";
interface ChildProps {
/**
 * @type {React.Ref<HTMLElement>}
//  * @type {string | boolean}
 */
  ref: React.Ref<HTMLElement>;
}

/**
 * @type {React.Ref<HTMLElement>}
 */
let sb: React.Ref<HTMLElement>;

/**
 * Adds two numbers and returns the result.
 * @author Ian Awesome <i.am.awesome@example.com>
 * @param {number} num1 - The first number to add.
 * @param {number} num2 - The second number to add.
 * @returns {number} The result of adding the two numbers.
 */
function addNumbers(num1:number, num2:number): number {
  return num1 + num2;
}

// type Box<T> = { t: T }
// /** @see google.com for implementation details */
// type Boxify<T> = { [K in keyof T]: Box<T> };


const Item = forwardRef<HTMLElement, ChildProps>((props, ref) => {
  const ref2 = useRef<HTMLDivElement>(null);
  const reff = ref as React.RefObject<HTMLDivElement>;

  const { scrollYProgress } = useScroll({
    target: ref2,
    container: reff,
    offset: ["100% end", "start 0"],
    layoutEffect: false,
  });

  return (
    <div ref={ref2}>
      <figure className="progress">
        <svg id="progress" width="75" height="75" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
          <motion.circle cx="50" cy="50" r="30" pathLength="1" className="indicator" style={{ pathLength: scrollYProgress }} />
          <motion.rect width="50" height="50" className="indicator" fill="blue" style={{ fillOpacity: scrollYProgress }} />
        </svg>
      </figure>
    </div>
    // </section>
  );
});
Item.displayName = "Item";

interface MyComponentProps {
  myRef: React.RefObject<HTMLDivElement>;
}
const App: React.FC<MyComponentProps> = ({}) => {
  const refC = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: refC });
  return (
    <>
      <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="10" pathLength="1" className="bg" stroke="white" strokeOpacity="0.75" />
        <motion.circle cx="50" cy="50" r="10" pathLength="1" stroke="green" style={{ pathLength: scrollYProgress }} />
        <motion.rect x="50" y="50" height="10" width='0' pathLength="1" stroke="gold" style={{ width: scrollYProgress }} />
        {/* <motion.rect x="50" y="50" height="10" width='0' pathLength="1" stroke="gold" style={{ transform: `scale(calc(100vw * ${scrollYProgress.get()}),1)` }} /> */}
      </svg>
      <section id="tr" ref={refC}>
        {/* <Item ref={refC} />
        <Item ref={refC} />
        <Item ref={refC} />
        <Item ref={refC} />
        <Item ref={refC} />
        <Item ref={refC} />
        <Item ref={refC} />
        <Item ref={refC} /> */}
        <div>{addNumbers(1,2)}</div>
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
      </section>
    </>
  );
};
export default App;
