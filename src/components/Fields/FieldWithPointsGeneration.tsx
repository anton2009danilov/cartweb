import React, { useState } from "react";
import styles from "./Fields.module.css";

const FieldWithPointsGeneration: React.FC  = () => {
  const [pointsList, setPointsList] = useState({ points: [{ x: 1, y: 2 }] });
  const onClickRect = (e: React.MouseEvent<HTMLDivElement, MouseEvent> ) => {
    e.preventDefault();
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    const points = [...pointsList.points, { x, y }];
    setPointsList({ points });
  };

const pointElements = pointsList.points.map((el) => (
  <circle id="point" cx={ el.x } cy={ el.y } r="3" fill="#ff0000"/>
));

  return (
    <div className={styles.container} onClick={ (e) => onClickRect(e) }>
      <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="300" height="300" fill="#c0c0fa"/>
        { pointElements }
      </svg>
    </div>
  )
};

export default FieldWithPointsGeneration;