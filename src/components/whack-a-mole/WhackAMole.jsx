import { useEffect, useState } from "react";
import { generatePosition } from "../utils/moleUtils";
import Cell from "./Cell";

export default function WhackAMole({ size = 3, delay }) {
  const [molePos, setMolePos] = useState(generatePosition(size));
  const [score, setScore] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setMolePos(generatePosition(size));
    }, delay);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <h1>Score: {score}</h1>
      <div className="">
        {Array.from({ length: size }).map((value, row) => {
          return (
            <div className="row">
              {Array.from({ length: size }).map((_, col) => {
                return (
                  <Cell
                    key={`${row},${col}`}
                    row={row}
                    col={col}
                    molePos={molePos}
                    setScore={setScore}
                    setMolePos={setMolePos}
                    size={size}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
}
