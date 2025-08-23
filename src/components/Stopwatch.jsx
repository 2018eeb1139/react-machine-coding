import React, { useState, useEffect } from "react";

const Stopwatch = () => {
  const [timer, setTimer] = useState(0);
  const [isCounting, setIsCounting] = useState(false);
  //   console.log(isCounting);
  useEffect(() => {
    if (!isCounting) {
      return;
    }
    const interval = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [isCounting]);
  return (
    <div>
      {timer}
      <div className="space-x-4">
        <button
          className="border text-sm p-1 rounded cursor-pointer"
          onClick={() => setIsCounting(!isCounting)}
        >
          {isCounting ? "Stop" : "Start"}
        </button>
        <button
          className="border text-sm p-1 rounded cursor-pointer"
          onClick={() => setTimer(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
