import { useRef, useState } from "react";
import useClickOutside from "../hooks/useClickOutside";

export default function Popover() {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef(null);
  useClickOutside(popoverRef, () => setIsOpen(false));
  const fields = [
    {
      label: "Height",
      type: "input",
    },
    {
      label: "Max Height",
      type: "input",
    },
    {
      label: "Width",
      type: "input",
    },
    {
      label: "Max Width",
      type: "input",
    },
  ];
  return (
    <div className="popover-container" ref={popoverRef}>
      <button onClick={() => setIsOpen(!isOpen)} className="popover-action">
        Open Popover
      </button>
      {isOpen && (
        <div className="popover">
          <div className="popover-header">
            <h3>Dimensions</h3>
            <p className="popover-subheading">
              Set the dimension for the layer
            </p>
          </div>
          <div className="popover-content">
            {fields.map(({ label, type }) => (
              <div className="fields">
                <label>{label}</label>
                {type === "input" && <input type="text" />}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
