import { useEffect, useRef, useState } from "react";

export default function GridLights({ size }) {
  const [grid, setGrid] = useState(
    Array.from({ length: 3 }, () => new Array(size).fill(false)),
  );
  const queue = useRef([]);
  const timerId = useRef([]);
  const handleClick = (rowIdx, colIdx, flag) => {
    if (timerId.current.length > 0 && flag) return;
    if (grid[rowIdx][colIdx] && flag) return;
    setGrid((prevGrid) => {
      const copyGrid = structuredClone(prevGrid);
      copyGrid[rowIdx][colIdx] = flag;
      if (flag) queue.current.push([rowIdx, colIdx]);
      return copyGrid;
    });
  };

  useEffect(() => {
    if (queue.current.length === 9) {
      console.log("start removing");
      queue.current.forEach(([rowIdx, colIdx], index) => {
        timerId.current[index] = setTimeout(
          () => {
            handleClick(rowIdx, colIdx, false);

            if (index === timerId.current.length - 1) {
              timerId.current = [];
            }
          },
          1000 * (index + 1),
        );
      });
      queue.current = [];
    }
  }, [grid]);

  useEffect(() => {
    return () => {
      timerId.current.forEach((id) => clearTimeout(id));
    };
  }, []);
  return (
    <div className="container">
      {grid.map((row, rowIdx) =>
        row.map((col, colIdx) => (
          <div
            className={`cell ${col ? "active" : ""}`}
            key={`${rowIdx}-${colIdx}`}
            onClick={() => handleClick(rowIdx, colIdx, true)}
          ></div>
        )),
      )}
    </div>
  );
}
