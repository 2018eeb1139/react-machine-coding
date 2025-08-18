import { debounce } from "lodash";
import React, { useCallback, useEffect, useState } from "react";

const mockApi = (query) => {
  //   console.log(query);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = ["apple", "orange", "grapes", "gauva", "banana"];
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
    debounce(async (query) => {
      if (!query) {
        setResults([]);
        return;
      }
      const res = await mockApi(query);
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
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default InputDebounce;
