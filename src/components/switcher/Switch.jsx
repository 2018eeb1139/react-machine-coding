import "./styles.css";
import { useState } from "react";

export default function App() {
  const [show, setShow] = useState(false);

  const handleSwitch = () => {
    setShow((prev) => !prev);
  };
  return (
    <>
      <div onClick={handleSwitch} className="switch">
        <span
          classname="on-off"
          style={{
            transform: show ? "translateX(3px)" : "translateX(30px)",
          }}
        >
          {show ? "OFF" : "ON"}
        </span>
        <div
          className="switch-button"
          style={{
            transform: show ? "translateX(34px)" : "translateX(1px)",
          }}
        ></div>
      </div>
    </>
  );
}
