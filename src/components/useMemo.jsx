import { useMemo, useState } from "react";
import "./styles.css";

export default function App() {
  const [number, setNumber] = useState(1);
  const [count, setCount] = useState(0);

  const expensiveCalculation = (num) => {
    console.log("Calculating....");
    for (let i = 0; i < 10; i++) {
      num = num + i;
    }
    return num;
  };

  const memoizedValue = useMemo(() => expensiveCalculation(number), [number]);

  return (
    <div className="App">
      <div className="">
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(Number(e.target.value))}
        />
        <p>Expensive Calculation: {memoizedValue}</p>
      </div>
      <div className="">
        <button onClick={() => setCount((c) => c + 1)}>Click Increment</button>
        <p>Count: {count}</p>
      </div>
    </div>
  );
}

//When you click "Increment Count", the component re-renders, but "Calculating..." is not logged to the console because the useMemo dependencies (number) haven't changed. The memoized value is reused.
