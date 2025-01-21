import React, { useState } from 'react';
import '../App.css';

function Countvalue() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="App text-[--theme-color1]  m-7">
      <h1 className='font-bold text-lg'>React Counter</h1>
      <div className="counter">
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
      </div>
      <button onClick={reset} className="reset-btn font-bold border">Reset</button>
    </div>
  );
}

export default Countvalue;
