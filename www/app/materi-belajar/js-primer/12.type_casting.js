// bad
// const totalScore = reviewScore + '';
// good
const totalScore = String(reviewScore);

// const dataProduct = {
//     name: "Kopi'",
//     reviewScore: 7.5
// }

// dataProduct.reviewScore

/**
 * Use parseInt() for Numbers
 * and always with a radix for the type casting
 */

const inputValue = '4';
// bad
// const val = new Number(inputValue);
// not bad
// const val = +inputValue;
// bad
// const val = inputValue >> 0;
// not bad

/**
 * case: const inputValue = '4'
 * 
 * Tugas:
 * - Jelasin setiap pengunaan parseInt dan Number
 * - Jelasin kelebihan dan kekurangan nya
 * - Jelasin kenapa lebih direkomendasiin pake Number
 *   untuk case yg diatas
 */
var sizeScreenPx = "1100px"
var floatReviewProduct = "7.5" // float / floating

parseInt(sizeScreenPx)

// const val = parseInt(inputValue);
// parseInt(floatReviewProduct) // 7
// parseFloat(floatReviewProduct) // 7.5

// good
// const val = Number(inputValue);

// good
const val = parseInt(inputValue, 10);

/**
 * Boolean type case
 * menggunakan booleans
 */
// const age = 0; // bad
// const hasAge = new Boolean(age); // good
// const hasAge = Boolean(age); // good
// const hasAge = !!age;

/**
 * case Boolean type
 * let userAdmin = {
 * id:1,
 * username:'admin',
 * password:'admin'}
 * let isUserAdmin = Boolean(userAdmin)
 * if (!isUserAdmin) {
 * console.log('user admin not login')
 * }else {
 * 'user admin has logged'}
 * 
 * 
 * let userLogin = false
 * 
 * if (!userLogin) {
 * console.log ('user not login')
 * } else {
 * console.log ('user is login')
 * }
 * 
 * let loginUser = true
 * 
 * if (loginUser) {
 * console.log ('user is login')
 * } else {
 * console.log ('user not login')
 * }
 * 
 * 
 */
