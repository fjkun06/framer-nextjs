"use client";
import { RefObject, createRef, forwardRef, useRef } from "react";
import { motion, useScroll } from "framer-motion";

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

type Ref = React.RefObject<HTMLDivElement>;

const Item = ({ reff }: { reff: React.RefObject<HTMLDivElement> }) => {
  const ref2 = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref2,
    container: reff,
    offset: ["100% end", "start 0"],
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
};
Item.displayName = "Item";
// export default Item;

interface MyComponentProps {
  myRef: React.RefObject<HTMLDivElement>;
}
const App: React.FC<MyComponentProps> = ({}) => {
  const refC: React.RefObject<HTMLDivElement> = useRef(null);

  return (
    <section id="tre" ref={refC}>
      <Item reff={refC} />
      <Item reff={refC} />
      <Item reff={refC} />
      <Item reff={refC} />
      <Item reff={refC} />
      <Item reff={refC} />
      <Item reff={refC} />
    </section>
  );
};
export default App;
