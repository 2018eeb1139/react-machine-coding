Array.prototype.myMap = (callback) => {
  if (!callback) {
    throw Error("undefined function is not defined");
  }
  const newArr = [];
  const arr = this;
  for (let i = 0; i < arr.length; i++) {
    const result = callback(arr[i], i, arr);
    newArr.push(result);
  }
  return newArr;
};
