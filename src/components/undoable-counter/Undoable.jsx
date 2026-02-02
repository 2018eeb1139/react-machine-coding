import { useState } from "react";

export default function UndoableCounter() {
  const [value, setValue] = useState(0);
  const [history, setHistory] = useState([]);
  const [redoList, setRedoList] = useState([]);
  const [undoCount, setUndoCount] = useState(0);

  console.log(redoList);

  const maintainHistory = (key, prev, curr) => {
    // console.log(key, prev, curr);
    const obj = {
      action: key,
      prev,
      curr,
    };
    setHistory((prevHistory) => {
      return [obj, ...prevHistory];
    });
  };

  const handleUndo = () => {
    setUndoCount((c) => c + 1);

    if (history.length) {
      setHistory((prevHistory) => {
        const copyHistory = [...prevHistory];
        const firstItem = copyHistory.shift();
        setRedoList((prevRedoList) => [firstItem, ...prevRedoList]);
        setValue(firstItem.prev);
        return copyHistory;
      });
    }
  };

  const handleRedo = () => {
    if (redoList.length) {
      setHistory((prevHistory) => {
        const copyRedoList = [...redoList];
        const firstItem = copyRedoList.shift();
        setValue(firstItem.curr);
        setRedoList(copyRedoList);
        const copyHistory = [firstItem, ...prevHistory];
        return copyHistory;
      });
    }
  };

  const handleClick = (e, key) => {
    const next = parseInt(key);
    maintainHistory(key, value, value + next);
    setValue((prev) => prev + next);
  };

  return (
    <div className="container">
      <div className="action-btns">
        <button onClick={handleUndo}>Undo</button>
        <button onClick={handleRedo}>Redo</button>
      </div>

      <div className="user-actions">
        {[-100, -10, -1].map((val, idx) => (
          <button key={idx} onClick={(e) => handleClick(e, val)}>
            {val}
          </button>
        ))}
        <h3>{value}</h3>
        {["+1", "+10", "+100"].map((val, idx) => (
          <button key={idx} onClick={(e) => handleClick(e, val)}>
            {val}
          </button>
        ))}
      </div>
      <h4>History</h4>
      <div className="history">
        {history.map((item, idx) => (
          <div key={idx} className="parts">
            <span>{item.action} </span>
            <span>
              {item.prev} {"-->"} {item.curr}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
