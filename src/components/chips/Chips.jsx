import React, { useState } from "react";
import "./styles.css";

const Chips = () => {
  const [tags, setTags] = useState([]);
  const [input, setInput] = useState("");

  const handleKeyDown = (e) => {
    // console.log(e);
    if (!input) {
      return;
    }
    if (e.key === "Enter") {
      const newTag = input.trim();
      if (newTag) {
        setTags((prev) => [...prev, input]);
        setInput("");
      }
    }
  };

  const handleClick = (idx) => {
    setTags((prev) => prev.filter((value, index) => index !== idx));
  };
  return (
    <div className="chips">
      <div className="chips-container">
        <label htmlFor="">Tags</label>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chips-input"
          onKeyDown={(e) => handleKeyDown(e)}
        />
      </div>
      {tags.map((tag, idx) => (
        <span className="chips-tags" key={idx}>
          {tag}

          <span className="cross" onClick={() => handleClick(idx)}>
            x
          </span>
        </span>
      ))}
    </div>
  );
};

export default Chips;
