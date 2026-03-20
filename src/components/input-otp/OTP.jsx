import { useEffect, useRef, useState } from "react";

export default function OTP({ otpLength = 6 }) {
  const [otpFields, setOtpFields] = useState(new Array(otpLength).fill(""));
  const ref = useRef([]);
  // console.log(ref);
  useEffect(() => {
    ref.current[0].focus();
  }, []);
  const handleKeyDown = (e, index) => {
    const key = e.key;
    const copyOtpfields = [...otpFields];
    if (key === "ArrowLeft") {
      if (index > 0) {
        ref.current[index - 1].focus();
      }
    }
    if (key === "ArrowRight") {
      if (index + 1 < otpLength) {
        ref.current[index + 1].focus();
      }
    }
    if (key === "Backspace") {
      // console.log("Delete");
      copyOtpfields[index] = "";
      setOtpFields(copyOtpfields);
      if (index > 0) {
        ref.current[index - 1].focus();
      }
    }
    if (isNaN(key)) {
      return;
    }
    console.log(key, index);

    copyOtpfields[index] = key;
    if (index + 1 < otpLength) {
      ref.current[index + 1].focus();
    }
    setOtpFields(copyOtpfields);
  };

  const handlePaste = (e) => {
    const data = e.clipboardData.getData("text");
    if (isNaN(data) || data.length !== length) {
      return;
    }
    const pasteCode = data.split("");
    setOtpFields(pasteCode);
    ref.current[length - 1].focus();
  };

  return (
    <div className="">
      {otpFields.map((value, index) => (
        <input
          key={index}
          type="text"
          ref={(currentInput) => (ref.current[index] = currentInput)}
          value={value}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={handlePaste}
        />
      ))}
    </div>
  );
}
