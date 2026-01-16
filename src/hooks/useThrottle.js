import { useEffect, useRef, useState } from "react";

export default function useThrottle(value, delay) {
  const [throttleValue, setThrottleValue] = useState(value);
  const flagRef = useRef(true);

  useEffect(() => {
    if (flagRef.current) {
      setThrottleValue(value);
      flagRef.current = false;
      setTimeout(() => {
        flagRef.current = true;
      }, delay);
    }
  }, [value, delay]);

  return throttleValue;
}
