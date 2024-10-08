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

let c = 2 + 3;

//Function Expression - ES6
const add = function (a, b) {
  return a + b;
};

//Arrow Functions - ES6
const division = (a, b) => a / b;

//Anonymous Functions
product(function () {
  console.log("In Anonymous function....");
  return 20;
}, 30);

printName();
printActressName("Trisha");
console.log("Product: " + product(3, 7));
console.log("Add: " + add(3, 7));
console.log("Division: " + division(9, 3));
