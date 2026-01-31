import { useEffect, useRef, useState } from "react";

const OPTIONS = [
  { id: 1, label: "JavaScript", value: "JavaScript" },
  { id: 2, label: "React", value: "React" },
  { id: 3, label: "Node.js", value: "Node.js" },
  { id: 4, label: "TypeScript", value: "TypeScript" },
  { id: 5, label: "HTML", value: "HTML" },
  { id: 6, label: "CSS", value: "CSS" },
  { id: 7, label: "Redux", value: "Redux" },
  { id: 8, label: "Next.js", value: "Next.js" },
  { id: 9, label: "Express.js", value: "Express.js" },
  { id: 10, label: "Android", value: "Android" },
  { id: 11, label: "Vue.js", value: "Vue.js" },
  { id: 12, label: "MySQL", value: "MySQL" },
  { id: 13, label: "Python", value: "Python" },
];

export default function MultiSelectDropdown({ options }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [query, setQuery] = useState("");
  const dropdownRef = useRef();
  const inputRef = useRef();
  const filteredOptions = options.filter((option) =>
    option.label?.toLowerCase().includes(query?.toLowerCase()),
  );

  console.log(filteredOptions);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleCheckbox = (option) => {
    const isAlreadyChecked = selectedOptions.some((o) => o.id === option.id);
    if (isAlreadyChecked) {
      setSelectedOptions((prev) => prev.filter((o) => o.id !== option.id));
    } else {
      setSelectedOptions((prev) => [...prev, option]);
    }
  };

  const clearAll = () => {
    setSelectedOptions([]);
  };

  return (
    <div className="container">
      <div className="title">MultiSelect Dropdown</div>
      <div className="wrapper" ref={dropdownRef}>
        <div className="trigger" onClick={() => setIsOpen(!isOpen)}>
          <div className="selected-container">
            {selectedOptions.length > 0 ? (
              selectedOptions.map((tag) => (
                <span key={tag.id} className="tag">
                  {tag.label}
                  <button>x</button>
                </span>
              ))
            ) : (
              <span className="placeholder">Select options...</span>
            )}
          </div>
          {selectedOptions.length > 0 && (
            <div className="actions">
              <button className="action-btn" onClick={clearAll}>
                clear all
              </button>
            </div>
          )}
          <span>{isOpen ? "🔼" : "🔽"}</span>
        </div>
        {isOpen && (
          <div className="dropdown">
            <input
              className="search-input"
              type="text"
              placeholder="Search..."
              ref={inputRef}
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            />
            <div className="options-list">
              {filteredOptions.map((option) => (
                <div
                  key={option.id}
                  className="option"
                  onClick={() => handleCheckbox(option)}
                >
                  <input
                    type="checkbox"
                    id={option.value}
                    checked={selectedOptions.some((o) => o.id === option.id)}
                    onChange={() => {}}
                  />
                  <label htmlFor={option.value}>{option.label}</label>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
