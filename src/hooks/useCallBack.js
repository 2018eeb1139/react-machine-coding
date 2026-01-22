import { useCallback, useState } from "react";
import React from "react";

const Child = React.memo(({ onClick }) => {
  console.log("Child re-rendered");
  return <button onClick={onClick}>Click</button>;
});

export default function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Clicked");
  }, []);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <br />
      {count}
      <br />
      <Child onClick={handleClick} />
    </>
  );
}
