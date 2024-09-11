/**
 * Boolean Operators
 * 
 * Ada tiga boolean operator di JS
 * AND (&), OR(|), and NOT(!)
 * atau disebut juga logika operator
 */

/**
 * example: Logika AND
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
console.log(false && (1 == 2))


/**
 * example: Logika OR
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
