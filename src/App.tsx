import React from 'react';
import logo from './logo.svg';
import { FieldWithMoveablePoint } from './components/Fields/FieldWithMoveablePoint';
import FieldWithPointsGeneration from './components/Fields/FieldWithPointsGeneration';
import { Graph } from './components/Graph/Graph';
import './App.css';

function App() {
  return (
    <div className="App">
      <FieldWithMoveablePoint/>
      <FieldWithPointsGeneration/>
      <Graph values={ [1, 2, 3 ,4, 5] }/>
    </div>
  );
}

export default App;
