const Profile = ({ data, setData, errors }) => {
  // console.log(data);
  const { name, age, email } = data;
  const handleChange = (e, item) => {
    setData((prev) => ({ ...prev, [item]: e.target.value }));
  };
  return (
    <div className="">
      <div className="">
        <label htmlFor="">Name : </label>
        <input
          type="text"
          value={name}
          onChange={(e) => handleChange(e, "name")}
        />
        {errors?.name && <span>{errors?.name}</span>}
      </div>
      <div className="">
        <label htmlFor="">Age : </label>
        <input
          type="number"
          value={age}
          onChange={(e) => handleChange(e, "age")}
        />

        {errors?.age && <span>{errors?.age}</span>}
      </div>
      <div className="">
        <label htmlFor="">Email : </label>
        <input
          type="text"
          value={email}
          onChange={(e) => handleChange(e, "email")}
        />
        {errors?.name && <span>{errors?.name}</span>}
      </div>
    </div>
  );
};

export default Profile;
