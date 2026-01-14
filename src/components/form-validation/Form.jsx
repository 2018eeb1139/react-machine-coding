import { useState } from "react";

export default function Form() {
  const defaultValues = {
    firstName: {
      id: "firstName",
      label: "First Name",
      type: "text",
      placeholder: "Type your first name...",
      value: "",
      isError: false,
      errorMsg: "First name can't be empty",
    },
    lastName: {
      id: "lastName",
      label: "Last Name",
      type: "text",
      placeholder: "Type your last name...",
      value: "",
      isError: false,
      errorMsg: "Last name can't be empty",
    },
    email: {
      id: "email",
      label: "Email",
      type: "email",
      placeholder: "Type your email...",
      value: "",
      isError: false,
      errorMsg: "email can't be empty",
    },
    password: {
      id: "password",
      label: "Password",
      type: "password",
      placeholder: "Type your password...",
      value: "",
      isError: false,
      errorMsg: "password can't be empty",
    },
    confirmPassword: {
      id: "confirmPassword",
      label: "Confirm Password",
      type: "password",
      placeholder: "Type your password...",
      value: "",
      isError: false,
      errorMsg: "confirm password can't be empty",
    },
  };
  const [formData, setFormData] = useState(defaultValues);
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);

  const handleInputChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    // console.log(id, value);
    setFormData((prevFormData) => {
      const copyFormData = { ...prevFormData };
      copyFormData[id].value = value;
      return copyFormData;
    });
    isFormValid();
  };

  console.log(formData);

  const passwordMatch = () => {
    const copyFormData = { ...formData };
    const pass = copyFormData["password"].value;
    const cPass = copyFormData["confirmPassword"].value;
    if (pass != cPass) {
      setIsPasswordMatch(false);
    } else {
      setIsPasswordMatch(true);
    }
  };

  const isFormValid = () => {
    setFormData((prevFormData) => {
      const copyFormData = { ...prevFormData };
      Object.keys(copyFormData).forEach((key) => {
        const obj = copyFormData[key];
        obj.isError = !obj.value ? true : false;
        passwordMatch();
      });
      return copyFormData;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    isFormValid();
    console.log(formData);
  };
  return (
    <div className="container">
      <h1>React Form</h1>
      <form className="form" onSubmit={handleSubmit}>
        {Object.keys(formData).map((key) => {
          const { id, label, type, placeholder, value, isError, errorMsg } =
            formData[key];
          return (
            <div className="form-item" key={id}>
              <label htmlFor={id}>{label}</label>
              <input
                className={isError && "error-border"}
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={handleInputChange}
              />
              {isError && <span className="error">{errorMsg}</span>}
              {key === "confirmPassword" && !isPasswordMatch && (
                <span className="error">password didn't match</span>
              )}
            </div>
          );
        })}
        <div className="form-item">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}
