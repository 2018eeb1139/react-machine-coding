import { useEffect, useRef, useState } from "react";

export default function Input({
  id,
  defaultValue = "",
  submit,
  cancel,
  setShowChildren,
}) {
  const [value, setValue] = useState(defaultValue);
  const ref = useRef();
  useEffect(() => {
    ref.current.focus();
  }, []);
  return (
    <>
      <input
        className="label"
        ref={ref}
        value={value}
        type="text"
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            submit(id, value);
            cancel();
          }
        }}
      />
      <span
        className="label"
        onClick={() => {
          submit(id, value);
          cancel();
        }}
      >
        ✅
      </span>
      <span className="label" onClick={cancel}>
        ❌
      </span>
    </>
  );
}
