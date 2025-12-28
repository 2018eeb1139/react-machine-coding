import React, { useEffect } from "react";

const Image = ({ data, setPageNo }) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (param) => {
        // console.log(param);
        if (param[0].isIntersecting) {
          observer.unobserve(lastImage);
          setPageNo((pageNo) => pageNo + 1);
        }
      },
      { threshold: 0.5 }
    );
    const lastImage = document.querySelector("img.image:last-child");
    // console.log(lastImage);
    if (!lastImage) {
      return;
    }
    observer.observe(lastImage);
    return () => {
      if (lastImage) {
        observer.unobserve(lastImage);
      }
      observer.disconnect();
    };
  }, [data]);

  return (
    <div>
      {data.map((item) => (
        <img
          key={item.id}
          src={item.download_url}
          alt={item.author}
          height={300}
          width={300}
          className="image m-2 object-cover"
        />
      ))}
    </div>
  );
};

export default Image;
