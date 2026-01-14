Array.prototype.myForEach = (callback) => {
  if (!callback) {
    throw Error("undefined function is not defined");
  }
  const arr = this;
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
};
