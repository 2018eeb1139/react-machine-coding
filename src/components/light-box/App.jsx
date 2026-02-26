import { useEffect, useState } from "react";
import LightBox from "./components/LightBox";
import "./styles.css";
import axios from "axios";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://picsum.photos/v2/list?page=1&limit=6")
      .then((res) => setData(res.data));
  }, []);

  return <LightBox data={data} />;
}
