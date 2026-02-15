import { useState } from "react";
import QnA from "./QnA";

export default function FAQ({ data }) {
  const [index, setIndex] = useState(-1);
  const handleIndex = (idx) => {
    setIndex((prevIndex) => {
      if (prevIndex === idx) {
        return -1;
      }
      return idx;
    });
  };
  return (
    <div className="">
      <h1>FAQ</h1>
      {data.faqs.map((qna, idx) => (
        <QnA
          qna={qna}
          showAns={idx === index}
          handleIndex={() => handleIndex(idx)}
        />
      ))}
    </div>
  );
}
