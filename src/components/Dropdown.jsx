const Dropdown = ({ name, items, onSelect }) => {
  return (
    <div className="flex gap-2">
      <label htmlFor="fruits">{name}</label>
      <select name={name} onChange={(e) => onSelect(e.target.value)}>
        {items.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
