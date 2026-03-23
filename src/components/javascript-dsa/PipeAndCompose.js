function pipe(...fns) {
  return function (initialVal) {
    return fns.reduce((acc, fn) => fn(acc), initialVal);
  };
}

function compose(...fns) {
  return function (initialVal) {
    return fns.reduceRight((acc, fn) => fn(acc), initialVal);
  };
}

const add = (a) => a + 2;
const multiply = (a) => a * 4;
const divide = (a) => a / 10;

let res = pipe(add, multiply, divide)(2);

console.log(res);
