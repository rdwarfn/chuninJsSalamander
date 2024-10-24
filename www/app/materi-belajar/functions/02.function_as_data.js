/**
 * Functions as data
 * 
 * Di JS, function dapat di assign
 * kedalam variables,dan variables adalah data.
 * Kita akan melihat bagaimana konsep ini adalah
 * konsep yg poweranger (powerful).
 */

/**
 * Dalam example ini, kita assign fungsi `console.log()`
 * fungsi yg bisa ngomong
 */
var say = console.log;
say("Kalo bulan (sutena) bisa ngomongs")

/**
 * Setiap fungsi dapat di assign kedalam variable.
 * Kita dapat passing parameter pd saat di assign variable
 */

const dataPosts = [{id: "1", post: "Halo ini post 1", createtAt: "2024-10-24T07:17:51.023Z"}]
const dataArray = function () {
    return [{
        "id": "1",
        "name": "Gus Hilmi",
        "age": 170,
    }, {
        "id": "2",
        "name": "Jamaah Hariz",
        "age": 90,
    }, {

        "id": "1",
        "name": "Jamaah Ridwan",
        "age": 0.5,
    }]
}
const data = function () {
    return {
        "id": "1",
        "name": "Gus Hilmi",
        "age": 170,
    }
}

var validateDataForAge = function(data) {
    person = data();
    console.log(person);

    if (person.age < 1 || person.age > 99) {
        return true;
    } else {
        return false;
    }
}

var errorHandleForAge = function(error) {
    console.log("Error while processing age");
}
