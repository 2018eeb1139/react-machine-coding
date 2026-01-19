import { useRef } from "react";
import useClickOutside from "../hooks/useClickOutSide";

export default function Modal({ open, handleClose, handleAccepted }) {
  const modalRef = useRef();
  useClickOutside(modalRef, handleClose);
  if (!open) {
    return null;
  }
  return (
    <div className="modal-container" ref={modalRef}>
      <button className="close" onClick={handleClose}>
        x
      </button>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
        repellendus incidunt eveniet! Provident sapiente eveniet, quod placeat
        magni dolor praesentium?
      </p>
      <button onClick={handleAccepted}>Accept Offer</button>
    </div>
  );
}
