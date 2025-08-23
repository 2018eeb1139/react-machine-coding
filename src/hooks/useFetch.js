import React, { useEffect } from "react";

const useFetch = (url) => {
  useEffect(() => {
    try {
      return new Promise(async (resolve, reject) => {
        const res = await fetch(url);
        const result = await res.json();
        resolve(result);
      });
    } catch (error) {
      for (let i = 0; i < 3; i++) {
        retry(url);
      }
    }
    return () => {};
  }, []);
  return <div>useFetch</div>;
};

export default useFetch;
