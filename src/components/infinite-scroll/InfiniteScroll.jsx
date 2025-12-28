import React, { useState, useEffect } from "react";
import Image from "./Image";

const InfiniteScroll = () => {
  const [data, setData] = useState([]);
  //   console.log(data);
  const [pageNo, setPageNo] = useState(1);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(
          `https://picsum.photos/v2/list?page=${pageNo}&limit=4`
        );
        const res = await result.json();
        setData([...data, ...res]);
      } catch (error) {}
    };
    fetchData();
  }, [pageNo]);

  return (
    <div>
      <Image data={data} setPageNo={setPageNo} />
    </div>
  );
};

export default InfiniteScroll;
