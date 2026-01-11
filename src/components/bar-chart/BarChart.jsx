import { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

export default function App() {
  const [freq, setFreq] = useState(undefined);
  const [yData, setYData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://www.random.org/integers/?num=200&min=1&max=10&col=1&base=10&format=plain&rnd=new%27"
      )
      .then((res) => {
        let data = res.data;
        data = data.split("\n").filter(Boolean);
        const mp = {};
        data?.forEach((item) => {
          if (mp[item]) {
            mp[item] += 1;
          } else {
            mp[item] = 1;
          }
        });
        setFreq(mp);
      });
  }, []);
  // console.log(freq);
  // console.log(yData);
  //y-axis data
  useEffect(() => {
    if (freq) {
      const maxValue = Math.max(...Object.values(freq));
      const mx = Math.ceil(maxValue / 10) * 10;
      // console.log(mx);
      let arr = [];
      for (let i = mx / 10; i >= 0; i--) {
        const element = i * 10;
        // console.log("element", element);
        arr.push(element);
      }
      setYData(arr);
    }
  }, [freq]);
  return (
    <div className="App">
      <div className="container">
        <div className="box">
          <div
            className="box-y-axis"
            style={{
              height: `${yData && yData[0]}%`,
            }}
          >
            {yData.map((val, idx) => (
              <div className="" key={idx}>
                <span>{val}</span>
              </div>
            ))}
          </div>
          {freq &&
            Object.entries(freq)?.map(([key, val]) => (
              <div className="box-x-axis">
                <div
                  className="graph"
                  style={{
                    height: `${val}%`,
                  }}
                ></div>
                <div className="index">{key}</div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
