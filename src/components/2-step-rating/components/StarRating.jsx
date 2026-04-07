import { useState } from "react";

export default function StarRating({ starCount = 5 }) {
  const [index, setIndex] = useState();
  const [hover, setHover] = useState();

  return (
    <div className="">
      <div>Please Provide rating.</div>
      {new Array(starCount).fill(0).map((_, idx) => (
        <span
          key={idx}
          className={`${idx <= index || idx <= hover ? "gold" : ""}`}
          onMouseEnter={() => setHover(idx)}
          onClick={() => setIndex(idx)}
          onMouseLeave={() => setHover(-1)}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
}
