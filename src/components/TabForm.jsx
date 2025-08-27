import Profile from "./Profile";
import Interest from "./Interest";
import Settings from "./Settings";
import "./styles.css";
import { useState } from "react";

const TabForm = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [errors, setErrors] = useState();
  const [data, setData] = useState({
    name: "",
    email: "",
    age: "",
    interests: ["coding"],
    theme: "dark",
  });

  const tabs = [
    {
      name: "Profile",
      component: Profile,
      validate: () => {
        const err = {};
        if (!data.name || data.name.length < 4) {
          err.name = "name is not valid";
        }
        if (!data.age || data.age < 18) {
          err.age = "age is not valid";
        }
        if (!data.email || data.email.length < 4) {
          err.email = "email is not valid";
        }
        setErrors(err);
        return err.name || err.age || err.email ? false : true;
      },
    },
    {
      name: "Interest",
      component: Interest,
      validate: () => {
        const err = {};
        if (data.interests.length < 1) {
          err.interests = "select atleast 1 interest";
        }
        setErrors(err);
        return err.interests ? false : true;
      },
    },
    {
      name: "Settings",
      component: Settings,
      validate: () => {
        return true;
      },
    },
  ];

  const handleSubmit = () => {
    console.log(data);
  };
  const handleNext = () => {
    if (tabs[selectedTab].validate()) {
      setSelectedTab((prev) => prev + 1);
    }
  };
  const handlePrev = () => {
    setSelectedTab((prev) => prev - 1);
  };
  const onSelect = (idx) => {
    if (tabs[selectedTab].validate()) {
      setSelectedTab(idx);
    }
  };
  const ActiveTab = tabs[selectedTab].component;
  return (
    <div className="">
      <div className="heading-container">
        {tabs.map((tab, idx) => (
          <div
            className={`header ${selectedTab === idx ? "active" : ""}`}
            key={tab.name}
            onClick={() => onSelect(idx)}
          >
            {tab.name}
          </div>
        ))}
      </div>
      <div className="content">
        <ActiveTab data={data} setData={setData} errors={errors} />
      </div>
      <div className="btn">
        {selectedTab > 0 && <button onClick={handlePrev}>Prev</button>}
        {selectedTab < tabs.length - 1 && (
          <button onClick={handleNext}>Next</button>
        )}
        {selectedTab === tabs.length - 1 && (
          <button onClick={handleSubmit}>Submit</button>
        )}
      </div>
    </div>
  );
};

export default TabForm;
