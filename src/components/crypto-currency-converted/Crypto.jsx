import { useEffect, useState } from "react";
const CURRENCY_OPTIONS = ["USD", "EUR", "GBP", "CNY"];
const URL = "https://api.frontendeval.com/fake/crypto";

export default function Crypto() {
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [currency, setCurrency] = useState(CURRENCY_OPTIONS[0]);
  const [conversionRate, setConversionRate] = useState(0);
  const [prevConvertedAmount, setPrevConvertedAmount] = useState(0);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const res = await fetch(`${URL}/${currency}`);
        const data = await res.json();
        // console.log(data);
        setConversionRate(data.value);
      } catch (error) {
        console.log(error);
      }
    };
    fetchApi();
    const timer = setInterval(fetchApi, 5000);
    return () => {
      clearInterval(timer);
    };
  }, [currency]);
  useEffect(() => {
    setPrevConvertedAmount(amount);
    setConvertedAmount(amount * conversionRate);
  }, [amount, conversionRate]);
  const priceChange = convertedAmount - prevConvertedAmount;
  return (
    <div className="">
      <label htmlFor="amountToConvert">
        Amount To Convert :{" "}
        <input
          type="number"
          id="amnoutToConvert"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </label>
      <label htmlFor="currency">
        Currency To Convert :
        <select
          name=""
          id="currency"
          onChange={(e) => {
            setCurrency(e.target.value);
          }}
        >
          {CURRENCY_OPTIONS.map((value, index) => (
            <option value={value} key={index}>
              {value}
            </option>
          ))}
        </select>
      </label>
      <p>WUC Crypto Equivalent: {convertedAmount.toFixed(2)}</p>
      <p style={{ color: priceChange > 0 ? "green" : "red" }}>
        Change: {priceChange > 0 ? "🔼" : "🔽"} {priceChange.toFixed(2)}
      </p>
    </div>
  );
}
