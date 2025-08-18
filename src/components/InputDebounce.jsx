import { useCallback, useEffect, useState } from "react";
import { debounce } from "lodash";

const mockApi = (query) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // here you can filter any mocked list
      const data = ["apple", "banana", "orange", "grapes"];
      const result = data.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
      );
      resolve(result);
    }, 1000);
  });
};

const InputDebounce = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const debounced = useCallback(
    debounce(async (inputValue) => {
      if (!inputValue) {
        setResults([]);
        return;
      }
      const res = await mockApi(inputValue);
      setResults(res);
    }, 800),
    []
  );

  useEffect(() => {
    debounced(query);
  }, [query]);

  return (
    <div>
      <label htmlFor="">Search Input</label>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {results.map((item) => (
          <li className="" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InputDebounce;
