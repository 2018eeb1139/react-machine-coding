import { useState } from "react";
import data from "./data.json";

export default function TransferList() {
  //   console.log(data);
  const [leftItems, setLeftItems] = useState(data);
  const [rightItems, setRightItems] = useState([]);
  //   console.log(leftItems);
  const handleClick = (id, direction) => {
    if (direction === "LEFT") {
      setLeftItems((prevLeftItems) => {
        const newLeftItems = prevLeftItems.map((item) => {
          if (item.id === id) {
            item.ischecked = !item.ischecked;
          }
          return item;
        });
        return newLeftItems;
      });
    } else {
      setRightItems((prevRightItems) => {
        const newRightItems = prevRightItems.map((item) => {
          if (item.id === id) {
            item.ischecked = !item.ischecked;
          }
          return item;
        });
        return newRightItems;
      });
    }
  };

  const resetList = (list) => {
    const newList = list.map((item) => {
      return {
        ...item,
        ischecked: false,
      };
    });
    return newList;
  };

  const handleTransfer = (direction) => {
    if (direction === "LEFT_TO_RIGHT") {
      setLeftItems((prevLeftItems) => {
        const checkedLeft = prevLeftItems.filter((item) => item.ischecked);
        const unCheckedLeft = prevLeftItems.filter((item) => !item.ischecked);
        setRightItems((prevRightItems) => {
          return resetList([...prevRightItems, ...checkedLeft]);
        });
        return unCheckedLeft;
      });
    } else {
      setRightItems((prevRightItems) => {
        const checkedRight = prevRightItems.filter((item) => item.ischecked);
        const unCheckedRight = prevRightItems.filter((item) => !item.ischecked);
        setLeftItems((prevLeftItems) => {
          return resetList([...prevLeftItems, ...checkedRight]);
        });
        return unCheckedRight;
      });
    }
  };

  return (
    <div className="container">
      <div className="left-items">
        {leftItems?.map(({ title, id, ischecked }) => (
          <div
            className={`${ischecked && "checked"} item`}
            key={id}
            onClick={(e) => handleClick(id, "LEFT")}
          >
            {title}
          </div>
        ))}
      </div>
      <div className="action">
        <button onClick={() => handleTransfer("RIGHT_TO_LEFT")}>Left</button>
        <button onClick={() => handleTransfer("LEFT_TO_RIGHT")}>Right</button>
      </div>
      <div className="right-items">
        {rightItems.map(({ title, id, ischecked }) => (
          <div
            className={`${ischecked && "checked"} item`}
            key={id}
            onClick={(e) => handleClick(id, "RIGHT")}
          >
            {title}
          </div>
        ))}
      </div>
    </div>
  );
}
