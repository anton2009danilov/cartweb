import React, { useState } from "react";
import styles from "./FieldWithMoveablePoint.module.css";

const FieldWithMoveablePoint: React.FC  = () => {
  const [circleX, setCircleX] = useState(30);
  const [circleY, setCircleY] = useState(30);
  const onClickRect = (e: React.MouseEvent<SVGRectElement, MouseEvent> ) => {
    e.preventDefault();
    // setCircleX(e.pageX);
    // setCircleY(e.pageY);
    setCircleX(e.nativeEvent.offsetX);
    setCircleY(e.nativeEvent.offsetY);
    console.log(e.nativeEvent.pageX);
    console.log(e.nativeEvent.offsetX);
    console.log(e.nativeEvent.pageY);
    console.log(e.nativeEvent.offsetY);
    // console.log(e);
  };

  return (
    <div className={styles.container}>
      <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="300" height="300" fill="#c0c0fa" onClick={ (e) => onClickRect(e) }/>
        <circle id="point" cx={ circleX } cy={ circleY } r="3" fill="#ff0000"/>
      </svg>
    </div>
  )
};

export default FieldWithMoveablePoint;