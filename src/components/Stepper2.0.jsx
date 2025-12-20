import { useState } from "react";

const Stepper = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState(0);
  return (
    <div className="stepper">
      <div className="stepper__outer">
        <div className="">
          {steps.map(({ label }, index) => (
            <div key={label} className="stepper__container">
              <div
                className={`step__index ${
                  index <= currentStep ? "active" : ""
                }`}
              >
                {index + 1}
                {index + 1 < steps.length && (
                  <div
                    className={`step__line ${
                      index + 1 <= currentStep ? "active" : ""
                    }`}
                  ></div>
                )}
              </div>
              <div className={`step__label`}>{label}</div>
            </div>
          ))}
        </div>
        <div className="stepper_content">{steps[currentStep].content}</div>
      </div>
      <div className="stepper_buttons">
        <button
          disabled={currentStep == 0}
          onClick={() => setCurrentStep((prev) => prev - 1)}
        >
          Back
        </button>
        <button
          disabled={currentStep == steps.length - 1}
          onClick={() => setCurrentStep((prev) => prev + 1)}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Stepper;
