import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const handleScroll = () => {};

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (params) => {
        params.forEach((param) => {
          if (param.isIntersecting) {
            // console.log(param.target.innerText);
            setProducts((prev) => {
              if (prev.includes(param.target.innerText)) return prev;
              return [...prev, param.target.innerText];
            });
          }
        });
      },
      { threshold: 0.5 },
    );

    const boxes = document.querySelectorAll(".box");

    if (!boxes) {
      return;
    }
    boxes.forEach((box) => observer.observe(box));

    return () => {
      observer.disconnect();
    };
  }, []);

  console.log(products);

  return (
    <div className="container">
      {Array.from({ length: 27 }, (_, idx) => {
        return (
          <div className="box" key={idx + 1}>
            {idx + 1}
          </div>
        );
      })}
    </div>
  );
}
