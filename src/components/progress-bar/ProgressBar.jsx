import { useEffect, useState } from "react";
import "./ProgressBar.css";

export default function ProgressBar() {
  const [bar, setBar] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("set interval running");
      setBar((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="container">
      <div
        className="progress"
        style={{
          transform: `translateX(${bar - 100}%)`,
        }}
      ></div>
    </div>
  );
}
