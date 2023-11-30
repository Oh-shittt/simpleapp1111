import React, { useState } from 'react';
import '../Styles/App.scss'

const Counter = function () {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  return (
    <div>
      <h1 className='res'>{count}</h1>
      <div className='counterbuttons'>
        <button onClick={increment} className='button'>Increment</button>
        <button onClick={decrement} className='button'>decrement</button>
      </div>
    </div>
  );
};

export { Counter };
