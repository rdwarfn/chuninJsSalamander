/**
 * The ++ And -- Operator
 * 
 * Operator ++ adalah versi
 * singkatan untuk menambahkan 1 ke nilai.
 * dan -- adalah singkatan untuk
 * mengurangi 1 dari suatu nilai.
 */

var a = 1
var b = a++
// console.log(a) // 2
// console.log(b) // 1

/**
 * Err kah? bknnya var b harus nya 2?. what the puhun is this.
 * Di JS ++ dan -- adalah operator unary,
 * bisa digunakan di awalan (prefix) atau di
 * akhiran (postfix). Urutan penempatanya sangat penting
 */

var a = 1
var b = ++a
// console.log(a) // 2
// console.log(b) // 2

