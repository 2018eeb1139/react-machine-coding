import { useRef } from "react";
import useClickOutside from "../hook/useClickOutside";

export default function Modal({ src, onClose, handlePrev, handleNext }) {
  const modalRef = useRef(null);
  console.log(modalRef);
  useClickOutside(modalRef, onClose);
  return (
    <div className="modal-overlay">
      <div ref={modalRef} className="modal-container">
        <img src={src} alt="" />
        <span className="left" onClick={handlePrev}>
          {"<"}
        </span>
        <span className="right" onClick={handleNext}>
          {">"}
        </span>
        <button onClick={onClose}>X</button>
      </div>
    </div>
  );
}
