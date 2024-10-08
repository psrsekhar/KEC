var name = "Samantha";

//general function with out parameters and with out return values
function printName() {
  console.log("Name: " + name);
}

//general function with parameters and with out return values
function printActressName(name) {
  console.log("Actress Name: " + name);
}

//general function with parameters and with return values
function product(a, b) {
  return a * b;
}

//Function Expression - ES6
const add = function (a, b) {
  return a + b;
};

printName();
printActressName("Trisha");
console.log(product(3, 7));
console.log(add(3, 7));
