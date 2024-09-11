/**
 * Instanceof Operator
 * 
 * Salah satu masalah menggunakan type referensi
 * untuk store values adalah penggunaan typeof operator,
 * yg mengembalikan object tidak peduli apapun jenis object yg
 * sedang di referensikan.
 * 
 * Sebagai solusi, di JS kita dapat menggunakan instanceof operator
 */

var fullname = "Haris Indratama"

// console.log(typeof fullname); // "string"

var aStringObject = new String("Haris Indratama")

// console.log(typeof aStringObject); // "object"

// console.log(aStringObject instanceof String); // true

var aString = "Haris Indratama"

// console.log(aString instaceof String); // false
