import { useState } from "react";
import "./Cube.css";

const CubeComponent = () => {
  const [hoverCount, setHoverCount] = useState(0);

  const toggleShape = () => {
    setHoverCount((prevCount) => prevCount + 1);
  };
  const isRing = hoverCount % 2 === 1;

  return (
    <div id="container">
      <div id="stage" style={{ transform: isRing ? "translateZ(-200px)" : "" }}>
        <div
          id="shape"
          className={`${isRing ? "ring" : "cube"} backfaces`}
          onMouseEnter={toggleShape}
        >
          <div className="plane one"></div>
          <div className="plane two"></div>
          <div className="plane three"></div>
          <div className="plane four"></div>
          <div className="plane five"></div>
          <div className="plane six"></div>
          <div className="plane seven"></div>
          <div className="plane eight"></div>
          <div className="plane nine"></div>
          <div className="plane ten"></div>
          <div className="plane eleven"></div>
          <div className="plane twelve"></div>
        </div>
      </div>
    </div>
  );
};

export default CubeComponent;
