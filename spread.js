let oldMovies = ["Sivaji", "Ghilli", "Mouna Raagam", "Kushi"];
let newMovies = ["GOAT", "LEO", "Raayan", "Maharaaja"];

//spread operator to merge two arrays
let movies = [...oldMovies, ...newMovies];

//spread operator to copy an array
let copyOldMovies = [...oldMovies];
console.log(movies);

//spread operator to merge two objects
let firstStudent = {
  id: 1,
  name: "Abc",
  department: "CSD",
};

let studentSkill = {
  id: 1,
  c: true,
  java: true,
};

let student = { ...firstStudent, ...studentSkill };
console.log(student);
