/**
 * Boolean Operators
 * 
 * Ada tiga boolean operator di JS
 * AND (&), OR(|), and NOT(!)
 * atau disebut juga logika operator
 */

/**
 * Logika AND
 */

// true AND true returns true
console.log(true && true) // true

// false AND false returns false
console.log(true && false) // false

// Foo(true) AND Bar(true) returns Bar
console.log("Foo" && "Bar") // 'Bar'

// false && Foo(true) returns false
console.log(false && "Foo") // false

// Foo(true) && false returns false
console.log("Foo" && false) // false

// false && false(1==2) returns false
/**
 * bila terdapat operasi yg di dlm ()
 * maka operasi tsb yg pertama di prioritas kan trlebih dahulu
 */
console.log(false && (1 == 2))

// sama aja yg di atas sama dengn yg dibawah
console.log(false && false)

const a = (1 == 2)

/**
 * Logika OR
 */

// true OR true returns true
console.log(true || true); // true

// true OR false returns true
console.log(true || false);// true

// false OR true returns true
console.log(false || true);// true

// Foo(true) OR Bar(true) returns Foo
console.log("Foo" || "Bar");// Foo

// false OR Foo(true) returns Foo
console.log(false || "Foo");// Foo

// Foo(true) OR false returns Foo
console.log("Foo" || false);// Foo

// false && false(1==2) returns false
console.log(false || (1 == 2));// false


/**
 * Logika NOT
 */

// not true return false
console.log(!true) // false

// not false return true
console.log(!false) // true

// not string kosong
console.log(!"") // true

// not string ada isinya
console.log(!"Foo") // false

// not (aritmatika / logic perbandingan yg output nya bernilai true atau false)
console.log(!(1==2)) // false
