function countNumbers(collections) {
  let count = 0;
  if (!collections.length) {
    return count;
  }

  for (let i = 0; i < collections.length; i++) {
    const current = collections[i];
    if (typeof current === "number") {
      count++;
    } else if (Array.isArray(current)) {
      count += countNumbers(current);
    }
  }

  return count;
}
