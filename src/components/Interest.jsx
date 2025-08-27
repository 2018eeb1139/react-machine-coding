const Interest = ({ data, setData, errors }) => {
  const { interests } = data;
  const handleChange = (e) => {
    setData((prev) => ({
      ...prev,
      interests: e.target.checked
        ? [...prev.interests, e.target.name]
        : interests.filter((i) => i !== e.target.name),
    }));
  };
  return (
    <div className="">
      <div className="">
        <input
          type="checkbox"
          name="coding"
          value="coding"
          checked={interests.includes("coding")}
          onChange={handleChange}
        />
        <label htmlFor="">Coding</label>
      </div>
      <div className="">
        <input
          type="checkbox"
          name="cooking"
          value="cooking"
          checked={interests.includes("cooking")}
          onChange={handleChange}
        />
        <label htmlFor="">Cooking</label>
      </div>
      <div className="">
        <input
          type="checkbox"
          name="playing"
          value="playing"
          checked={interests.includes("playing")}
          onChange={handleChange}
        />
        <label htmlFor="">Playing</label>
      </div>
      {errors?.interests && <span>{errors.interests}</span>}
    </div>
  );
};

export default Interest;
