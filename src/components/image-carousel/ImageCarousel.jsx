import { useEffect, useRef, useState } from "react";
import data from "./data.json";
import "./ImageCarousel.css";
const DATA_LENGTH = data.length;
export default function ImageCarousel() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);
  console.log(index);
  const handleNext = () => {
    setIndex((prev) => {
      if (prev === DATA_LENGTH - 1) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  };
  const handlePrev = () => {
    setIndex((prev) => {
      if (prev === 0) {
        return DATA_LENGTH - 1;
      } else {
        return prev - 1;
      }
    });
  };
  useEffect(() => {
    intervalRef.current = setInterval(handleNext, 3000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);
  return (
    <div
      className="container"
      onMouseEnter={() => clearInterval(intervalRef.current)}
      onMouseLeave={() => {
        intervalRef.current = setInterval(handleNext, 3000);
      }}
    >
      <div className="left-btn" onClick={handlePrev}>
        {"<"}
      </div>
      <img src={data[index]?.download_url} alt="" />
      <div className="right-btn" onClick={handleNext}>
        {">"}
      </div>
    </div>
  );
}
