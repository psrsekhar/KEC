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

//IIFE - Immediately Invoked Function Expression
(function () {
  console.log("IIFE Function.....");
})();

//Higher Order Function
function processNumber(numbers, operation) {
  return numbers.map(operation);
}
const result = processNumber([1, 2, 3], (num) => num * num);
console.log(result);

//function to return a object
function generateObject(studentId, studentName, studentDepartment) {
  return {
    id: studentId,
    name: studentName,
    department: studentDepartment,
  };
}
let student = generateObject(1, "Abc Def", "CSD");
console.log(student);

//function to return a array
function generateSquareArray(input) {
  return input.map((x) => x * x);
}
console.log(generateSquareArray([3, 6, 8, 9]));

//function to return a function (First-class Functions)
function tokenGenerator() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
let counter = tokenGenerator();
console.log("Token: " + counter());
console.log("Token: " + counter());
console.log("Token: " + counter());

printName();
printActressName("Trisha");
console.log("Product: " + product(3, 7));
console.log("Add: " + add(3, 7));
console.log("Division: " + division(9, 3));
