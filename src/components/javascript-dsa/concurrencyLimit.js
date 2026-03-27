async function runWithConcurrency(tasks, limit) {
  const results = new Array(tasks.length);
  let index = 0; // next task to start

  async function worker() {
    while (index < tasks.length) {
      const currentIndex = index++;
      try {
        const res = await tasks[currentIndex]();
        results[currentIndex] = res;
      } catch (err) {
        results[currentIndex] = err;
      }
    }
  }

  // Create workers (max = limit)
  const workers = Array.from({ length: limit }, () => worker());

  await Promise.all(workers);

  return results;
}

const delay = (ms, val) => () =>
  new Promise((res) => setTimeout(() => res(val), ms));

const tasks = [delay(300, "A"), delay(100, "B"), delay(200, "C")];

runWithConcurrency(tasks, 2).then(console.log);
