// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

let myFunction = function () {
console.log("Function was invoked!");
};
myFunction();
// converted arrow function no parameter
let myFunction = _ => "Function was invoked!"





let anotherFunction = function (param) {
  return param;
};
anotherFunction("Example");
// converted arrow function single parameter
let anotherFunction = param => param





let add = function (param1, param2) {
  return param1 + param2;
};
add(1,2); 
// converted arrow function - 2 parameter
let add = (param1, param2) =>  param1 + param2





let subtract = function (param1, param2) {
  return param1 - param2;
};
subtract(1,2);
// converted arrow function - 2 parameter
let subtract = (param1, param2) => param1 - param2

console.log(subtract(4,2))

// Stretch

// exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);



// questions. 
// can i nest a function in a function. technically yes. because its a value. cannot be invoked when nested unless from an outside object.

  