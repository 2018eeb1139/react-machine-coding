import React, { useEffect, useState } from "react";

const pad2 = (n) => String(n).padStart(2, "0");
const onlyDigits2 = (v) => v.replace(/\D/g, "").slice(0, 2);

export default function Countdown() {
  // inputs as strings so they’re always controlled
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  const [remaining, setRemaining] = useState(0); // total seconds left
  const [isCounting, setIsCounting] = useState(false);

  // Derive HH:MM:SS from remaining seconds for the live display
  const dH = Math.floor(remaining / 3600);
  const dM = Math.floor((remaining % 3600) / 60);
  const dS = remaining % 60;

  // Start/Resume
  const handleStart = () => {
    // If we already have remaining > 0, just resume
    if (remaining > 0) {
      setIsCounting(true);
      return;
    }

    // Parse and clamp inputs
    const hh = Math.max(0, parseInt(hours || "0", 10) || 0);
    const mmRaw = Math.max(0, parseInt(minutes || "0", 10) || 0);
    const ssRaw = Math.max(0, parseInt(seconds || "0", 10) || 0);
    const mm = Math.min(mmRaw, 59);
    const ss = Math.min(ssRaw, 59);

    const total = hh * 3600 + mm * 60 + ss;
    if (total > 0) {
      setRemaining(total);
      setIsCounting(true);
    }
  };

  // Pause
  const handlePause = () => {
    setIsCounting(false);
  };

  // Reset
  const handleReset = () => {
    setIsCounting(false);
    setRemaining(0);
    setHours("");
    setMinutes("");
    setSeconds("");
  };

  // The ticking effect
  useEffect(() => {
    if (!isCounting) return;

    const id = setInterval(() => {
      setRemaining((prev) => {
        if (prev <= 1) {
          // hit zero on this tick: stop and clear
          clearInterval(id);
          setIsCounting(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(id);
  }, [isCounting]);

  // Sanitize inputs on change (keep 2 digits). For mm/ss clamp on blur.
  const onHoursChange = (e) => setHours(onlyDigits2(e.target.value));
  const onMinutesChange = (e) => setMinutes(onlyDigits2(e.target.value));
  const onSecondsChange = (e) => setSeconds(onlyDigits2(e.target.value));

  const clampOnBlur = (value) => {
    const n = Math.max(0, parseInt(value || "0", 10) || 0);
    return String(Math.min(n, 59));
  };

  return (
    <div className="mx-auto max-w-md p-4">
      <h1 className="text-center font-semibold text-2xl my-4">
        Countdown Timer
      </h1>

      {/* Inputs */}
      <div className="flex justify-between items-start gap-3">
        <div className="flex flex-col items-center gap-2">
          <h4 className="text-[20px]">Hours</h4>
          <input
            type="text"
            inputMode="numeric"
            value={hours}
            placeholder="00"
            onChange={onHoursChange}
            onBlur={() =>
              setHours(String(Math.max(0, parseInt(hours || "0", 10) || 0)))
            }
            disabled={isCounting}
            className="border text-4xl w-[90px] h-[50px] outline-none text-center"
          />
        </div>

        <p className="mt-[26px] text-[44px]">:</p>

        <div className="flex flex-col items-center gap-2">
          <h4 className="text-[20px]">Minutes</h4>
          <input
            type="text"
            inputMode="numeric"
            value={minutes}
            placeholder="00"
            onChange={onMinutesChange}
            onBlur={() => setMinutes(clampOnBlur(minutes))}
            disabled={isCounting}
            className="border text-4xl w-[90px] h-[50px] outline-none text-center"
          />
        </div>

        <p className="mt-[26px] text-[44px]">:</p>

        <div className="flex flex-col items-center gap-2">
          <h4 className="text-[20px]">Seconds</h4>
          <input
            type="text"
            inputMode="numeric"
            value={seconds}
            placeholder="00"
            onChange={onSecondsChange}
            onBlur={() => setSeconds(clampOnBlur(seconds))}
            disabled={isCounting}
            className="border text-4xl w-[90px] h-[50px] outline-none text-center"
          />
        </div>
      </div>

      {/* Live display */}
      <div className="text-center text-3xl mt-6 font-mono">
        {pad2(dH)}:{pad2(dM)}:{pad2(dS)}
      </div>

      {/* Controls */}
      <div className="flex gap-3 justify-center items-center mt-6">
        {isCounting ? (
          <button
            className="bg-red-500 text-white p-2 px-6 rounded"
            onClick={handlePause}
          >
            Pause
          </button>
        ) : (
          <button
            className="bg-green-600 text-white p-2 px-6 rounded"
            onClick={handleStart}
            disabled={
              remaining === 0 &&
              !(
                (hours && parseInt(hours, 10) > 0) ||
                (minutes && parseInt(minutes, 10) > 0) ||
                (seconds && parseInt(seconds, 10) > 0)
              )
            }
          >
            {remaining > 0 ? "Resume" : "Start"}
          </button>
        )}

        <button
          className="bg-yellow-500 text-black p-2 px-6 rounded"
          onClick={handleReset}
          disabled={isCounting && remaining > 0}
          title={isCounting ? "Pause to reset" : "Reset"}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
