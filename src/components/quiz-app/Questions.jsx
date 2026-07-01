import { useRef } from "react";

export default function Questions({
  ques,
  userAns,
  currentQues,
  setCurrQues,
  setUserAns,
}) {
  const buttonRef = useRef([]);

  const handleAnswerClick = (isCorrect, idx) => {
    // console.log(buttonRef.current[idx].style);
    if (isCorrect) {
      buttonRef.current[idx].style.backgroundColor = "lightgreen";
      buttonRef.current[idx].style.textColor = "white";
    } else {
      buttonRef.current[idx].style.backgroundColor = "red";
      buttonRef.current[idx].style.textColor = "white";
    }

    setUserAns((prev) => [...prev, isCorrect]);
    buttonRef.current[idx] = null;
    setTimeout(() => {
      setCurrQues(currentQues + 1);
    }, 100);
  };
  return (
    <div className="container">
      <h4>{ques.question}</h4>
      <div className="answer-options">
        {ques.answerOptions.map((ans, idx) => (
          <button
            ref={(currentBtn) => (buttonRef.current[idx] = currentBtn)}
            key={ans.text}
            onClick={() => handleAnswerClick(ans.isCorrect, idx)}
          >
            {ans.text}
          </button>
        ))}
      </div>
    </div>
  );
}
