import { useEffect, useRef, useState } from "react";
import "./styles.css";

export default function App() {
  const [value, setValue] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef();
  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setValue((prev) => prev + 1);
      }, 500);
    }
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isRunning]);

  const handleStop = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  return (
    <div className="App">
      <h4>{value}</h4>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}
