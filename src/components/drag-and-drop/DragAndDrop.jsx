import { useRef, useState } from "react";

// const initialState = {
//   Todo: ["Design UI Mockups", "Create API Contracts"],
//   "In Progress": ["Implement Login Flow"],
//   Review: ["Code Review for Dashboard"],
//   Done: ["Project Setup"],
// };

const DragAndDrop = ({ initialState }) => {
  const [data, setData] = useState(initialState);
  const dragItem = useRef();
  const dragContainer = useRef();
  //   console.log(data["Todo"]);
  const handleDragStart = (e, container, item) => {
    // console.log(container, item);
    dragItem.current = item;
    dragContainer.current = container;
    e.target.style.opacity = 0.5;
  };
  const handleDragEnd = (e, container, item) => {
    e.target.style.opacity = 1;
  };

  const handleOnDrop = (e, targetContainer) => {
    const item = dragItem.current;
    const sourceContainer = dragContainer.current;
    setData((prev) => {
      const newData = { ...prev };
      newData[sourceContainer] = newData[sourceContainer].filter(
        (it) => it !== item
      );
      newData[targetContainer] = [...newData[targetContainer], item];
      return newData;
    });
  };

  const handleOnDragOver = (e) => {
    e.preventDefault();
  };
  return (
    <div className="dragAndDrop">
      {Object.keys(data).map((container, index) => (
        <div
          className="dragAndDrop__container"
          key={index}
          onDrop={(e) => handleOnDrop(e, container)}
          onDragOver={(e) => handleOnDragOver(e)}
        >
          <h2>{container}</h2>
          {data[container].map((item, index) => (
            <div
              className="dragAndDrop_item"
              key={index}
              draggable
              onDragStart={(e) => handleDragStart(e, container, item)}
              onDragEnd={(e) => handleDragEnd(e, container, item)}
            >
              {item}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default DragAndDrop;
