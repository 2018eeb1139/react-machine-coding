function f(a) {
  return function (b) {
    console.log(a, b);
  };
}

// console.log(f(1)(2));

function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

// console.log(sum(1)(2)(3))

function evaluate(operation) {
  return function (b) {
    return function (c) {
      if (operation === "sum") {
        return b + c;
      } else if (operation === "subtract") {
        return b - c;
      } else if (operation === "multiply") {
        return b * c;
      } else {
        return b / c;
      }
    };
  };
}

// console.log(evaluate("divide")(6)(2));

//infinite currying
function add(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
}

// console.log(add(1)(2)(3)(4)());

function Sum(a) {
  return function (b, c) {
    return a + b + c;
  };
}

// console.log(Sum(2)(2, 3));

//VVIMP
//convert f(a,b,c)->f(a)(b)(c)
function curry(func) {
  return function curriedFunc(...args) {
    if (args.length >= func.length) {
      return func(...args);
    } else {
      return function (...next) {
        return curriedFunc(...args, ...next);
      };
    }
  };
}

//TC->O(N)
//SC->O(N)

const sumFunc = (a, b, c) => a + b + c;
const totalSum = curry(sumFunc);
console.log(totalSum(1)(2, 3));
