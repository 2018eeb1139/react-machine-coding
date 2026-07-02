import { useState, useRef } from "react";

export default function InputOtp({ otpLength = 6 }) {
  const [otpFields, setOtpFields] = useState(new Array(otpLength).fill(""));
  const [loading, setLoading] = useState(false);
  const otpValues = otpFields.join("");
  //   console.log(otpValues);
  const ref = useRef([]);
  // console.log(ref);

  const fakeApi = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (otpValues === "123456") {
          resolve("OTP Verified Successfully.");
        } else {
          reject("Invalid OTP");
        }
      }, 2000);
    });
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const msg = await fakeApi();
      alert(msg);
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e, index) => {
    const key = e.key;
    // console.log(key);

    const copyOtpFields = [...otpFields];

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
      copyOtpFields[index] = "";
      setOtpFields(copyOtpFields);
      if (index > 0) {
        ref.current[index - 1].focus();
      }
    }
    if (isNaN(key)) return;

    copyOtpFields[index] = key;
    if (index + 1 < otpLength) {
      ref.current[index + 1].focus();
    }
    setOtpFields(copyOtpFields);
  };

  const handlePaste = (e) => {
    const data = e.clipboardData.getData("text");
    if (isNaN(data) || data.length !== otpLength) {
      return;
    }
    const pasteCode = data.split("");
    setOtpFields(pasteCode);
    ref.current[otpLength - 1].focus();
  };

  return (
    <form className="" onSubmit={handleSubmit}>
      <div className="input-container">
        {otpFields.map((value, index) => (
          <input
            key={index}
            type="text"
            value={value}
            ref={(currInput) => (ref.current[index] = currInput)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onChange={() => {}}
            onPaste={handlePaste}
          />
        ))}
      </div>
      <button onClick={handleSubmit} disabled={otpValues.length < 6}>
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
