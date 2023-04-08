"use client";
import React, { RefObject, createRef, forwardRef, useRef } from "react";
import { motion, useScroll } from "framer-motion";
type Text = HTMLDivElement;
interface ChildProps {
  // Other props...
  ref: React.Ref<HTMLElement>;
}
export function App1() {
  // export default function App1() {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

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
type Props = {
  // props for your component
};

type Ref = React.Ref<HTMLDivElement>;

const Item = forwardRef<HTMLElement, ChildProps>((props, ref) => {
  const ref2 = useRef<HTMLDivElement>(null);
  // const reff = ref as Ref;
  const reff = ref as React.RefObject<HTMLDivElement>;
  // React.useEffect(() => {
  //   if (reff.current) {
  //     // The ref is now hydrated and can be used
  //     console.log(reff.current.offsetWidth);
  //   }
  // }, [reff]);

  const { scrollYProgress } = useScroll({
    target: ref2,
    container: reff,
    offset: ["100% end", "start 0"],
    layoutEffect: false,
    // offset: ["end end", "start start"]
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
// export default Item;

interface MyComponentProps {
  myRef: React.RefObject<HTMLDivElement>;
}
const App: React.FC<MyComponentProps> = ({}) => {
  const refC = useRef<HTMLDivElement>(null);
  // const refC: React.RefObject<Text> = useRef(null);
  // React.useEffect(() => {
  //   if (refC.current) {
  //     // The ref is now hydrated and can be used
  //     console.log(refC.current.offsetWidth);
  //   }
  // }, [refC]);

  return (
    <section id="tre" ref={refC}>
      <Item ref={refC} />
      <Item ref={refC} />
      <Item ref={refC} />
      <Item ref={refC} />
      <Item ref={refC} />
      <Item ref={refC} />
      <Item ref={refC} />
      <Item ref={refC} />
    </section>
  );
};
export default App;
