import "./styles.css";
import { useState } from "react";
import Questions from "./components/Questions";
import questions from "./data/data.json";

export default function App() {
  const [currentQues, setCurrQues] = useState(0);
  const [userAns, setUserAns] = useState([]);
  console.log(userAns);
  const correctAnswers = userAns.filter((ans) => ans).length;
  const percentage = (correctAnswers / questions.length) * 100;

  const resetQuiz = () => {
    setCurrQues(0);
    setUserAns([]);
  };
  return (
    <div className="App">
      <h1>Welcome to the quiz</h1>
      <h2>All the Best!</h2>
      {currentQues < questions.length && (
        <Questions
          ques={questions[currentQues]}
          userAns={userAns}
          currentQues={currentQues}
          setCurrQues={setCurrQues}
          setUserAns={setUserAns}
        />
      )}
      {currentQues === questions.length && (
        <>
          <h3>Thanks for Completed the quiz.</h3>
          <h6>
            You have answered {correctAnswers} question(s) correctly out of{" "}
            {questions.length} questions.
          </h6>
          <h5>
            {percentage < 30 ? (
              <span style={{ color: "red" }}>FAIL {percentage}%</span>
            ) : (
              <span style={{ color: "lightgreen" }}>PASS {percentage}%</span>
            )}{" "}
          </h5>

          <button onClick={resetQuiz}>Try Again</button>
        </>
      )}
    </div>
  );
}
