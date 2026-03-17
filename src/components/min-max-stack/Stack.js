function Stack() {
  let stack = [];
  let min;
  let max;
  this.push = (val) => {
    if (stack.length === 0) {
      stack.push({ val, min: val, max: val });
    } else {
      const last = stack[stack.length - 1];
      min = Math.min(last.min, val);
      max = Math.max(last.max, val);
      stack.push({ val, min, max });
    }
  };

  this.pop = () => {
    stack.pop();
  };

  this.top = () => {
    if (stack.length > 0) {
      return stack[stack.length - 1].val;
    }
  };

  this.size = () => {
    return stack.length;
  };

  this.min = () => {
    return min;
  };

  this.max = () => {
    return max;
  };
}

let stack = new Stack();

stack.push(1);
stack.push(3);
stack.pop();
stack.push(2);
stack.push(5);
stack.push(6);
stack.push(9);
stack.push(10);
stack.push(-1);
stack.pop();

console.log(stack.size());
console.log(stack.top());
console.log(stack.min());
console.log(stack.max());
