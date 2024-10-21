/**
 * Ada berbagai macam
 * rekomendasi style guidlines
 * di conditional statements.
 */

// When evaluating that array has length,
// WRONG:
if ( array.length > 0 ) {}

// evaluate truthiness(GOOD):
if ( foo === false ) {}

// a reference that might be null or
// undefined, but NOT false, "" or 0,
// BAD:
if ( foo === null || foo === undefined ) {}

// GOOD
if ( foo == null ) {}

//Good
var foo = null
if(!foo){
    console.log('Kondisi terpenuhi')
} else {
    console.log('Kondisi Gagal')
}

// Don't complicate matters
return x === 0 ? 'sunday' : x === 1 ?
'Monday' : 'Tuesday';

// Better:
if (x === 0) {
    return 'Sunday';
} else if (x === 1) {
    return 'Monday';
} else {
    return 'Tuesday';
}

// Even Better:
switch (x) {
    case 0:
    return 'Sunday';
    case 1:
    return 'Monday';
    default:
    return 'Tuesday';
}

/**
 * case if else statement with negasi
 * let adminUser = ''
 * 
 * if (!adminUser){
 * console.log ('admin not login')
 * }else {
 * console.log ('admin is login')
 * }
 * 
 * let buahBuahan = 'apel'
 * if (!!buahBuahan) {
 * console.log('ini buah')
 * } else {
 * console.log ('ini bukan buah')}
 */

/**
 * switch case
 * 
 * let score = 85;
let grade;

switch (true) {
    case (score >= 90):
        grade = 'A';
        break;
    case (score >= 80):
        grade = 'B';
        break;
    case (score >= 70):
        grade = 'C';
        break;
    case (score >= 60):
        grade = 'D';
        break;
    default:
        grade = 'E';
}

console.log(`Grade: ${grade}`);
 */