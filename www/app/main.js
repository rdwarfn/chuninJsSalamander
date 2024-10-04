define(function (require) {
    // Load any app-specific modules
    // with a relative require call,
    // like:
    var messages = require('./messages');
    var moment = require("moment/moment");
    require('moment/locale/id');
    
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



    /**
     * 08. Plus" Operator & Loop and Iteration
     * file materi  : js-primer/08.*
     * file test    : app/messages.testPlerlonte
     */

    print("[testPlerlonte]: run")
    var testPlerlonte = messages.testPlerlonte()

    /**
     * diharapkan:
     * - print tugas yg telah dikerjakan
     *   setiap print harus sukses di print
     */

    // tulis code
    let dataJokes = testPlerlonte.dataJoke
    let categoryOfFood = 0, categoryOfScience = 0, categoryOfSport = 0;
    print(dataJokes)

    for (let i = 0; i < dataJokes.length; i++) {
        let getDataCategory = dataJokes[i];
        const formatDate = moment(getDataCategory.created_at).format("dddd, D MMM YYYY h:mm A");
        
    // print(`Category: ${getDataCategory.category}`)
    // print(`Value: ${getDataCategory.value}`) 
    // print(`Created at: ${formatDate}`)

    var dataResult = `Category: ${getDataCategory.category}\n Value: ${getDataCategory.value}\n ${formatDate}`
    print(dataResult) 

        if (getDataCategory.category == "science"){
            categoryOfScience++;
        } else if (getDataCategory.category == "food"){
            categoryOfFood++;
        } else if (getDataCategory.category == "sports"){ 
            categoryOfSport++;
        }
    }
    // print("Total Category Science: " + categoryOfScience);
    // print("Total Category Food: " + categoryOfFood);
    // print("Total Category Sports: " + categoryOfSport);  
    
    var categoryResult = `Total Category Science: ${categoryOfScience}\nTotal Category Food: ${categoryOfFood}\nTotal Category Sports: ${categoryOfSport}`
    print(categoryResult)
    
    
    print("[testPlerlonte]: finish")


    /**
     * 08.1 Plus" Operator & Loop and Iteration (do..while, while)
     * file materi  : js-primer/08.*
     * file test    : app/messages.testPlerlonteDoWhile
     */

    print("[testPlerlonteDoWhile]: run")
    var testPlerlonteDoWhile = messages.testPlerlonteDoWhile()

    /**
     * diharapkan:
     * - print tugas yg telah dikerjakan
     *   setiap print harus sukses di print
     */

    // tulis code dibawah
    let dataOfJokes = testPlerlonteDoWhile.dataJoke;
    let i = 0;
    
    print("Do While")

    do {
     
        let getDataJokes = dataOfJokes[i];
        moment.locale('id')

        var momentDate = moment(getDataJokes.created_at).format("ddd, D MMM YYYY [Pukul] h:mm");

        const resultJokesDoWhile = `No.${getDataJokes.id}: ${getDataJokes.category}\n${getDataJokes.value}\n${momentDate} at ${getDataJokes.url}\n`;
        print(resultJokesDoWhile);     
        
    
    i++; 
    
    } while (i < dataOfJokes.length);
    print(categoryResult)
   
    print("While")
    
    i = 0;

    while (i < dataOfJokes.length) { 
        let getDataJokes = dataOfJokes[i];
        let jokeId = +getDataJokes.id
        jokeId = jokeId*2
        // print(typeof jokeId)
        
        const resultJokesWhile = `No.${jokeId}: ${getDataJokes.category}\n${getDataJokes.value}\n${momentDate} at ${getDataJokes.url}\n`;
        print(resultJokesWhile);
    
        i++; 
    }

    print(categoryResult)
    
    print("[testPlerlonteDoWhile]: finish")


    /**
     * 08. Example Plerlonte DOM
     * file materi  : js-primer/08.*
     * file test    : app/messages.testPlerlonteDom
     */

    print("[testPlerlonteDom]: run")
    var testPlerlonteDom = messages.testPlerlonteDom()

    /**
     * Dalam sedikit example disini
     * diharapkan:
     * - Pahami cara kerja DOM
     * - Buat example serupa dgn improve logic dn tampilan yg lebih baik
     */

    // tulis code
    const btnPlerlonteDOM = document.getElementById("btnPlerlonteDOM");

    btnPlerlonteDOM.addEventListener("click", initPlerlonteDOM);

    const dataGusJokes = testPlerlonteDom.dataGusJokes;

    function initPlerlonteDOM () {
        const wrap = document.getElementById("08.plerlonte_dom");
        const listOut = wrap.getElementsByClassName("list")[0]
    
        let strHtml = "<ul>";
    
        for (let i = 0; i < dataGusJokes.length; i++) {
    
            let getData = dataGusJokes[i];
    
            strHtml +=
                "<li><div><h5 class='capitalize'>No." + getData.id +
                ": " + getData.category + "<h5>" +
                "<img width='300' height='250' src='" +
                getData.imageUrl + "' alt='" + getData.imageMeta + "'" + " >" +
                "<p>" + getData.value + "</p>" +
                "<sub>" + getData.created_at + " at " +
                "<a>" + getData.url + "</a>" + "<sub>"
                "</div></li>";
    
        }
    
        strHtml += "</ul>";
        listOut.innerHTML = strHtml;

    }

    print("[testPlerlonteDom]: finish")

    print("[testDisplayImage]: run")
    var testDisplayImage = messages.testDisplayImage()

    // tulis code
    const btnImage = document.getElementById("btnImage");
    const tableHeader = document.getElementById("tableHeader")
    const dataOfBand = testDisplayImage.dataBand; 

    btnImage.addEventListener("click", toggleImageDisplay);

    function toggleImageDisplay() {
        const tableContent = document.getElementById("tableContent");
        
        if (tableContent.innerHTML === "") {
            showImage(); 
            tableHeader.style.display = "table-header-group";
        } else {
            
            tableContent.innerHTML = "";
            tableHeader.style.display = "none";
        }
    }

    function showImage() {
        const tableContent = document.getElementById("tableContent");
        let rows = "";

        for (let i = 0; i < dataOfBand.length; i++) {
            /**
             * alur kerja let rows:
             * 1. sebelum iterasi atau nilai awal rows = ""
             * 
             * 2. interasi ke i (0,1,2,3,4,5,6) pass:
             *   rows = (nilai rows sebelumnya) + (nilai yg di passing)
             * 
             * 3. balik ke point 2
             */

    
            let getDataOfBand = dataOfBand[i];
            const formatDateBand = moment(getDataOfBand.created_at).format("LLLL")
        
            // sama aja
            // rows = rows + `
            //     <tr>
            //         <td>${getDataOfBand.id}</td>
            //         <td class="text-capitalize">${getDataOfBand.category}</td>
            //         <td>
            //             <img class="img-fluid" width="150" height="100" src="${getDataOfBand.imageUrl}" alt="${getDataOfBand.imageMeta}">
            //         </td>
            //         <td>${getDataOfBand.value}</td>
            //         <td>${formatDateBand}</td>
            //         <td><a href="${getDataOfBand.url}" target="_blank">${getDataOfBand.url}</a></td>
            //     </tr>
            // `;

            // Yng tampil cuman nilai data yg terakhir 
            // rows = `
            //     <tr>
            //         <td>${getDataOfBand.id}</td>
            //         <td class="text-capitalize">${getDataOfBand.category}</td>
            //         <td>
            //             <img class="img-fluid" width="150" height="100" src="${getDataOfBand.imageUrl}" alt="${getDataOfBand.imageMeta}">
            //         </td>
            //         <td>${getDataOfBand.value}</td>
            //         <td>${formatDateBand}</td>
            //         <td><a href="${getDataOfBand.url}" target="_blank">${getDataOfBand.url}</a></td>
            //     </tr>
            // `;

            rows += `
                <tr>
                    <td>${getDataOfBand.id}</td>
                    <td class="text-capitalize">${getDataOfBand.category}</td>
                    <td>
                        <img class="img-fluid" width="150" height="100" src="${getDataOfBand.imageUrl}" alt="${getDataOfBand.imageMeta}">
                    </td>
                    <td>${getDataOfBand.value}</td>
                    <td>${formatDateBand}</td>
                    <td><a href="${getDataOfBand.url}" target="_blank">${getDataOfBand.url}</a></td>
                </tr>
            `;
    };

        tableContent.innerHTML = rows; 
    
    }
    print("[testDisplayImage]: finish")
});
