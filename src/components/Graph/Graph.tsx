import React from 'react';
import styles from './Graph.module.css';

interface IGraphProps {
  values: Array<number>,
}

export class Graph extends React.Component<IGraphProps> {
  valueElements: Array<any>;

  constructor(props: IGraphProps) {
    super(props);
    const valuesList = this.calcValuesParams(props.values).valuesList;
    this.valueElements = valuesList.map((el) => <rect x={ el.x} y={ el.y } width={ el.width } height={ el.height } fill="red"/>);
  };

  calcValuesParams(valuesList: Array<number>){
    return valuesList.reduce(
      (acc: {valuesList: Array<{ x: number, y: number, width: number, height: number }>, counter: number}, val) => {
        const height = val * 20;
        const width = 20;
        const x = acc.counter * 30;
        const y = 0;
        const counter = acc.counter + 1;
        return { valuesList: [...acc.valuesList, { x, y, width, height}], counter };
      }, { valuesList: [], counter: 0 });
    }

  render() {
    return  (
      <div className={styles.container}>
        <svg id={ styles.graph_field} width="300" height="300" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="300" height="300" fill="#c0c0fa"/>
          { this.valueElements }
        </svg>
      </div>
    )
  }
}
