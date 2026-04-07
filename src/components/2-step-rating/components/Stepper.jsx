import { useState } from "react";
import Toast from "./Toast";
import { useNavigate } from "react-router-dom";

export default function Stepper({ steps }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();
  const handlePrev = () => {
    setCurrentStep((prev) => {
      if (prev === 0) {
        return 0;
      } else {
        return prev - 1;
      }
    });
  };
  const handleNext = () => {
    setCurrentStep((prev) => {
      if (prev === 1) {
        return 1;
      } else {
        return prev + 1;
      }
    });
  };

  const handleSubmit = () => {
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
      navigate("/");
    }, 3000);
  };
  return (
    <div className="stepper-container">
      {showToast && <Toast />}
      <div className="steps">
        {steps.map(({ label }, idx) => (
          <div className="stepper-label" key={idx}>
            <div
              className={`stepper-number ${idx <= currentStep ? "active" : ""}`}
            >
              {idx + 1}
              {idx < steps.length - 1 && (
                <span
                  className={`stepper-line ${
                    idx < currentStep ? "active-line" : ""
                  }`}
                ></span>
              )}
            </div>
            {label}
          </div>
        ))}
      </div>
      <div className="stepper-content">{steps[currentStep].content}</div>
      <div className="stepper-action">
        <button onClick={handlePrev}>Prev</button>
        {currentStep === steps.length - 1 ? (
          <button onClick={handleSubmit}>Submit</button>
        ) : (
          <button onClick={handleNext}>Next</button>
        )}
      </div>
    </div>
  );
}
