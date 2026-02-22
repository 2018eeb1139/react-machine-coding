import { useEffect, useRef } from "react";
import { STATUS } from "./constant";

export default function Checkbox({ id, label, status, handleChange }) {
  const checkboxRef = useRef();
  useEffect(() => {
    if (status === STATUS.INDETERMINATE) {
      checkboxRef.current.indeterminate = true;
    } else {
      checkboxRef.current.indeterminate = false;
    }
  }, [status]);
  return (
    <div className="">
      <input
        ref={checkboxRef}
        type="checkbox"
        checked={status === STATUS.CHECKED}
        onChange={() => handleChange(id)}
      />
      <label htmlFor={label}>{label}</label>
    </div>
  );
}
