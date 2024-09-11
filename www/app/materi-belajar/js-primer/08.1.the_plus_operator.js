/**
 * The + Operator
 * 
 * Operator + ketika digunakan sebagai unary,
 * tidak memiliki efek apa pun pada angka.
 * Namun ketika diterapkan pada String, operator +
 * akan mengubahnya menjadi angka
 */

var a=25
a=+a // no impact
// console.log(a); // 25

var b="70"
// console.log(typeof b); // string
b=+b // converts string to number
// console.log(typeof b); // 70
// console.log(typeof b); // number

var c="foo"
c=+c // convert foo to number
// console.log(c) // NaN
// console.log(typeof c) // number

var zero=""
zero=+zero // empty strings di convert ke 0
// console.log(zero)
// console.log(typeof zero)
