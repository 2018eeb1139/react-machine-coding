import { useState } from "react";
import Circle from "./components/Circle";
import "./styles.css";

const COLORS = [
  "red",
  "green",
  "blue",
  "orange",
  "purple",
  "brown",
  "black",
  "yellow",
  "lightblue",
  "coral",
];

const generateRandomColor = () =>
  COLORS[Math.floor(Math.random() * COLORS.length)];

const isOverlappingCircles = (c1, c2) => {
  const dist1 = Math.abs(c1.left - c2.left);
  const dist2 = Math.abs(c1.top - c2.top);
  // 1rem = 16px
  const RADII = 32;
  const dist = Math.sqrt(dist1 * dist1 + dist2 * dist2);

  if (dist < RADII * 2) {
    return true;
  } else {
    return false;
  }
};

export default function App() {
  const [circles, setCircles] = useState([]);
  //   console.log(circles);
  const handleClick = (e) => {
    const newCircle = {
      id: new Date().getTime(),
      top: e.clientY,
      left: e.clientX,
      bgColor: "blueviolet",
    };
    setCircles((prev) => {
      for (let i = 0; i < prev.length; i++) {
        if (isOverlappingCircles(newCircle, circles[i])) {
          newCircle.bgColor = "red";
          break;
        }
      }
      return [...prev, newCircle];
    });
  };

  return (
    <div className="board-container" onClick={handleClick}>
      {circles.map((circle) => (
        <Circle {...circle} key={circle.id} />
      ))}
    </div>
  );
}
