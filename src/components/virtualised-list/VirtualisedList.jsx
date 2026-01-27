import { useState } from "react";

export default function VirtualisedList({ list, height, width, itemHeight }) {
  const [indices, setIndices] = useState([0, Math.floor(height / itemHeight)]);
  const visibleList = list.slice(indices[0], indices[1] + 1);
  console.log(visibleList);
  const handleScroll = (e) => {
    const { scrollTop } = e.target;
    console.log(scrollTop);
    const newStartIndex = Math.floor(scrollTop / itemHeight);
    const newEndIndex = newStartIndex + Math.floor(height / itemHeight);
    setIndices([newStartIndex, newEndIndex]);
  };
  return (
    <div
      className=""
      style={{ height, width, background: "gray", overflow: "auto" }}
      onScroll={handleScroll}
    >
      <div
        className=""
        style={{ height: list.length * itemHeight, position: "relative" }}
      >
        {visibleList.map((item, index) => (
          <div
            key={index}
            className=""
            style={{
              height: itemHeight,
              background: "coral",
              borderTop: "2px solid gray",
              textAlign: "center",
              position: "absolute",
              top: (indices[0] + index) * itemHeight,
              width: "100%",
            }}
          >
            {"Item "}
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
