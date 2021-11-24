import React from 'react';
import styles from './Graph.module.css';

interface IGraphProps {
  values: Array<number>,
}

interface IGraphState {
  dashLineX: number,
  valueElements: Array<object>
}

export class Graph extends React.Component<IGraphProps, IGraphState> {
  constructor(props: IGraphProps) {
    super(props);
    const valuesList = this.calcValuesParams(props.values).valuesList;
    
    const valueElements = valuesList.map((el) => (
      <rect 
        rx="5" ry="5"
        x={ el.x} y={ el.y }
        width={ el.width } height={ el.height }
        fill="url('#myGradient')"
      >
        <animate attributeName="height" from="0" to={ el.height } dur="0.5s" fill="freeze" />
      </rect>)
    );

    this.state = {
      dashLineX: 0,
      valueElements,
    }
  };

  calcValuesParams(valuesList: Array<number>){
    return valuesList.reduce(
      (acc: {
        valuesList: Array<{ x: number, y: number, width: number, height: number }>,
        counter: number
        }, val) => {
        const height = val * 20 + 5;
        const width = 20;
        const x = acc.counter ? (acc.counter * 30 + 10) : 10;
        const y = -5;
        const counter = acc.counter + 1;
        return { valuesList: [...acc.valuesList, { x, y, width, height}], counter };
    }, { valuesList: [], counter: 0 });
  }

  handleMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.preventDefault();
    const x = e.nativeEvent.offsetX;
    this.setState({ dashLineX: x });
    console.log(this);
  }

  render() {
    return  (
      <div className={styles.container} onMouseMove={ (e) => this.handleMouseMove(e)}>
        <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg" transform="scale(1, -1)">
          <defs>
            <linearGradient id="myGradient" gradientTransform="rotate(90)">
              <stop offset="5%"  stopColor="gold" />
              <stop offset="95%" stopColor="red" />
            </linearGradient>
          </defs>
          <rect x="0" y="0" width="300" height="300" fill="#c0c0fa"/>

          { this.state.valueElements }

          <line x1={ this.state.dashLineX } y1="0" x2={ this.state.dashLineX } y2="300" stroke="rgba(149, 165, 166, 1)" stroke-dasharray="3"/>
        </svg>
      </div>
    )
  }
}
