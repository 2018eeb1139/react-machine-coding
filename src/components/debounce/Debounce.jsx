import { useCallback, useState } from "react";
import { debounce } from "lodash";

const Debounce = () => {
  const [increment, setIncrement] = useState(0);
  const [count, setCount] = useState(0);

  const debounced = useCallback(
    debounce(() => {
      setCount((prev) => prev + 1);
    }, 800),
    []
  );

  const onClick = (e) => {
    setIncrement((prev) => prev + 1);
    debounced();
  };

  return (
    <div>
      <button className="border-1 p-1 rounded" onClick={onClick}>
        Increment
      </button>
      <p>button pressed {increment} times.</p>
      <p>button trigerred {count} times.</p>
    </div>
  );
};

export default Debounce;
