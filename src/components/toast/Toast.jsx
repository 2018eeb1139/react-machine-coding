import { useState } from "react";

const Toast = ({ variant }) => {
  const [toasts, setToasts] = useState([]);
  console.log(toasts);
  const handleShow = (variant, message) => {
    const id = new Date().getTime();

    setToasts((prev) => [...prev, { id, variant, message }]);
    setTimeout(() => {
      handleClose(id);
    }, 60000);
  };
  const handleClose = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };
  return (
    <div className="container">
      <div className="toast-container">
        {toasts.map(({ id, message, variant }) => (
          <div key={id} className={`toast ${variant}`}>
            {message}
            <span onClick={() => handleClose(id)}>x</span>
          </div>
        ))}
      </div>

      <div className="btn-container">
        {variant === "success" && (
          <button onClick={() => handleShow(variant, "Success")}>
            Success
          </button>
        )}
        {variant === "info" && (
          <button onClick={() => handleShow(variant, "Info")}>Info</button>
        )}
        {variant === "warning" && (
          <button onClick={() => handleShow(variant, "Warning")}>
            Warning
          </button>
        )}
        {variant === "error" && (
          <button onClick={() => handleShow(variant, "Error")}>Error</button>
        )}
      </div>
    </div>
  );
};

export default Toast;
