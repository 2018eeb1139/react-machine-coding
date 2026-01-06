import { useState } from "react";
import "./styles.css";

const config = [
  [1, 1, 0, 1],
  [0, 1, 0, 0],
  [0, 1, 1, 1],
  [0, 1, 1, 1],
];

// Asked in Uber

export default function GridLight() {
  const [stack, setStack] = useState(new Map());
  // console.log(stack);
  const handleClick = (rowIndex, colIndex) => {
    if (config[rowIndex][colIndex] === 1) {
      setStack((prevStack) => {
        const copyStack = new Map(prevStack);
        const key = `${rowIndex}-${colIndex}`;
        copyStack.set(key, true);
        return copyStack;
      });
    }
  };

  const startRollBack = () => {
    const intervalId = setInterval(() => {
      setStack((prevStack) => {
        const lastKey = Array.from(prevStack.keys()).pop();
        const newStack = new Map(prevStack);
        newStack.delete(lastKey);
        if (!newStack.size) {
          clearInterval(intervalId);
        }
        return newStack;
      });
    }, 1000);
  };

  const selectedGrid = config.flat().reduce((a, b) => {
    return a + b;
  }, 0);

  if (selectedGrid === stack.size) {
    console.log("all lights selected");
    startRollBack();
  }

  return (
    <div className="container">
      {config.map((row, rowIndex) => (
        <div className="row-container" key={rowIndex}>
          {row.map((col, colIndex) => {
            const key = `${rowIndex}-${colIndex}`;
            return (
              <div
                className={`col-container ${col === 1 ? "on" : "off"} ${
                  stack.has(key) && "active"
                }`}
                key={colIndex}
                onClick={(e) => handleClick(rowIndex, colIndex)}
              ></div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
