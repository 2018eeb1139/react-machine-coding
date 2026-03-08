import { useEffect, useRef, useState } from "react";
import "./styles.css";

export default function App() {
  const [products, setProducts] = useState([]);

  const visibleItemsRef = useRef(new Set());
  const debounceTimer = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const value = entry.target.innerText;

          if (entry.isIntersecting) {
            visibleItemsRef.current.add(value);
          } else {
            visibleItemsRef.current.delete(value);
          }
        });

        // debounce logic
        if (debounceTimer.current) {
          clearTimeout(debounceTimer.current);
        }

        debounceTimer.current = setTimeout(() => {
          setProducts([...visibleItemsRef.current]);
        }, 2000);
      },
      { threshold: 0.9 },
    );

    const boxes = document.querySelectorAll(".box");

    boxes.forEach((box) => observer.observe(box));

    return () => {
      observer.disconnect();
      clearTimeout(debounceTimer.current);
    };
  }, []);

  console.log(products);

  return (
    <div className="container">
      {Array.from({ length: 27 }, (_, idx) => (
        <div className="box" key={idx + 1}>
          {idx + 1}
        </div>
      ))}
    </div>
  );
}
