import { useEffect, useState } from "react";
import Pagination from "./Pagination";

const Post = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageNo, setPageNo] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await fetch(
          `https://picsum.photos/v2/list?page=${pageNo}&limit=5`
        );
        const res = await result.json();
        // console.log(res);
        setData(res);
        setLoading(false);
      } catch (error) {}
    };
    fetchData();
  }, [pageNo]);

  return (
    <div className="container">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="post-container">
          {data.map((item, index) => (
            <img key={item.id} src={item.download_url} alt={item.author} />
          ))}
        </div>
      )}
      <Pagination pageNo={pageNo} setPageNo={setPageNo} />
    </div>
  );
};

export default Post;
