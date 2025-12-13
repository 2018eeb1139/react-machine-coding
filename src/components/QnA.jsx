import "./QnA.css";

export default function QnA({ qna, showAns, handleIndex }) {
  return (
    <div className="qna">
      {qna.ques}
      <div className="qna__ans">{showAns && qna.ans}</div>
      <span className="qna__plus" onClick={() => handleIndex()}>
        {showAns ? "-" : "+"}
      </span>
    </div>
  );
}
