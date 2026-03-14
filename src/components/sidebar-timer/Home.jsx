import { useEffect, useRef, useState, useLayoutEffect } from "react";

export default function Home() {
  const [timer, setTimer] = useState(0);
  const [startTimer, setStartTimer] = useState(false);
  const timerRef = useRef(null);

  useLayoutEffect(() => {
    const time = localStorage.getItem("timer");
    console.log("LayoutEffect: ", time);
    setTimer(parseInt(time) || 0);
    setStartTimer(true);
  }, []);

  useEffect(() => {
    if (startTimer) {
      localStorage.setItem("timer", timer);
      timerRef.current = setTimeout(() => {
        setTimer((prev) => {
          return prev + 1;
        });
      }, 1000);
    }

    return () => {
      clearTimeout(timerRef.current);
    };
  }, [timer, startTimer]);

  return (
    <div className="">
      <p>Home</p>
      Time : {timer}
    </div>
  );
}
