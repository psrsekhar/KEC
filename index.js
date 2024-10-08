function declare() {
  let collegeName = "KEC"; //'KEC'
  collegeName = "Kongu Engineering College"; //can be reassigned
  console.log(collegeName);
  //let collegeName = "KEC"; can not re declared in same scope
}

function printCollegeName() {
  //console.log("in print() : " + collegeName); out of scope. will get an error.
}

declare();
printCollegeName();
