export default function UserForm({
  handleSubmit,
  handleBack,
  data,
  handleInputChange,
  formData,
  index,
}) {
  return (
    <form className="form-container" onSubmit={handleSubmit}>
      {index > 0 && (
        <a href="/" onClick={handleBack}>
          Back
        </a>
      )}
      <label htmlFor="name">{data[index]?.label}</label>
      <input
        required
        type={data[index].inputType}
        id={data[index].id}
        value={formData[data[index].id]}
        onChange={handleInputChange}
        placeholder={data[index].placeholder}
      />
      <button>{data[index].buttonName}</button>
    </form>
  );
}
