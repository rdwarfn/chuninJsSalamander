/**
 * Function Literal
 *  - Function Declaration
 *  - Function Expression
 * 
 */

// bisa mengembalikan nilai / output
// bisa tidak mengembalikan nilai / output

/**
 * Function Declaration
 * 
 * mengembalikan params a + b
 */
// jsdoc
function add(a, b) {

    // process


    // console.log(a + b)
    return a + b
}

const tambahDuaParameter = add(7, 17)

// console.log(tambahDuaParameter) // 24


// Tambahan
// High order function
function addHoc(a, b, c) {
    return c(a, b)
}

const tambahDuaParamsWithHOC = addHoc(7, 17, add)

console.log(tambahDuaParamsWithHOC) // 24


// Function Expression
const add2 = function (a, b) {
    // process
    

    return a + b
}

console.log(add2(7, 17)) // 24
