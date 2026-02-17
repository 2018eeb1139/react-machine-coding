export const fetchUsers = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = Array.from({ length: 100 }, (_, i) => ({
        id: i + 1,
        name: `User ${i + 1}`,
        age: 20 + (i % 30),
        email: `user${i + 1}@mail.com`,
      }));
      resolve(data);
    }, 800);
  });
};
