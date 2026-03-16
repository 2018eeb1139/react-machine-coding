import { useState } from "react";
import "./styles.css";
import useThrotlle from "./utils/useThrotlle";
const colors = [
  "red",
  "pink",
  "orange",
  "blue",
  "blueviolet",
  "yellow",
  "green",
];

export default function App() {
  const [largeBoxColor, setLargeBoxColor] = useState("");
  const handleClick = (color) => {
    setLargeBoxColor(color);
  };
  const throttleColor = useThrotlle(largeBoxColor, 2000);
  console.log(throttleColor);
  return (
    <div className="container">
      <div
        className="large-box"
        style={{
          backgroundColor: throttleColor,
        }}
      ></div>
      <div className="swatches">
        {colors.map((color, idx) => (
          <div
            className={`box`}
            style={{ backgroundColor: color }}
            key={color}
            onClick={() => handleClick(color)}
          ></div>
        ))}
      </div>
    </div>
  );
}
