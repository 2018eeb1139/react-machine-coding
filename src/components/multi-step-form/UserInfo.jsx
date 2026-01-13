export default function UserInfo({ formData }) {
  return (
    <div className="success">
      <h1>Success!</h1>
      <p>{formData.name}</p>
      <p>{formData.email}</p>
      <p>{formData.dob}</p>
      <p>{formData.password}</p>
    </div>
  );
}
