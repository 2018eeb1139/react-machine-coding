import { useEffect, useRef, useState } from "react";
import "./TypingEffect.css";

export default function TypingEffect({ text, delay }) {
  const [displayText, setDisplayText] = useState(text);
  const velocityRef = useRef({ speed: 1, endIndex: 0 });
  useEffect(() => {
    const interval = setInterval(() => {
      if (velocityRef.current.endIndex === text.length) {
        velocityRef.current.speed = -1;
      } else if (velocityRef.current.endIndex === 0) {
        velocityRef.current.speed = 1;
      }
      velocityRef.current.endIndex += velocityRef.current.speed;
      setDisplayText(text.slice(0, velocityRef.current.endIndex));
    }, delay);
    return () => {
      clearInterval(interval);
    };
  }, [text, delay]);
  return (
    <h1 className="">
      {displayText}
      <span>|</span>
    </h1>
  );
}
