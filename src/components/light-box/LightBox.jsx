import { useState } from "react";
import Modal from "./Modal";

export default function LightBox({ data }) {
  const [active, setActive] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (idx) => {
    setActive(idx);
    setIsOpen(true);
  };
  const handlePrev = () => {
    if (active > 0) setActive((prev) => prev - 1);
  };

  const handleNext = () => {
    if (active < data.length - 1) setActive((prev) => prev + 1);
  };

  if (!data.length) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <div className="lightbox-container">
        {data.map((item, idx) => (
          <div
            key={item.id}
            className={`img-container ${idx === active && "active"}`}
            onClick={() => handleClick(idx)}
          >
            <img src={item.download_url} alt={item.author} />
          </div>
        ))}
      </div>
      {isOpen && (
        <Modal
          src={data[active].download_url}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          handleNext={handleNext}
          handlePrev={handlePrev}
        />
      )}
    </>
  );
}
