/**
 * Boolean Values
 * 
 * False, 0, string kosong (""), NaN, null dan undefined
 * adalah merepresentasikan nilai false
 * 
 * selain itu adalah true
 */

var pBooleanTrue = true;
var pBooleanFalse = false;

// console.log(pBooleanTrue) // true
// console.log(pBooleanFalse) // false

var fBooleanTrue = Boolean(true);
var fBooleanFalse = Boolean(false);

// console.log(fBooleanTrue) // true
// console.log(fBooleanFalse) // false

// console.log(Boolean(0)) // false
// console.log(Boolean("")) // false

var firstName = ""
var age = 17

// console.log(Boolean(age)) // true
// console.log(Boolean(firstName)) // false
// console.log(age + firstName) // NaN
// console.log(Boolean(age + firstName)) // false
// console.log(Boolean(undefined)) // false
