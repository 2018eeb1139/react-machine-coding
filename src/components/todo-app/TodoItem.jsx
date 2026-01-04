import { memo, useState } from "react";

export default memo(function TodoItem({
  todo,
  handleDone,
  handleClose,
  handleUpdate,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedValue, setUpdatedValue] = useState(todo.value);
  return (
    <div className="" key={todo?.id}>
      {todo.isCompleted ? (
        <span style={{ textDecoration: "line-through" }}>{todo.value}</span>
      ) : isEditing ? (
        <input
          type="text"
          value={updatedValue}
          onChange={(e) => setUpdatedValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleUpdate(todo.id, updatedValue);
              setIsEditing(false);
            }
          }}
        />
      ) : (
        <span>{todo.value}</span>
      )}
      <span
        style={{ marginLeft: "1rem", cursor: "pointer" }}
        onClick={() => handleDone(todo.id)}
      >
        ✅
      </span>
      {!todo.isCompleted && !isEditing && (
        <span
          style={{ marginLeft: "1rem", cursor: "pointer" }}
          onClick={() => setIsEditing(true)}
        >
          📝
        </span>
      )}
      <span
        style={{ marginLeft: "1rem", cursor: "pointer" }}
        onClick={() => handleClose(todo.id)}
      >
        ❌
      </span>
    </div>
  );
});
