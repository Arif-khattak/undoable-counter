import React, { useState } from "react";

function Counter({ count, handleCount }) {
  return (
    <div className="counter">
      <div className="decrement">
        <button onClick={handleCount} id="subHund">
          -100
        </button>
        <button onClick={handleCount} id="subTen">
          -10
        </button>
        <button onClick={handleCount} id="subOne">
          -1
        </button>
      </div>
      <div className="output">
        <button>{count}</button>
      </div>
      <div className="increment">
        <button onClick={handleCount} id="addOne">
          +1
        </button>
        <button onClick={handleCount} id="addTen">
          +10
        </button>
        <button onClick={handleCount} id="addHund">
          +100
        </button>
      </div>
    </div>
  );
}

export default Counter;
