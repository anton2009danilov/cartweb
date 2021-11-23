import React from 'react';
import logo from './logo.svg';
import FieldWithMoveablePoint from './components/FieldWithMoveablePoint';
import FieldWithPointsGeneration from './components/FieldWithPointsGeneration';
import './App.css';

function App() {
  return (
    <div className="App">
      <FieldWithMoveablePoint/>
      <FieldWithPointsGeneration/>
    </div>
  );
}

export default App;
