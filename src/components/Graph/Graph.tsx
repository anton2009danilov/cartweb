import React from 'react';
import styles from './Graph.module.css';

const Graph: React.FC<{ values: Array<number> }> = (props) => {
  const calcValuesParams = (valuesList: Array<number>) => valuesList.reduce(
    (acc: {valuesList: Array<{ x: number, y: number, width: number, height: number }>, counter: number}, val) => {
      const height = val * 20;
      const width = 20;
      const x = acc.counter * 30;
      const y = 0;
      const counter = acc.counter + 1;
      return { valuesList: [...acc.valuesList, { x, y, width, height}], counter };
    }, { valuesList: [], counter: 0 });

  const valuesList = calcValuesParams(props.values).valuesList;
  
  const valuesElements = valuesList.map((el) => <rect x={ el.x} y={ el.y } width={ el.width } height={ el.height } fill="red"/>);
  console.log(styles);

  return (
    <div className={styles.container}>
      <svg id={ styles.graph_field} width="300" height="300" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="300" height="300" fill="#c0c0fa"/>
        { valuesElements }
      </svg>
    </div>
  )
};

export default Graph;