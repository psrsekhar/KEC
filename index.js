function declare() {
  let collegeName = "KEC"; //'KEC'
  collegeName = "Kongu Engineering College"; //can be reassigned
  console.log(collegeName);
  //let collegeName = "KEC"; can not re declared in same scope

  const age = 21;
  // age = 30; can not be reassigned
  console.log(age);
  //const age = 40; can not re declared in same scope

  var actorName = "Surya";
  actorName = "Karthi"; // can be reassigned
  console.log(actorName);
  var actorName = "Samantha"; //can be re declared in same scope
}

function print() {
  //console.log("in print() : " + collegeName); out of scope. will get an error.
  //console.log("in print() : " + age); out of scope. will get an error.
  //console.log("in print() : " + actorName); //out of scope. will get an error.
}

declare();
print();
