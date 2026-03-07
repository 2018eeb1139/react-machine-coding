export default function useCopy() {
  const copy = async (text) => {
    if (!navigator?.clipboard) {
      console.warn("Clipboard is not enabled or available");
      return;
    }
    try {
      await navigator.clipboard.writeText(text);
    } catch (error) {
      console.error(`There was error copying text: ${text}`, error);
    }
  };

  return copy;
}


// usage in App.jsx

import { useState } from "react";
import useCopy from "./hook/useCopy";
import "./styles.css";

export default function App() {
  const [value, setValue] = useState("");
  const copy = useCopy();
  return (
    <div className="App">
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></textarea>
      <button onClick={() => copy(value)}>Copy</button>
    </div>
  );
}
