import { ChevronDown } from "lucide-react";
import { useState } from "react";
import "../styles.css";

const Accordion = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="accordion">
      <div className={`accordion-header underline`} onClick={handleClick}>
        Product
        <ChevronDown className={`${open && "rotate"}`} />
      </div>

      <div className={`accordion-content ${open ? "open" : ""}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, explicabo
        in. Temporibus, voluptate. Laboriosam sed voluptatibus sequi eaque,
        earum ea.
      </div>

      <hr />
    </div>
  );
};

export default Accordion;
