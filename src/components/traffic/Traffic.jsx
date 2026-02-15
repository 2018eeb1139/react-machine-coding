import { useEffect, useState } from "react";
import Signal from "./Signal";

export default function Traffic({
  lights = ["#2dc937", "#e7b416", "	#cc3232"],
}) {
  const [activeIndex, setActiveIndex] = useState(2);
  const messages = ["Let's Go", "Get Ready", "Stop"];
  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prev) => {
        if (prev == 0) {
          return 2;
        } else {
          return prev - 1;
        }
      });
    }, 2000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <>
      {lights.map((color, index) => (
        <Signal
          key={index}
          isActive={index === activeIndex}
          color={color}
          message={messages[index]}
        />
      ))}
    </>
  );
}
