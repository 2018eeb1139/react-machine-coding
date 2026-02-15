import { useState, useRef, useEffect } from "react";
import "./styles.css";

const OTP_DIGIT_COUNT = 6;

export default function InputOtp() {
  const [inputArr, setInputArr] = useState(new Array(OTP_DIGIT_COUNT).fill(""));
  const refArr = useRef([]);

  const [isLast, setIsLast] = useState(false);

  useEffect(() => {
    refArr.current[0]?.focus();
  }, []);
  const handleChange = (value, idx) => {
    // console.log(value);
    if (isNaN(value)) return;
    const newValue = value.trim();
    const newArr = [...inputArr];
    newArr[idx] = newValue.slice(-1);
    setInputArr(newArr);
    if (idx === inputArr.length - 1) {
      setIsLast(true);
    } else {
      setIsLast(false);
    }
    newValue && refArr.current[idx + 1]?.focus();
  };

  const handleKeyDown = (e, idx) => {
    if (!e.target.value && e.key === "Backspace") {
      refArr.current[idx - 1]?.focus();
    }
  };

  return (
    <div className="App">
      <h1>Validate OTP</h1>
      {inputArr.map((value, idx) => (
        <input
          type="text"
          key={idx}
          value={inputArr[idx]}
          ref={(input) => (refArr.current[idx] = input)}
          className={`otp-input ${idx === 0 && "first"} ${
            idx === inputArr.length - 1 && "last"
          }`}
          onChange={(e) => handleChange(e.target.value, idx)}
          onKeyDown={(e) => handleKeyDown(e, idx)}
        />
      ))}
      <div className="button-div">
        <button className={`btn ${isLast && "active"}`}>Submit</button>
      </div>
    </div>
  );
}
