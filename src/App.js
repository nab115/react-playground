import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function Button(props) {

  return (
  <button onClick={() => props.onClickFunction(props.increment)}>
      +{props.increment}
  </button>
  )
}

function Display(props) {
  return (
      <div>{props.message}</div>
  );
}

function App() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = (iv) => setCounter(counter + iv);
  return (
    <div>
      <Button onClickFunction={incrementCounter} increment={1}/>
      <Button onClickFunction={incrementCounter} increment={5}/>
      <Button onClickFunction={incrementCounter} increment={10}/>
      <Button onClickFunction={incrementCounter} increment={100}/>
      <Display message={counter}/>
    </div>
  );
}

export default App;
