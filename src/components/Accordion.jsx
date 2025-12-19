import React, { useState } from "react";
// import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./styles.css";

function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const handleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return !items || items.length === 0 ? (
    <div>No items available</div>
  ) : (
    <div className="accordion">
      {items.map((item, index) => (
        <div className="accordion-item" key={index}>
          <button className="accordion-title" onClick={() => handleOpen(index)}>
            {item.title}
            {openIndex === index ? (
              <FaChevronUp className="right" />
            ) : (
              <FaChevronDown className="right" />
            )}
          </button>

          {openIndex === index && (
            <div className="accordion-content">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
