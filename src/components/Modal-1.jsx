import { useRef } from "react";
import useClickOutside from "../hooks/useClickOutside";

export default function Modal({ isOpen, closeModal }) {
  const modalRef = useRef();
  useClickOutside(modalRef, closeModal);
  if (!isOpen) {
    return null;
  }
  return (
    <div ref={modalRef} className="modal-container">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
        voluptas aut tempora suscipit id. Eos exercitationem cupiditate culpa
        necessitatibus a fuga aliquam itaque perspiciatis quia, vel magnam
        veritatis laudantium expedita architecto cum? Animi voluptates quo
        doloremque omnis optio qui ab autem mollitia maxime, similique
        repellendus distinctio, tenetur minus nobis hic!
      </p>
      <button onClick={() => closeModal()}>Close</button>
    </div>
  );
}
