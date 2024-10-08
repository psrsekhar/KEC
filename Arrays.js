let actressNames = ["Samantha", "Nazriya", "Sai Pallavi"];
let actorNames = new Array("Dhanush", "Ajith", "Surya");

console.log("Index: " + actorNames[0]);
for (let i = 0; i < actorNames.length; i++) {
  console.log("Name: " + actorNames[i]);
}

for (let index in actorNames) {
  console.log("Index: " + index);
  console.log("Name: " + actorNames[index]);
}

actorNames.unshift("Rajinikanth"); // adds an element at start of array
actorNames.push("FF"); //adds an element at end of array
console.log(actorNames.pop()); // remove and return last element
console.log(actorNames.shift()); // remove and return first element

for (let name of actorNames) {
  console.log("Name: " + name);
}
