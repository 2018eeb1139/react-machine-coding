import { useEffect, useState, useRef } from "react";

// Custom hook to handle mouse down/up
export default function usePlayControls(initialX = 0) {
  const [playControls, setPlayControls] = useState({ x: initialX });
  const isDragging = useRef(false);

  useEffect(() => {
    const handleMouseDown = () => {
      isDragging.current = true;
      // Option: Trigger immediate action on hold
      setPlayControls((prev) => ({ ...prev, x: prev.x - 1 }));
    };

    const handleMouseUp = () => {
      isDragging.current = false;
    };

    // Add listeners to document to catch mouseup outside the element
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return playControls;
}

// Usage Example
