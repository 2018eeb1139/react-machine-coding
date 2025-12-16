import React, { useState, useMemo } from "react";

function CalculateComponent() {
  const [number, setNumber] = useState(1);
  const [count, setCount] = useState(0);

  // An artificially expensive function
  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    return num;
  };

  // The value is only recalculated when 'number' changes
  const memoizedValue = useMemo(() => expensiveCalculation(number), [number]);

  return (
    <div>
      <div>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(Number(e.target.value))}
        />
        <p>Expensive Calculation Result: {memoizedValue}</p>
      </div>
      <div>
        <button onClick={() => setCount((c) => c + 1)}>Increment Count</button>
        <p>Count: {count}</p>
      </div>
    </div>
  );
}
