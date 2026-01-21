import { useEffect, useRef, useState } from "react";

export default function Countdown() {
  const [time, setTime] = useState({
    hour: "",
    minute: "",
    second: "",
  });
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);
  const handleChange = (e, field) => {
    const value = parseInt(e.target.value, 10) || 0;

    const copyTime = { ...time };
    copyTime[field] = value;
    copyTime.minute += Math.floor(copyTime.second / 60);
    copyTime.second = Math.floor(copyTime.second % 60);
    copyTime.hour += Math.floor(copyTime.minute / 60);
    copyTime.minute = Math.floor(copyTime.minute % 60);
    setTime(copyTime);
  };

  const handleStart = () => {
    setIsRunning((prev) => !prev);
  };

  const handleReset = () => {
    console.log("Reset button clicked");
    setIsRunning(false);
    clearInterval(intervalRef);
    setTime({
      hour: "",
      minute: "",
      second: "",
    });
  };

  useEffect(() => {
    if (isRunning) {
      if (
        time.hour.length === 0 &&
        time.minute.length === 0 &&
        time.second.length === 0
      ) {
        // console.log("return");
        return;
      }

      intervalRef.current = setInterval(() => {
        setTime((prevTime) => {
          const copyPrevTime = { ...prevTime };
          copyPrevTime.second--;
          if (copyPrevTime.second < 0) {
            copyPrevTime.minute--;
            copyPrevTime.second = 59;
            if (copyPrevTime.minute < 0) {
              copyPrevTime.hour--;
              copyPrevTime.minute = 59;
              if (copyPrevTime.hour < 0) {
                clearInterval(intervalRef.current);
                setIsRunning(false);
                return {
                  hour: "",
                  minute: "",
                  second: "",
                };
              }
            }
          }
          return copyPrevTime;
        });
      }, 1000);
    }
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isRunning]);

  return (
    <div className="container">
      <div className="input-container">
        <input
          value={time.hour}
          disabled={isRunning}
          type="text"
          placeholder="HH"
          onChange={(e) => handleChange(e, "hour")}
        />
        <span>:</span>
        <input
          value={time.minute}
          disabled={isRunning}
          type="text"
          placeholder="MM"
          onChange={(e) => handleChange(e, "minute")}
        />
        <span>:</span>
        <input
          value={time.second}
          disabled={isRunning}
          type="text"
          placeholder="SS"
          onChange={(e) => handleChange(e, "second")}
        />
      </div>
      <div className="btn-container">
        <button onClick={handleStart}>{isRunning ? "Pause" : "Start"}</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}
