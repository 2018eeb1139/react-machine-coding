import { useState, useRef, useEffect } from "react";
import "./styles.css";

const Modal = () => {
  const [open, setOpen] = useState(false);
  const modalRef = useRef();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleClose();
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.addEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <>
      <button onClick={handleOpen} className="border-2 rounded p-1 text-sm">
        Open Modal
      </button>
      {open && (
        <div className="modal-overlay">
          <div className="modal-content" ref={modalRef}>
            <p>This is your modal.</p>
            <button
              onClick={handleClose}
              className="border-2 rounded p-1 text-sm"
            >
              Close Modal
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
