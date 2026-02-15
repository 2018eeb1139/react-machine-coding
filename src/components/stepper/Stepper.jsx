import { useState } from "react";

const Stepper = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };
  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };
  return (
    <div className="stepper">
      <div className="">
        {steps.map(({ label }, index) => (
          <div className="">
            <div key={index} className="stepper-container">
              <div
                className={`step-number ${
                  index <= currentStep ? "active" : null
                }`}
              >
                {index + 1}
                {index < steps.length - 1 && (
                  <div
                    className={`stepper-line ${
                      index <= currentStep ? "active" : null
                    }`}
                  ></div>
                )}
              </div>
              <div className="stepper-label">{label}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="stepper-content">{steps[currentStep].content}</div>
      <div className="stepper-controls">
        <button onClick={handleNext}>Continue</button>
        <button onClick={handleBack}>Back</button>
      </div>
    </div>
  );
};

export default Stepper;
