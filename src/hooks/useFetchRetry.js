import { useState, useEffect, useRef } from "react";

const cache = new Map();

export default function useFetch(url, options = {}, config = {}) {
  const { retries = 2, retryDelay = 1000 } = config;

  const [data, setData] = useState(() => cache.get(url) || null);
  const [loading, setLoading] = useState(!cache.has(url));
  const [error, setError] = useState(null);

  const retryCount = useRef(0);
  const abortController = useRef(null);

  const fetchData = async () => {
    if (!url) return;

    abortController.current?.abort();
    abortController.current = new AbortController();

    try {
      setLoading(true);

      const res = await fetch(url, {
        ...options,
        signal: abortController.current.signal,
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      const json = await res.json();

      cache.set(url, json); // store in cache
      setData(json);
      setError(null);
      retryCount.current = 0;
    } catch (err) {
      if (err.name === "AbortError") return;

      if (retryCount.current < retries) {
        retryCount.current++;
        setTimeout(fetchData, retryDelay);
      } else {
        setError(err);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!cache.has(url)) {
      fetchData();
    }
  }, [url]);

  const refetch = () => {
    cache.delete(url);
    fetchData();
  };

  return { data, loading, error, refetch };
}

// How to use it.
function Users() {
  const { data, loading, error, refetch } = useFetch(
    "https://jsonplaceholder.typicode.com/users",
    {},
    { retries: 3 },
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading users</p>;

  return (
    <>
      <button onClick={refetch}>Refetch</button>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}
