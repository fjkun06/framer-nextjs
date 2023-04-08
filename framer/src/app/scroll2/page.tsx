"use client"
import { useScroll } from 'framer-motion';
import { useRef } from 'react';

function App() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll(
    { 
      target: ref, 
      offset: [0, 0.5, 0.9] 
    }
  );

  return (
    <div className="App">
      <div className="content" ref={ref}>
        <h1>Scroll down to see animations!</h1>
      </div>
      <div 
        className="box" 
        style={{ 
          transform: `translateX(${ 100 * scrollYProgress}px)` 
        }}
      >
        <h2>Animated Box</h2>
      </div>
      <div 
        className="second-box" 
        style={{ 
          opacity: scrollYProgress, 
          transform: `translateY(${ -200 * scrollYProgress}px)` 
        }}
      >
        <h2>Second Animated Box</h2>
      </div>
      <div 
        className="third-box" 
        style={{ 
          opacity: scrollYProgress, 
          transform: `translateX(${ -100 * scrollYProgress}px)` 
        }}
      >
        <h2>Third Animated Box</h2>
      </div>
    </div>
  );
}

export default App;
