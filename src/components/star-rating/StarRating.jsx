import React, { useState } from "react";

const StarRating = ({ startCount = 5 }) => {
  const [index, setIndex] = useState();
  const [hover, setHover] = useState();

  return (
    <div className="">
      {new Array(startCount).fill(0).map((_, idx) => (
        <span
          key={idx}
          className={`text-[24px] cursor-pointer ${
            (hover == -1 && idx <= index) || idx <= hover
              ? "text-yellow-500 transition-all "
              : ""
          }`}
          onClick={() => setIndex(idx)}
          onMouseEnter={() => setHover(idx)}
          onMouseLeave={() => setHover(-1)}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};

export default StarRating;
