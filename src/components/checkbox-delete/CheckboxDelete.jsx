import { useState } from "react";
import "./styles.css";

export default function App() {
  const a = ["play cricket", "play video game", "read book"];
  const [arr, setArr] = useState(a);
  const [checkedArr, setCheckedArr] = useState(
    Array.from({ length: a.length }, (_, idx) => false)
  );

  console.log(checkedArr);

  const handleDelete = (idx) => {
    const arrCopy = [...arr];

    setArr(arrCopy.filter((value, index) => index !== idx));
    setCheckedArr((prev) => prev.filter((value, index) => index !== idx));
  };

  const handleChange = (e, idx) => {
    console.log(e.target.checked, idx);
    setCheckedArr((prevCheckedArray) => {
      const copy = [...prevCheckedArray];
      copy[idx] = e.target.checked;
      return copy;
    });
  };

  return (
    <div className="">
      {arr.map((item, idx) => (
        <p key={item}>
          <input type="checkbox" onChange={(e) => handleChange(e, idx)} />
          {item}
          {checkedArr[idx] && <span onClick={() => handleDelete(idx)}>❌</span>}
        </p>
      ))}
    </div>
  );
}
