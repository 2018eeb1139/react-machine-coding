function greet(city) {
  console.log(`${this.name} ${city}`);
}

const user = {
  name: "Aman",
};

greet.call(user, "kanpur");
greet.apply(user, ["kanpur"]);

const boundFn = greet.bind(user, "kanpur");
boundFn();
