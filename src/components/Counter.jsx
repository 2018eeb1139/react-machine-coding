import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  // console.log("count", count);
  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrementCount = () => {
    setCount((prevCount) => {
      // console.log("prevCount", prevCount);
      if (prevCount == 0) {
        alert("Count cant be less than zero");
        return prevCount;
      } else {
        return prevCount - 1;
      }
    });
  };
  return (
    <div className="flex flex-col">
      {count}
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount} disabled={count <= 0}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
