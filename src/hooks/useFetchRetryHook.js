// Mock API (function that returns a promise)
const mockApi = () => {
  return new Promise((resolve, reject) => {
    const data = { name: "Aman", age: 21 };
    const statusCode = Math.random() > 0.7 ? 200 : 400; // random success/fail

    if (statusCode === 200) {
      resolve(data);
    } else {
      reject("Something went wrong");
    }
  });
};

// Retry utility
const retry = (callback, retries, delay) => {
  return new Promise((resolve, reject) => {
    callback()
      .then(resolve)
      .catch((err) => {
        if (retries === 0) {
          reject(err);
        } else {
          console.log(`Retrying... attempts left: ${retries}`);
          setTimeout(() => {
            retry(callback, retries - 1, delay)
              .then(resolve)
              .catch(reject);
          }, delay);
        }
      });
  });
};

// Usage
retry(mockApi, 3, 2000)
  .then((res) => console.log("✅ Success:", res))
  .catch((err) => console.error("❌ Failed:", err));
