Array.prototype.myFind = (callback) => {
  if (typeof callback !== "function") {
    throw Error("undefined function is not a callback");
  }
  const arr = this;
  for (let i = 0; i < arr.length; i++) {
    const result = callback(arr[i], i, arr);
    if (result) {
      return arr[i];
    }
  }
  return undefined;
};
