import { useEffect, useState } from "react";
import "./styles.css";

export default function MemoryGame() {
  const [cards, setCards] = useState(gridContainer());
  const [isLock, setIsLock] = useState(false);
  const [flippedCards, setFlippedCards] = useState([]);
  console.log(flippedCards);
  const handleClick = (index) => {
    if (cards[index].isFlipped || isLock) {
      return;
    }
    const copyCards = [...cards];
    copyCards[index].isFlipped = true;
    setCards(copyCards);
    setFlippedCards([...flippedCards, index]);
  };

  useEffect(() => {
    if (flippedCards.length === 2) {
      setIsLock(true);
      setTimeout(() => {
        if (cards[flippedCards[0]].number !== cards[flippedCards[1]].number) {
          setCards((prevCards) => {
            const copyCards = [...prevCards];
            copyCards[flippedCards[0]].isFlipped = false;
            copyCards[flippedCards[1]].isFlipped = false;
            return copyCards;
          });
        }
        setIsLock(false);
        setFlippedCards([]);
      }, 3000);
    }
  }, [flippedCards]);

  return (
    <div className="grid-container">
      {cards.map(({ id, number, isFlipped }) => (
        <button className="cards" key={id} onClick={() => handleClick(id)}>
          {isFlipped ? number : "?"}
        </button>
      ))}
    </div>
  );
}

function gridContainer() {
  const arr = Array.from({ length: 18 }, (_, idx) => idx + 1);
  const grid = [...arr, ...arr].sort(() => Math.random() - 0.5);
  const cards = grid.map((item, index) => {
    return {
      id: index,
      number: item,
      isFlipped: false,
    };
  });
  return cards;
}
