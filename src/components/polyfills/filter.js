Array.prototype.myFilter = (callback) => {
  if (!callback) {
    throw Error("undefined function is not defined");
  }
  const newArr = [];
  const arr = this;
  for (let i = 0; i < arr.length; i++) {
    const result = callback(arr[i], i, arr);
    if (result) {
      newArr.push(result);
    }
  }
  return newArr;
};
