/**
 * Equality
 * 
 * JS menawarkan dua mode equality
 * Strict/ketat dan loose/weak/longgar.
 * Pd dasarnya, equality strict akan memeriksa
 * tipe data nya ketika membandingkan dua nilai,
 * sementara loose/weak akan memeriksa nilai tanpa
 * melihat atau memeriksa tipe data nilai nya.
 * 
 * Pengecekan strict equality dilakukan dengan simbol '==='
 * (sama dgn 3 kali), sedangkan pengecekan weak/loose equality
 * dilakukan dengan simbol '==' (sama dngn 2 kali).
 * 
 * ECMAScript 6 jg menawarkan method Object.is untuk melakukan
 * pengecekan strict equality seperti '==='.
 * Namun Object.is digunakan sbg special handling untuk NaN: -0 dan +0.
 * Ketika 'NaN===NaN' dan 'NaN==NaN' bernilai false,
 * maka bila menggunakan Object.is(NaN, NaN) akan mengembalikan nilai true
 */

/**
 * Strict Equlity using ===
 */

console.log("" === "0") // false

console.log(0 === "") // false

console.log(0 === "0") // false

console.log(false === "false") // false

/**
 * Berikut adalah next contoh" yg harus coba dilakukan baik
 * di JS Bin atau Node REPL atau node cmldn atau lainnya trsrahlah ngentod
 */
var n = 0;
var o = new String("0");
var s = "0";
var b = false;
console.log(n === n); // true - same values for numbers
console.log(o === o); // true - non numbers are compared for their values
console.log(s === s); // true - sama aja
console.log(n === o); // false - no implicit type conversion, types are different
console.log(n === s); // false - types are different
console.log(o === s); // false - types are different
console.log(null === undefined); // false
console.log(o === null); // false
console.log(o === undefined); // false

/**
 * Catatan. 
 * Untuk menangani kasus Not Equal ketika menggunakan
 * strict equality dipit diginikin dingin simbil '!=='.
 */

/** ============================================================================== */

/**
 * Weak Equality using ==
 * 
 * gapenting penting bgt sih, krn udah sering jg gunain pake ini.
 * Sebisa mungkin untk gunain yg strict aja ya mamen.
 * 
 * Dua rius.. sebisa mungkin pake yg strict, soalnya JS aja udh weak typing.
 * Apalagi klo pengecekan data yg penting, cb aja pake yg weak trus data yg dibandingin
 * penting pake banget, dn butuh hati" dn butuh seminimal mngkn kesalahan. (*kenapa seminimal mngkn
 * bkn nya hrus jgn sampe??, krn gamungkin klo gaada kesalahan, stop nyoba jadi dewa)
 * yahh paling ada kemungkinan leher lu dipotong
 */


