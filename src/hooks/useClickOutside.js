import { useEffect } from "react";

export default function useClickOutside(elementRef, handler) {
  useEffect(() => {
    const cb = (e) => {
      if (!elementRef.current?.contains(e.target)) {
        handler();
      }
    };
    document.addEventListener("mousedown", cb);
    return () => {
      document.removeEventListener("mousedown", cb);
    };
  }, [elementRef, handler]);
}
