import React from "react";

const Tab = ({ title, onSelect, isActive }) => {
  return (
    <div
      className={`p-2 cursor-pointer ${isActive ? "font-bold underline" : ""}`}
      onClick={() => onSelect(title)}
    >
      <h3>{title}</h3>
    </div>
  );
};

export default Tab;
