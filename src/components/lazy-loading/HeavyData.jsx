import { useEffect, useState } from "react";
import axios from "axios";
import PostImage from "./PostImage";

export default function HeavyData() {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    axios
      .get("https://picsum.photos/v2/list?page=2&limit=200")
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="container">
      {data?.map((item, index) => {
        return <PostImage image={item} key={index} />;
      })}
    </div>
  );
}
