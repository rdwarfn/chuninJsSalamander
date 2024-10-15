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
// const val = parseInt(inputValue);
// good
// const val = Number(inputValue);
// good
const val = parseInt(inputValue, 10);
