import { useState } from "react";

export default function Calculator() {
  const [val, setVal] = useState("");
  const arr = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    "C",
    "=",
    "+",
  ];

  const handleChange = (e) => {
    const value = e.target.value;
    if (value) setVal(value);
  };
  const handleSubmit = (e) => {
    e?.preventDefault();
    try {
      const ans = eval(val);
      setVal(ans);
    } catch (error) {
      alert("Invalid input");
    }
  };
  const handleClick = (e) => {
    const value = e.target.id;
    if (value === "=") {
      handleSubmit();
    } else if (value === "C") {
      setVal("");
    } else {
      setVal((val) => val + value);
    }
  };
  return (
    <div className="calculator">
      <h1>Calculator</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" value={val} onChange={handleChange} />

        <div className="calculator-btns" onClick={handleClick}>
          {arr.map((value, idx) => (
            <button key={idx} id={value} type="button">
              {value}
            </button>
          ))}
        </div>
      </form>
    </div>
  );
}
