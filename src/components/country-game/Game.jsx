import { useEffect, useState } from "react";

export default function Game({ countriesAndCapitals }) {
  const [data, setData] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isCorrect, setIsCorrect] = useState("");
  const [isOn, setIsOn] = useState("");
  console.log(isOn);
  const handleClick = (value) => {
    if (isOn) return;
    if (selectedOptions.includes(value)) {
      setSelectedOptions((prev) => prev.filter((o) => o !== value));
    } else {
      setSelectedOptions((prev) => [...prev, value]);
    }
  };

  useEffect(() => {
    if (selectedOptions.length === 2) {
      setIsOn(true);
      const [first, second] = selectedOptions;
      if (
        countriesAndCapitals[first] === second ||
        countriesAndCapitals[second] === first
      ) {
        setIsCorrect(true);
        setTimeout(() => {
          setData((prev) => prev.filter((item) => item !== first));
          setData((prev) => prev.filter((item) => item !== second));
          setSelectedOptions([]);
          setIsOn(false);
        }, 1000);
      } else {
        setIsCorrect(false);
        setTimeout(() => {
          setIsCorrect("");
          setSelectedOptions([]);
          setIsOn(false);
        }, 1000);
      }
    }
  }, [selectedOptions]);

  useEffect(() => {
    const countries = Object.keys(countriesAndCapitals);
    const capitals = Object.values(countriesAndCapitals);
    setData([...countries, ...capitals].sort(() => Math.random() - 0.5));
  }, [countriesAndCapitals]);

  if (data.length == 0) {
    return <h1 className="App">Congratulations</h1>;
  }

  return (
    <div className="container">
      {data.map((item, idx) => {
        const isSelected = selectedOptions.includes(item);

        return (
          <button
            key={idx}
            // disabled={isOn}
            className={`${isSelected && "selected"} ${
              isSelected && isCorrect && "correct"
            } ${isSelected && isCorrect === false && "incorrect"}`}
            onClick={() => handleClick(item)}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}


// App.jsx
import Game from "./component/Game";
import "./styles.css";
import { countriesAndCapitals } from "./component/data";

export default function App() {
  return <Game countriesAndCapitals={countriesAndCapitals} />;
}