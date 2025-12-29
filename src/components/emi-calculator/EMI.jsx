import { useEffect, useState } from "react";
import "./EMI.css";

export default function EMI() {
  const [principal, setPrincipal] = useState();
  const [interest, setInterest] = useState();
  const [years, setYears] = useState();
  const [emi, setEmi] = useState();
  //   EMI = [P x R x (1+R)^N] / [(1+R)^N - 1]
  const calculateEMI = () => {
    let r = interest;
    let n = years;
    let p = principal;
    r = r / 12 / 100;
    n = n * 12;
    const power = Math.pow(1 + r, n);
    const amount = (p * r * power) / (power - 1);
    setEmi(Math.round(amount));
  };
  useEffect(() => {
    if (principal && interest && years) {
      calculateEMI();
    }
  }, [principal, interest, years]);
  return (
    <div className="emi">
      <h1>EMI Calculator</h1>
      <div className="emi__inputs">
        <label htmlFor="">Principal</label>
        <input type="number" onChange={(e) => setPrincipal(e.target.value)} />
        <label htmlFor="">Interest</label>
        <input type="number" onChange={(e) => setInterest(e.target.value)} />
        <label htmlFor="">Years</label>
        <input type="number" onChange={(e) => setYears(e.target.value)} />
      </div>
      <div className="output">Your EMI is Rs {emi}</div>
    </div>
  );
}
