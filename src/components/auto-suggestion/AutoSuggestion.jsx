import { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";

export default function AutoSuggestion() {
  const [food, setFood] = useState();
  const [suggestionList, setSuggestionList] = useState([]);
  const [lists, setLists] = useState([]);

  const fetchLists = () => {
    axios
      .get(`https://api.frontendeval.com/fake/food/${food}`)
      .then((res) => setSuggestionList(res.data));
  };

  useEffect(() => {
    if (food?.length >= 2) {
      fetchLists();
    }
  }, [food]);

  console.log(lists);

  const handleClick = (e) => {
    const idx = e.target.id;

    setLists((prev) => [
      ...prev,
      {
        id: Date.now(),
        item: suggestionList[idx],
        isDone: false,
      },
    ]);
    setFood("");
  };

  const handleDone = (idx) => {
    setLists((prev) => {
      const copyList = [...prev];
      copyList.map((item) => {
        if (item.id === idx) {
          item.isDone = !item.isDone;
        }
        return item;
      });
      return copyList;
    });
  };

  const handleDelete = (idx) => {
    setLists((prev) => {
      const copyList = prev.filter((item) => item.id !== idx);
      return copyList;
    });
  };

  return (
    <div className="App">
      {/* Input */}
      <input
        type="text"
        value={food}
        onChange={(e) => setFood(e.target.value)}
      />

      {/* suggestion List */}
      {food?.length >= 2 && (
        <div className="" onClick={handleClick}>
          {suggestionList.map((item, index) => (
            <div className="" key={index} id={index}>
              {item}
            </div>
          ))}
        </div>
      )}

      {/* List */}
      {lists &&
        lists.map(({ item, id, isDone }) => (
          <div className="product" key={id}>
            <button onClick={() => handleDone(id)}>✅</button>
            <span className={`${isDone && "strike"}`}>{item}</span>
            <button onClick={() => handleDelete(id)}>❌</button>
          </div>
        ))}
    </div>
  );
}
