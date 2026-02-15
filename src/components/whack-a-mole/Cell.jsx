import { useState } from "react";
import { generatePosition } from "../utils/moleUtils";

export default function Cell({
  row,
  col,
  molePos,
  setScore,
  setMolePos,
  size,
}) {
  const [hammerFlag, setHammerFlag] = useState(false);

  const handleClick = () => {
    setHammerFlag(true);
    if (molePos[0] === row && molePos[1] === col) {
      setScore((prev) => prev + 10);
      setTimeout(() => {
        setMolePos(generatePosition(size));
      }, 100);
    }
    setTimeout(() => {
      setHammerFlag(false);
    }, 300);
  };

  return (
    <div className="cell" onClick={handleClick}>
      {molePos[0] === row && molePos[1] === col && "👻"}
      {hammerFlag && <div className="hammer">{"🔨"}</div>}
    </div>
  );
}
