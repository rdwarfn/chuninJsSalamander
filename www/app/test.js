//Test Node
function testVariables() {
    var firstName = "Hariz";
    var lastName = "Indratama";
    var age = 17

    return {
        firstName,
        lastName,
        age
    }

}
const varResult = testVariables()
console.log(varResult)

function testConstants() {
    const id = 1;
    const username = "Hariz";
    const address = "Jl.Raya Pondok Cabe";
    const password = 12345
    const email = "jsChuninSalamander@Gmail.com"

    return {
        id,
        username,
        address,
        password,
        email
    }
}
const constResult = testConstants()
console.log(constResult)

function testString() {
    var address = "Taman Anggrek Residence";
    var subDistrict = "Tanjung Duren Selatan";
    var district = "Grogol Petamburan"
    var province = "DKI Jakarta"
    var postCode = "11470";

    const addresses = `${address} \n${subDistrict} \n${district}\n`
    const locations = `${addresses} ${province} ${postCode}`

    return {
        addresses,
        locations
    }
}

const strResult = testString()
console.log(strResult)

function testUndefinedValues() {
    var favouriteSong;
    var favouriteBand;

    const isEqualUndefined_favouriteSong = favouriteSong == undefined;
    const isEqualUndefined_favouriteBand = favouriteBand == undefined;
    const isEqualNull_favouriteSong = favouriteSong == null;
    const isEqualNull_favouriteBand = favouriteBand == null;

    return {
        favouriteSong,
        favouriteBand,
        isEqualUndefined_favouriteSong,
        isEqualUndefined_favouriteBand,
        isEqualNull_favouriteSong,
        isEqualNull_favouriteBand
    };
}

// Call the function and log the result
const result = testUndefinedValues();
console.log(result);

//06. Instanceof Operator
function testInstanceof() {
    const dataTaskss = {
        "Stage": "In Progress",
        "Assigned To": null,
        "Task Url": new String("https://app.puhun.com/workflows/2ylSaZ/tasks/ooCwnZ"),
        "Company Id": new Number(42),
        "Company Name": "Haris Corp",
        "Number of Employees": 10,
        "Contract Value": 10000.00,
        "Expected Close Date": "2024-09-13",
        "International": new Boolean(false)
    }
    var dataTasks = {
        stage: new String("In Progress"),
        assignedTo: new Number(null),
        taskUrl: new String("https://app.puhun.com/workflows/2ylSaZ/tasks/ooCwnZ"),
        companyId: new Number(42),
        companyName: new String("Haris Corp"),
        numberOfEmployees: new Number(10),
        contractedValue: new Number(10000.00),
        expectedCloseDate: new String("2024-09-13"),
        internasional: new Boolean(false)

    }

    const isStage = dataTasks.stage instanceof String;
    const isAssignedToNumber = dataTasks.assignedTo instanceof Number;
    const isTaskUrl = dataTasks.taskUrl instanceof String;
    const isCompanyId = dataTasks.companyId instanceof Number;
    const isCompanyName = dataTasks.companyName instanceof String;
    const isNumberOfEmployees = dataTasks.numberOfEmployees instanceof Number;
    const isContractValue = dataTasks.contractedValue instanceof Number;
    const isExpectedCloseDate = dataTasks.expectedCloseDate instanceof String;
    const isInternasional = dataTasks.internasional instanceof Boolean;

    return {
        isStage,
        isAssignedToNumber,
        isTaskUrl,
        isCompanyId,
        isCompanyName,
        isNumberOfEmployees,
        isContractValue,
        isExpectedCloseDate,
        isInternasional
    }

}

const instanceOfResult = testInstanceof()
console.log(instanceOfResult)




//Pre Date Object
function testStringInterpolasiDateObject() {
    const currentDate = new Date();
    const postedDate = new Date("2019-10-16")
    const updatedDate = new Date("2023-1-3")

    const monthFullName = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]

    const monthShortName = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Oct",
        "Nov",
        "Dec"
    ]

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const day = currentDate.getDay();
    const shortYear = String(year).slice(-2);
    const postedYear = postedDate.getFullYear();
    const postedMonth = postedDate.getMonth();
    const postedDay = postedDate.getDay();
    const updatedYear = updatedDate.getFullYear();
    const updatedMonth = updatedDate.getMonth();
    const updatedDay = updatedDate.getDate();

    const fullMonth = `Terakhir diperbarui: ${day} ${monthFullName[month]} ${year}`;
    const shortMonth = `${monthShortName[month]} ${day} ${shortYear}`;
    const monthCustom = `Posted On ${monthShortName[postedMonth]} ${postedDay} ${postedYear}, Updated On ${monthShortName[updatedMonth]} ${updatedDay} ${updatedYear}`

    return {
        fullMonth,
        shortMonth,
        monthCustom
    }


}

const strDateObject = testStringInterpolasiDateObject()
console.log(strDateObject)



// 07. test date objects
const moment = require('/JS/chuninJsSalamander/www/lib/moment/moment');
function testDateObjects() {




    const dataComments = [
        {
            "author": "gus.hilmi@puhun.com",
            "body": "Shalom shalom shalom. Get ready jamaah!, ibadah metaverse segera dimulai",
            "timestamp": "2024-09-20T03:53:15.708Z"
        },
        {
            "author": "jamaah.haris@puhun.com",
            "body": "Siapp paboss @Gus Hilmi",
            "timestamp": "2024-09-20T09:57:24.937Z"
        },
        {
            "author": "jamaah.ridwan@puhun.com",
            "body": "Siapp ngentod, eh guru @Gus Hilmi",
            "timestamp": "2024-09-20T09:57:24.937Z"
        }
    ]

    /**
     * Terdapat data balikan api comments
     * Tugas:
     * 1. Buatlah seperti contoh seperti gambar tugas-date_objects.png.
     *
     * Catatan:
     * 1. Lihat kembali materi" dan testCase" sebelumnya sbg acuan
     * 2. Tidak perlu sama seperti gambar, boleh improve dan buat sekreatif mungkin.
     *    Tunjukan pesonamu, shalom
     */
    dataComments.forEach(function (date) {
        date.timestamp = moment(date.timestamp).format("DD MMM YYYY hh:mm")
    });


    return {
        dataComments
    }
}
const dateresult = testDateObjects();
console.log(dateresult);