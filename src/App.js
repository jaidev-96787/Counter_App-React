import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [getCount, setCount] = useState(0);

  const onIncreHandler = () => {
    setCount(getCount + 1);
  };
  const onDecreHandler = () => {
    if (getCount > 0) {
      setCount(getCount - 1);
    } else {
      alert("Sorry, It reach to 0");
      setCount(0);
    }
  };
  return (
    <div className="App">
      <h1> {getCount} </h1>
      <button onClick={onIncreHandler}>Increment</button>
      <button onClick={onDecreHandler}>Decrement</button>
    </div>
  );
};

export default App;
