import { useState } from "react";
import Circle from "./Circle";
import { COLORS } from "./constant";

const getRandomColor = () => {
  const idx = Math.floor(Math.random() * COLORS.length);
  return COLORS[idx];
};

export default function Board() {
  const [circles, setCircles] = useState([]);
  const [history, setHistory] = useState([]);
  console.log(circles);
  const handleClick = (e) => {
    const obj = {
      id: new Date().getTime(),
      x: e.clientX,
      y: e.clientY,
      bgColor: getRandomColor(),
    };

    setCircles((prev) => [...prev, obj]);
  };
  const handleUndo = (e) => {
    e.stopPropagation();
    const copyCircles = [...circles];
    if (circles.length > 0) {
      const last = copyCircles.pop();
      setHistory((prev) => [...prev, last]);
      setCircles(copyCircles);
    }
  };
  const handleRedo = (e) => {
    e.stopPropagation();
    const copyHistory = [...history];
    if (copyHistory.length > 0) {
      const last = copyHistory.pop();
      setCircles((prev) => [...prev, last]);
      setHistory(copyHistory);
    }
  };
  const handleReset = (e) => {
    e.stopPropagation();
    setCircles([]);
    setHistory([]);
  };

  return (
    <div className="board-container" onClick={handleClick}>
      <button onClick={handleUndo}>Undo</button>
      <button onClick={handleRedo}>Redo</button>
      <button onClick={handleReset}>Reset</button>
      {circles.map((circle) => (
        <Circle key={circle.id} circle={circle} />
      ))}
    </div>
  );
}
