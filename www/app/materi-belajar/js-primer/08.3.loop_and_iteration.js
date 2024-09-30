/**
 * 08.3 Loop and Iteration
 * Loop atau perulangan di JS adlh sebuah teknik
 * yg menawarkan cara cepat dan mudah untuk melakukan
 * sesuatu secara berulang-ulang.
 * 
 * Pada chapter ini kita akan mengenal berbagai
 * iteration statements yg bisa digunakan di JS.
 * 
 */

/**
 * operator yg biasa di pakai atau berhubungan dgn materi:
 * - Sama dengan / equals: == / ===
 * - Kurang dari (less than): <
 * - Lebih dari (more than): >
 */

/**
 * 1. For Statement
 * Perulangan For mengulang hingga kondisi tertentu
 * bernilai salah atau false.
 * Perulangan For di JS mirip dgn perulangan For di Java
 * dan C.
 * 
 * For statement terlihat sbb:
 * ``
 * for (initialization; condition; afterthought;)
 *  statement
 * ``
 * Ketika perulangan `for` dijalankan, yg terjadi adlh sbg berikut:
 * 
 * 1.1. Inisialisasi ekspresi `initialization`,
 * Jika ada maka dieksekusi.
 * Ekspresi ini biasanya menginisialisasi satu atau lebih
 * counter loop (perulangan).
 * Ekspresi ini jg dapat mendeklarasikan variabel
 * 
 * 1.2. Ekspresi `condition`.
 * Jika nilai dari `condition` adlh true, loop statement di eksekusi.
 * Jika tidak, for loop akan berakhir. Jika ekspresi kondisi dihilangkan
 * seluruhnya, maka kondisi tsb diasumsikan benar.
 * 
 * 1.3. `statement` dieksekusi.
 * Untuk mengeksekusi bbrpa pernyataan, gunakan pernyataan blok ({})
 * untuk mengelompokan pernyataan" tsb.
 * 
 * 
 * 1.4. Jika ada, ekspresi pembaruan `afterthought` dieksekusi.
 * 
 * 1.5. Kontol kembali ke step 2
 */

var listOfMusicType = ["R&B", "Punk", "Jazz", "Blues", "Pop", "Alternative Rock"] // data source list of musik
var listMyFavor = ["Alternative Rock", "Punk", "Dangdut"] // my favor

var numberSelected = 0

for (var i = 0; i < listOfMusicType.length; i++) {

    var getListByIndex = listOfMusicType[i]

    // console.log(getListByIndex) // R&B, Punk, Jazz
    
    //cara pertama
    if (listMyFavor.includes(getListByIndex)) {

        numberSelected++

    }

    // if (getListByIndex == "Punk")

}

var dataA = [
    {
        "nilaiA": 123,
        "nilaiB": 234,
        "rataRata": "Baik"
    },

    {
        "nilaiA": 123,
        "nilaiB": 234,
        "rataRata": "Cukup"
    }
];

var countBaik = 0, countCukup = 0;


for (let i = 0; i < dataA.length; i++) {

    let getDataAObject = dataA[i];

    // if (getDataAObject.nilaiA == 123) {

    // }


    if (getDataAObject.rataRata == "Baik") {

        countBaik++

    } else if (getDataAObject.rataRata == "Cukup") {

        countCukup++

    }

}

/**
 * 2. Do...While Statement
 * Perulangan `do...while` mengulang hingga kondisi tertentu
 * bernilai salah atau false.
 * 
 * do...while statement terlihat sbb:
 * 
 * ```
 * do
 *   statement
 * while (condition);
 * ``` 
 * 
 * 2.1 Statement`
 * `statement` slalu dieksekusi satu kali sblm kondisi diperiksa.
 * Untuk meng-eksekusi bberapa `statements`, kita bisa menggunakan
 * block statement ({}) untuk menggelompokan `statements` trsb.
 * 
 * 2.2 Condition
 * Jika kondisi bernilai benar, pernyataan akan dieksekusi lagi.
 * Pada akhir setiap eksekusi, kondisi diperiksa. Ketika kondisi salah,
 * eksekusi berhenti, dan kontol berpindah ke pernyataan stlh `do...while`
 */

/**
 * Example do...while
 * Pada contoh berikut, `do loop` mengulang setidaknya satu kali dan
 * menggulang sampai i tidak lagi kurang dari 5
 */
var i = 0;

// console.log
do {
    i = i++;
    
    // bentuk lain dr i = i + 1, adlh i = i++ atau i += 1;
    // i += 1;

    // console.log(i) 1,2,3,4
    // con
} while (i > 5);


/**
 * 3. While Statement
 * Perulangan `while` akan trus dieksekusi `statement` nya selama
 * kondisi yg ditentukan bernilai benar atau true.
 * 
 * While statement terlihat sbb:
 * 
 * ```
 * while (condition)
 *   statement
 * ```
 * 
 * Jika kondisi menjadi salah atau false, statement dalam perulangan
 * berhenti dieksekusi dan kontrol berpindah ke pernyataan stlah
 * perulangan.
 * 
 * Kondisi (condition) akan dicek trlbh dahulu sblm pernyataan dlm
 * perulangan dieksekusi. Jika kondisi bernilai benar ato true,
 * pernyataan dieksekusi dan kondisi diuji ato dicek lagi.
 * Jika kondisi bernilai salah, eksekusi berhenti dan kontol
 * diteruskan ke pernyataan stlh while.
 */


/**
 * Example 1 while
 * Pada contoh berikut
 */

let n = 0
let x = 0;

while (n < 3) {
    n++; // 1, 2, 3
    x += n; // 1, 3, 6
    // sama dengan kayak dibawah
    // x = x + n
}

/**
 * Pada setiap iterasi, perulangan menambah 'n' dan menambahkan
 * nilai trsbt ke 'x'. Oleh karena itu, x dan n memiliki niali sbb:
 * 
 * - Setelah iterasi pertama pass:
 *   n = 1 dan x = 1
 * - Setelah iterasi kedua pass:
 *   n = 2 dan x = 3
 * - Setelah iterasi ketiga pass:
 *   n = 3 dan x = 6
 */

/**
 * Example 2 while
 */
