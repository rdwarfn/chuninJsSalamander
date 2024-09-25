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
