// --Single line comments : Not Executable code
/*
Multi line comments : Not Executable code
*/
//console.log("comments executed ");
console.log("Type Scripts Examples");
//----------
//--Variable Keywords - const, let, var
//define / represent the data : Data Type & Variables
//const - constant value, we can't re-assing the value, we can't re-declare the variable

const empid : number = 1001; 
//empid = 1002; // Error : Cannot assign to 'empid' because it is a constant.
//const empid : number = 1003; // Error : we can't re-declare the variable
console.log(empid);

//let - we can re-assign the value, we can't re-declare the variable
let a : number = 10;
    a = 20; //we can re-assign the value
//let a : number = 30; // Error : we can't re-declare the variable
console.log(a);

//var - we can re-assign the value, we can re-declare the variable
var b : number = 50;
b = 60; //we can re-assign the value
var b : number = 70; //we can re-declare the variable
console.log(b);