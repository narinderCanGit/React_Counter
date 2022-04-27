import "../App.css";
import React, { useState } from "react";

function Counter() {
  const max = 1000;
  const [count, setCount] = useState(1);
  const increment = function () {
    if (parseInt(count) < max) {
      setCount(parseInt(count) + 1);
    }
  };

  const decrement = function () {
    setCount(parseInt(count) - 1);
  };

  const handleChange = function (e) {
    setCount(e.target.value);
  };

  return (
    <div id="container">
      <span id="first">
        <button onClick={decrement}>-</button>
      </span>
      <span id="second">
        <input value={count} onChange={handleChange} />
      </span>
      <span id="third">
        <button onClick={increment}>+</button>
      </span>
    </div>
  );
}

export default Counter;
