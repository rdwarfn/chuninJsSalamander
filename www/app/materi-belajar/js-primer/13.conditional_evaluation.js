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
/**
 * (expression yg dibandingin) ? (process if) : (process else)
 * 
 * (e) ? (p if) : (p + expression else if) ? (p else if) : (p else)
 */

// if (expresssion) / (?)
// else / (:)
// else if (expresssion) / 

var x = 3
var getDay = x === 0 ? 'sunday' : x === 1 ?
'Monday' : 'Tuesday';

const daysOfInteger = [1, 2, 3]
const daysOfStrings = [
    {
        id: 1,
        name: "Sunday"
    },
    {
        id: 2,
        name: "Monday"
    }
]

/**
 * contoh daysOfInteger
 */
const getDayInt = daysOfInteger[0]

// const getDayName = getDayInt === 1 ? "Minggu" : "Hari lainnya" // if else biasa
// const getDayName = getDayInt === 1 ? "Minggu" : getDayInt === 2 ? "Senin" : "Hari lainnya"
const getDayName = getDayInt === 1
                ? "Minggu"
                : getDayInt === 2
                    ? "Senin" 
                    : "Hari lainnya";


// Better:
if (x === 0) {
    return 'Sunday';
} else if (x === 1) {
    return 'Monday';
} else {
    return 'Tuesday';
}

// Even Better:
var getDayWithSwitch = ''

switch (x) {
    // process 1
    case 0:
    getDayWithSwitch =  'Sunday';

    // process 2
    case 1:
    getDayWithSwitch = 'Monday';

    // else
    default:
    // getDayWithSwitch = 'Tuesday';
    getDayWithSwitch = 'Hari lainnya';
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
console.log(getDayWithSwitch) // Sunday, Hari lainnya
