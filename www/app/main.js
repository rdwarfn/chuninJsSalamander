define(function (require) {
    // Load any app-specific modules
    // with a relative require call,
    // like:
    var messages = require('./messages');

    // Load library/vendor modules using
    // full IDs, like:
    var print = require('print');

    /**
     * Disini semua test di dalam file message dijalankan
     */
    
    /**
     * 01. Variables
     * file materi  : js-primer/01.variables.js
     * file test    : app/messages.testVariables
     */
    print("[testVariables]: run")
    var testVariables = messages.testVariables()

    // diharapkan:
    // - print var yg telah dibuat
    //   setiap var harus sukses di print
    // - coba tambahkan firtName dan age
    //   hasi print harus NaN

    print(testVariables.firstName) // nilai harus undefined
    print(testVariables.lastName) // nilai harus Indratama
    print(testVariables.age) // nilai harus 17
    print(testVariables.firstName + testVariables.age) // nilai harus NaN

    print("[testVariables]: finish")


    /**
     * 02. Constants
     * file materi  : js-primer/02.constants
     * file test    : app/messages.testConstants
     */

    print("[testConstants]: run")
    var testConstants = messages.testConstants()

    // diharapkan:
    // - print constants yg telah dibuat
    //   setiap constants harus sukses di print
    // - print nilai yg dicoba diubah pada constants
    //   constants yg nilainya diubah harus gagal atau error

    // tulis code print di bawah ini

    print("[testConstants]: finish")


    /**
     * 03. String
     * file materi  : js-primer/03.string
     * file test    : app/messages.testString
     */

    print("[testString]: run")
    var testString = messages.testString()

    // diharapkan:
    // - print var yg telah dibuat
    //   setiap var harus sukses di print
    // - print constants adresses
    //   setiap constants harus sukses di print
    //   nilai constants harus menyertakan newline
    // - print constants locations
    //   setiap constants harus sukses di print
    //   nilai constants harus berisi kumpulan dari
    //   data var / constants sebelumnya

    // tulis code print di bawah ini

    print("[testString]: finish")


    /**
     * 04. Undefined values
     * file materi  : js-primer/04.undfined_values
     * file test    : app/messages.testUndefinedValues
     */

    print("[testUndefinedValues]: run")
    var testUndefinedValues = messages.testUndefinedValues()

    // diharapkan:
    // - print var yg telah dibuat
    //   setiap var harus sukses di print
    //   setiap print bernilai undefined
    // - print constants yg telah dibuat
    //   setiap constants harus sukses di print
    //   setiap print harus bernilai boolean true

    // tulis code print di bawah ini

    print("[testUndefinedValues]: finish")


    /**
     * 05. Boolean Values
     * file materi  : js-primer/05.boolean_values
     * file test    : app/messages.testBooleanValues
     */

    print("[testBooleanValues]: run")
    var testBooleanValues = messages.testBooleanValues()

    // diharapkan:
    // - print var yg telah dibuat
    //   setiap var harus sukses di print
    // - print constants yg telah dibuat
    //   setiap constants harus sukses di print
    //   setiap print harus bernilai boolean: 4 kali true, 4 kali false

    // tulis code print di bawah ini

    print("[testBooleanValues]: finish")


    /**
     * 06. Instanceof Operator
     * file materi  : js-primer/06.instanceof_operator
     * file test    : app/messages.
     */

    print("[testInstanceofOperator]: run")
    var testInstanceofOperator = messages.testInstanceofOperator()

    /**
     * diharapkan:
     * - print var yg telah dibuat
     *   setiap var harus sukses di print
     *   nilai yg tampil adlh yg di assign
     * - print constants yg telah dibuat
     *   setiap constants harus sukses di print
     *   nilai yg tampil harus boolean true
     */

    // tulis code print dibawah ini

    print("[testInstanceofOperator]: finish")
});
