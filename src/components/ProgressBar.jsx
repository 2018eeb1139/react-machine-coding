import { useEffect, useState } from "react";
import "./styles.css";

const ProgressBar = ({ progress }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);
  useEffect(() => {
    setTimeout(() => setAnimatedProgress(progress), 100);
  }, [progress]);
  return (
    <div className="outer">
      <div
        className="inner"
        style={{
          width: `${animatedProgress}%`,
        }}
      >
        <span className="text">{animatedProgress}%</span>
      </div>
    </div>
  );
};

export default ProgressBar;
