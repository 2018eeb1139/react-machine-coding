import "./styles.css";
import React from "react";

const countries = [
  { name: "India", value: "IN", cities: ["Delhi", "Mumbai"] },
  { name: "Pakistan", value: "PAK", cities: ["Lahore", "Karachi"] },
  { name: "Bangladesh", value: "BAN", cities: ["Dakha", "Chittagong"] },
];

export default function App() {
  const [selectedCountry, setSelectedCountry] = React.useState("");

  return (
    <div className="App">
      <label>Select a Country</label>
      <select
        value={selectedCountry}
        onChange={(e) => setSelectedCountry(e.target.value)}
      >
        {countries.map((country, index) => {
          return <option value={index}>{country.name}</option>;
        })}
      </select>
      <label>Select a City from {countries[selectedCountry]?.name}</label>
      <select value={selectedCountry}>
        {countries[selectedCountry]?.cities.map((city, index) => {
          return <option value={index}>{city}</option>;
        })}
      </select>
    </div>
  );
}
