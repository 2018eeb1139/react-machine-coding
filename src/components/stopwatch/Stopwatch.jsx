import React, { useState, useEffect } from "react";

const Stopwatch = () => {
  const [timer, setTimer] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  // type;
  const [isCounting, setIsCounting] = useState(false);
  //   console.log(isCounting);

  useEffect(() => {
    if (!isCounting) return;
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => {
        const copyTimer = { ...prevTimer };
        copyTimer.seconds++;
        if (copyTimer.seconds >= 60) {
          copyTimer.minutes++;
          copyTimer.seconds = 0;
          if (copyTimer.minutes >= 60) {
            copyTimer.hours++;
            copyTimer.minutes = 0;
          }
        }
        return copyTimer;
      });
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [isCounting]);

  return (
    <div>
      {timer.hours.toString().padStart(2, "0")}
      {":"}
      {timer.minutes.toString().padStart(2, "0")}
      {":"}
      {timer.seconds.toString().padStart(2, "0")}
      <div className="">
        <button onClick={() => setIsCounting(true)}>start</button>
        <button onClick={() => setIsCounting(false)}>stop</button>
        <button
          onClick={() =>
            setTimer({
              hours: 0,
              minutes: 0,
              seconds: 0,
            })
          }
        >
          reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
