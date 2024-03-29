import React, { useRef, useState } from "react";
import style from "../style/Progress.module.css";
import Button from "./Button";

const Progress = ({ events, progress, length }) => {
  const tooltipRef = useRef();
  const [tooltip, setTooltip] = useState(true);

  const toggleTooltip = () => {
    if (tooltip) {
      setTooltip(false);
      tooltipRef.current.style.display = "block";
      tooltipRef.current.style.left = `calc(${width}% - 65px)`;
    } else {
      setTooltip(true);
      tooltipRef.current.style.display = "none";
    }
  };

  const width = (100 / length) * (progress + 1);
  const { prev, next, submit } = events;
  return (
    <div className={style.progressBar}>
      <div className={style.backButton} onClick={() => prev()}>
        <span className="material-icons-outlined"> arrow_back </span>
      </div>
      <div className={style.rangeArea}>
        <div className={style.tooltip} ref={tooltipRef}>
          {width} Complete!
        </div>
        <div
          className={style.rangeBody}
          onMouseOver={toggleTooltip}
          onMouseLeave={toggleTooltip}
        >
          <div className={style.progress} style={{ width: width + "%" }}></div>
        </div>
      </div>
      <Button className={`button next`} onClick={width === 100 ? submit : next}>
        <span>Next Question</span>
        <span className="material-icons-outlined"> arrow_forward </span>
      </Button>
    </div>
  );
};

export default Progress;
