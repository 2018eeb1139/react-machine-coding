import { useEffect, useState } from "react";

export default function SelectableGrid({ size = 10 }) {
  const [grid, setGrid] = useState([]);
  const [start, setStart] = useState([]);
  const [end, setEnd] = useState([]);

  const generateGrid = () => {
    const matrix = [];
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        const obj = {
          pos: [i, j],
          isColor: false,
        };
        matrix.push(obj);
      }
    }
    setGrid(matrix);
  };

  useEffect(() => {
    generateGrid();
  }, []);

  useEffect(() => {
    const [startRow, startCol] = start;
    const [endRow, endCol] = end;
    const selectedGrid = [];
    for (
      let i = Math.min(startRow, endRow);
      i <= Math.max(startRow, endRow);
      i++
    ) {
      for (
        let j = Math.min(startCol, endCol);
        j <= Math.max(startCol, endCol);
        j++
      ) {
        selectedGrid.push([i, j].join(""));
      }
    }
    setGrid((prevGrid) => {
      const copyGrid = [...prevGrid];
      const newGrid = copyGrid.map((item) => {
        if (selectedGrid.includes(item.pos.join(""))) {
          return { ...item, isColor: true };
        } else {
          return { ...item };
        }
      });
      //   console.log("newGrid", newGrid);
      setGrid(newGrid);
    });
  }, [start, end]);

  const handleDrag = (e, pos) => {
    e.preventDefault();
    generateGrid();
    // console.log("Drag", pos);
    setStart(pos);
  };
  const handleDragOver = (e, pos) => {
    e.preventDefault();
    // console.log("Drag Over", pos);
    setEnd(pos);
  };
  const handleDrop = (e, pos) => {
    e.preventDefault();

    // console.log("Drop", pos);
  };

  return (
    <div className="container">
      {grid?.map((item, idx) => (
        <div
          className={`cell ${item?.isColor && "selected"}`}
          key={idx}
          draggable
          onDrag={(e) => handleDrag(e, item.pos)}
          onDragOver={(e) => handleDragOver(e, item.pos)}
          onDrop={(e) => handleDrop(e, item.pos)}
        >
          {item?.pos}
        </div>
      ))}
    </div>
  );
}
