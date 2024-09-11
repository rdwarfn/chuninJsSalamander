/**
 * Date Objects
 * 
 * JS tidak mempunyai tipe data date.
 * Sebagai gantinya kita dapat menggunakan
 * Date Object dan method" nya untuk melakukan pekerjaan
 * yg berhubungan dngn tgl (dates) dan wkt (times) didalam aplikasi kita
 * 
 * Date Object di JS itu cukup lengkap, dan berisi
 * beberapa method yg dapat meng-handle sbgian besar case
 * penggunaan yg berhubungan dngn Dates dan Times 
 * 
 * Prilaku Date di JS mirip dgn Java. JS menyimpan Dates sbg
 * jumlah milidetik sejak Januari 1, 1970, 00:00:00
 */


// var dataObject = new Date([parameters])

/**
 * Parameter untuk Date object constructor dapat berupa sbb:
 * 
 * - No parameters
 * - A string
 *   Param string yg merepresentasikan sebuah date sbg
 *   Month day, year hours:minutes:secods.
 * - A set of integer for ymd
 *   Set of integer values untuk year, month, dan day.
 * - A set of integer for ymd hms
 *   Set of integer values untuk tahun, month, day, hour,
 *   minutes, dan seconds.
 */

// example: no parameters
// creates today's date and time
var today = new Date();

// example: a string param
var palestineOccupiedSince = new Date("June 05, 1967 00:00:00")
// jika kita menghilangkan hours, minutes, atau seconds
// value nya akan otomatis di atur ke 0

// example: a set of integer for ymd
var muludan = new Date(2024, 8, 15);

// example: a set of integer for ymd hms
var muludan = new Date(2024, 8, 15, 21, 0, 0)


// example create dan manpulate dates di js

var today = new Date()
// console.log(today.getDate()) // *tgl skrg
// console.log(today.getMonth()) // 8
// console.log(today.getFullYear()) // 2024
// console.log(today.getHours()) // *jam skrg
// console.log(today.getMinutes()) // *menit skrg
// console.log(today.getSeconds()) // *detik skrg

/**
 * Untuk project besar, yg butuh detail
 * kontol terhadap date dan time objects,
 * direkomendasikan menggunakan lib seperti
 * - moment.js: https://github.com/moment/moment
 * - timezone: https://github.com/mde/timezone-js
 * - date.js: https://github.com/MatthewMueller/date
 */
