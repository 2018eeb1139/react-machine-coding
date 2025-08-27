const Settings = ({ data, setData }) => {
  const { theme } = data;
  const handleChange = (e) => {
    setData((prev) => ({ ...prev, theme: e.target.name }));
  };
  return (
    <div className="">
      <input
        type="radio"
        name="dark"
        checked={theme === "dark"}
        onChange={handleChange}
      />
      <label htmlFor="">Dark</label>
      <br />
      <input
        type="radio"
        name="light"
        checked={theme === "light"}
        onChange={handleChange}
      />
      <label htmlFor="">Light</label>
    </div>
  );
};

export default Settings;
