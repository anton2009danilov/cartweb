import React from "react";
import styles from "./Fields.module.css";

interface IFieldWithPointsGenerationState {
  pointsList: Array<any>,
  pointElements: Object,
  nextPointElementKey: number,
}

export class FieldWithPointsGeneration extends React.Component<any, IFieldWithPointsGenerationState> {
  constructor(props: any) {
    super(props);
    this.state = {
      pointsList: [],
      pointElements: [],
      nextPointElementKey: 0,
    }
  }

  onClickRect(e: React.MouseEvent<HTMLDivElement, MouseEvent> ) {
    e.preventDefault();
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    const key = this.state.nextPointElementKey;
    const pointsList = [...this.state.pointsList, { x, y }];
    const pointElements = pointsList.map((el: { x: number, y: number, key: number}) => (
      <circle id="point" key={ el.key} cx={ el.x } cy={ el.y } r="3" fill="#ff0000"/>
    ));

    this.setState({
      pointsList,
      pointElements,
      nextPointElementKey: key + 1,
    });
  };
  
  render() {
    return (
      <div className={styles.container} onClick={ (e) => this.onClickRect(e) }>
        <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="300" height="300" fill="#c0c0fa"/>
          { this.state.pointElements }
        </svg>
      </div>
    );
  }
}
