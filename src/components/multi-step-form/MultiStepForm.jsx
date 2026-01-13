import { useState } from "react";
import UserForm from "./UserForm";
import UserInfo from "./UserInfo";
import data from "./form.json";

export default function MultiStepForm() {
  const [index, setIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dob: "",
    password: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (index === data.length - 1) {
      setIsSubmitted(true);
      return;
    }
    setIndex((prev) => prev + 1);
  };

  const handleInputChange = (e) => {
    const id = e.target.id;
    const val = e.target.value;
    const copyFormData = { ...formData };
    copyFormData[id] = val;
    setFormData(copyFormData);
  };

  const handleBack = (e) => {
    e.preventDefault();
    setIndex((prev) => prev - 1);
  };

  return (
    <div className="container">
      {!isSubmitted ? (
        <UserForm
          handleBack={handleBack}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          formData={formData}
          data={data}
          index={index}
        />
      ) : (
        <UserInfo formData={formData} />
      )}
    </div>
  );
}
