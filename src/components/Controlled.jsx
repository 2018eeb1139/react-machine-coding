import { useRef, useState } from "react";

const Controlled = () => {
  const [name, setName] = useState("");
  const inputRef = useRef();
  //   console.log(inputRef.current);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    setName("");
  };
  const handleSubmit1 = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
  };
  return (
    <>
      {/* controlled */}
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button>Submit</button>
      </form>
      {/* Uncontrolled */}
      <form className="flex flex-col" onSubmit={handleSubmit1}>
        <label htmlFor="name">Name</label>
        <input type="text" ref={inputRef} />
        <button>Submit</button>
      </form>
    </>
  );
};

export default Controlled;
