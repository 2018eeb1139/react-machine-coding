import { useState } from "react";
import "./Tabs.css";

export default function Tabs({ tabData, onChange }) {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="tab">
      <div className="tab__container">
        {tabData.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => {
              setActiveTab(idx);
              onChange(idx);
            }}
            className={activeTab === idx ? "tab__active" : ""}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab__content">{tabData[activeTab].content}</div>
    </div>
  );
}
