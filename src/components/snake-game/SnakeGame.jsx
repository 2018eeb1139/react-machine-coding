import { useEffect, useRef, useState } from "react";

const GRID_SIZE = 15;
const GAME_GRID = Array.from({ length: GRID_SIZE }, () =>
  new Array(GRID_SIZE).fill(""),
);

const generateFood = () => {
  const x = Math.floor(Math.random() * GRID_SIZE);
  const y = Math.floor(Math.random() * GRID_SIZE);
  return [x, y];
};

const INITIAL_SNAKE = [[5, 5]];

export default function SnakeGame() {
  const [snakeBody, setSnakeBody] = useState(INITIAL_SNAKE);
  const foodRef = useRef(generateFood());
  console.log();
  const directionRef = useRef([1, 0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSnakeBody((prevSnakeBody) => {
        const newHead = [
          prevSnakeBody[0][0] + directionRef.current[0],
          prevSnakeBody[0][1] + directionRef.current[1],
        ];
        if (
          newHead[0] < 0 ||
          newHead[0] >= GRID_SIZE ||
          newHead[1] < 0 ||
          newHead[1] >= GRID_SIZE ||
          prevSnakeBody.some(([x, y]) => newHead[0] === x && newHead[1] === y)
        ) {
          directionRef.current = [1, 0];
          return INITIAL_SNAKE;
        }
        const copySnakeBody = structuredClone(prevSnakeBody);
        if (
          newHead[0] === foodRef.current[0] &&
          newHead[1] === foodRef.current[1]
        ) {
          foodRef.current = generateFood();
        } else {
          copySnakeBody.pop();
        }
        copySnakeBody.unshift(newHead);
        return copySnakeBody;
      });
    }, 100);

    const handleKeyDown = (e) => {
      const key = e.key;
      if (key === "ArrowUp" && directionRef.current[1] != 1) {
        directionRef.current = [0, -1];
      } else if (key === "ArrowDown" && directionRef.current[1] != -1) {
        directionRef.current = [0, 1];
      } else if (key === "ArrowLeft" && directionRef.current[0] != 1) {
        directionRef.current = [-1, 0];
      } else if (key === "ArrowRight" && directionRef.current[0] != -1) {
        directionRef.current = [1, 0];
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const isSnakeBody = (xc, yc) => {
    return snakeBody.some(([x, y]) => {
      return x === xc && y === yc;
    });
  };

  return (
    <div className="container">
      {GAME_GRID.map((row, yc) =>
        row.map((cell, xc) => (
          <div
            className={`cell ${isSnakeBody(xc, yc) && "snake"} ${
              foodRef.current[0] === xc && foodRef.current[1] === yc && "food"
            }`}
            key={`${yc}-${xc}`}
          ></div>
        )),
      )}
    </div>
  );
}
