define(function (require) {
    // Load any app-specific modules
    // with a relative require call,
    // like:
    var messages = require('./messages');
    var moment = require("moment/moment");

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
    // print(testDateObjects.dataComments)
    
    const authorHilmi = testDateObjects.authorHilmi
    authorHilmi.timestamp = moment(authorHilmi.timestamp).format("D MMM YYYY h:mm")
    const authorHariz = testDateObjects.authorHariz
    authorHariz.timestamp = moment(authorHariz.timestamp).format("D MMM YYYY h:mm")
    const authorRidwan = testDateObjects.authorRidwan
    authorRidwan.timestamp = moment(authorRidwan.timestamp).format("D MMM YYYY h:mm")


    // print(authorHilmi)
    // print(authorHaris)
    // print(authorRidwan)
    const authorConversation = authorHilmi.author
    const charAtConversation = authorConversation.charAt(0)
    const authorConversation2 = authorHariz.author
    const charAtConversation2 = authorConversation2.charAt(0)
    const authorConversation3 = authorRidwan.author
    const charAtConversation3 = authorConversation3.charAt(0)
    
    // menggunakan string interpolasi
    const conversation  = `${charAtConversation} : ${authorHilmi.body} \n${authorHilmi.timestamp} oleh ${authorHilmi.author}`
    const conversation2  = `${charAtConversation2} : ${authorHariz.body} \n${authorHariz.timestamp} oleh ${authorHariz.author}`
    const conversation3  = `${charAtConversation3} : ${authorRidwan.body} \n${authorRidwan.timestamp} oleh ${authorRidwan.author}`
    

    print(conversation)
    print(conversation2)
    print(conversation3)
    


    print("[testDateObjects]: finish")


    /**
     * 08.3 Example: Loop and Iteration
     * file materi  : js-primer/08.3.loop_and_iteration
     */
    print("[exampleLoopAndIteration]: run")
    
    function countSelected(selectObject) {

        // main
        let numberSelected = 0;
        for (let i = 0; i < selectObject.options.length; i++) {
            if (selectObject.options[i].selected) {
                numberSelected++;
            }
        }


        return numberSelected;
    }
    
    const btn = document.getElementById("btn");
    
    btn.addEventListener("click", () => {
        const musicTypes = document.selectForm.musicTypes;
        print(`You have selected ${countSelected(musicTypes)} option(s).`);
    });

    print("[exampleLoopAndIteration]: finish")

    print("[exampleDropdown]: run")

    function dropdownSelected(selectValue){

        let valueSelected = [];
        for (let a =1;a < selectValue.options.length;a++){
            if(selectValue.options[a].selected){
                valueSelected.push(selectValue.options[a].text);
            }
        }
        return valueSelected;
    }

    const btnResult = document.getElementById("btnResult");

    btnResult.addEventListener("click", () => {
        const dropdownSelect = document.selectDropdown.dropdownTypes;
        const selectedValues = dropdownSelected(dropdownSelect);
    

        if (selectedValues.length > 0) {
            print(`You selected: ${selectedValues.join(', ')}`);
        } else {
            
            print("Please select at least one option.");
        }
        
       
    });
    print("[exampleDropdown]: finish")
});
