define(function (require) {
    // Load any app-specific modules
    // with a relative require call,
    // like:
    var messages = require('./messages');

    // Load library/vendor modules using
    // full IDs, like:
    var print = require('print');
    var moment = require("moment/moment")

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
    print(testConstants.id)
    print(testConstants.username)
    print(testConstants.address)
    print(testConstants.password)
    print(testConstants.email)

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
    print(testString.addresses)
    print(testString.locations)

    print("[testString]: finish")


    /**
     * 04. Undefined values
     * file materi  : js-primer/04.undfined_values
     * file test    : app/messages.testUndefinedValues
     */

    print("[testUndefinedValues]: run")
    var testUndefinedValues = messages.testString()

    // diharapkan:
    // - print var yg telah dibuat
    //   setiap var harus sukses di print
    //   setiap print bernilai undefined
    // - print constants yg telah dibuat
    //   setiap constants harus sukses di print
    //   setiap print harus bernilai boolean true

    // tulis code print di bawah ini
    print(testUndefinedValues.myVariable1)
    print(testUndefinedValues.myVariable2)
    print(testUndefinedValues.isEqualUndefined_myVariable1)
    print(testUndefinedValues.isEqualUndefined_myVariable2)
    print(testUndefinedValues.isEqualNull_myVariable1)
    print(testUndefinedValues.isEqualNull_myVariable2)
   

    print("[testUndefinedValues]: finish")


    /**
     * 05. Boolean Values
     * file materi  : js-primer/05.boolean_values
     * file test    : app/messages.testBooleanValues
     */

    print("[testBooleanValues]: run")
    var testBooleanValues = messages.testString()

    // diharapkan:
    // - print var yg telah dibuat
    //   setiap var harus sukses di print
    // - print constants yg telah dibuat
    //   setiap constants harus sukses di print
    //   setiap print harus bernilai boolean: 4 kali true, 4 kali false

    // tulis code print di bawah ini
    print(testBooleanValues.isNokiaTrue)
    print(testBooleanValues.isSamsungTrue)
    print(testBooleanValues.isRealmeTrue)
    print(testBooleanValues.isHuaweiTrue)
    print(testBooleanValues.isNokiaFalse)
    print(testBooleanValues.isSamsungFalse)
    print(testBooleanValues.isRealmeFalse)
    print(testBooleanValues.isHuaweiFalse)

    print("[testBooleanValues]: finish")

     /**
     * 06. Instanceof Operator
     * file materi  : js-primer/06.instanceof_operator
     * file test    : app/messages.testInstanceofOperator
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
     print(testInstanceofOperator.isStage)
     print(testInstanceofOperator.isAssignedToNumber)
     print(testInstanceofOperator.isTaskUrl)
     print(testInstanceofOperator.isCompanyId)
     print(testInstanceofOperator.isCompanyName)
     print(testInstanceofOperator.isNumberOfEmployees)
     print(testInstanceofOperator.isContractValue)
     print(testInstanceofOperator.isExpectedCloseDate)
     print(testInstanceofOperator.isInternasional)
 
     print("[testInstanceofOperator]: finish")

     print("[testStringInterpolasiDateObject]: run")
     var testStringInterpolasiDateObject = messages.testStringInterpolasiDateObject()

     print(testStringInterpolasiDateObject.fullMonth)
     print(testStringInterpolasiDateObject.shortMonth)
     print(testStringInterpolasiDateObject.monthCustom)


     print("[testStringInterpolasiDateObject]: finish")


    print("[testInstanceofOperator]: finish")


    /**
     * 07. Date Objects
     * file materi  : js-primer/07.date_objects
     * file test    : app/messages.testDateObjects
     */

    print("[testDateObjects]: run")
    const testDateObjects = messages.testDateObjects()

    /**
     * diharapkan:
     * - print tugas yg telah dibuat
     *   setiap print harus sukses
     */

    // tulis code print dibawah ini


    print("[testDateObjects]: finish")
});
