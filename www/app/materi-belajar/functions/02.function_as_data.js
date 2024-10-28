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

const dataPosts = [{ id: "1", post: "Halo ini post 1", createtAt: "2024-10-24T07:17:51.023Z" }]
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

// Array fungsi bawaan JS (includes)
// untuk tugas function as data
const arryCategory = []
const dataBook = [
    { "title": "Mockingjay (The Hunger Games #3)", "category": "Default", "description": "My name is Katniss Everdeen.Why am I not dead?I should be dead.Katniss Everdeen, girl on fire, has survived, even though her home has been destroyed. Gale has escaped. Katniss's family is safe. Peeta has been captured by the Capitol. District 13 really does exist. There are rebels. There are new leaders. A revolution is unfolding.It is by design that Katniss was rescued fr My name is Katniss Everdeen.Why am I not dead?I should be dead.Katniss Everdeen, girl on fire, has survived, even though her home has been destroyed. Gale has escaped. Katniss's family is safe. Peeta has been captured by the Capitol. District 13 really does exist. There are rebels. There are new leaders. A revolution is unfolding.It is by design that Katniss was rescued from the arena in the cruel and haunting Quarter Quell, and it is by design that she has long been part of the revolution without knowing it. District 13 has come out of the shadows and is plotting to overthrow the Capitol. Everyone, it seems, has had a hand in the carefully laid plans--except Katniss.The success of the rebellion hinges on Katniss's willingness to be a pawn, to accept responsibility for countless lives, and to change the course of the future of Panem. To do this, she must put aside her feelings of anger and distrust. She must become the rebels' Mockingjay--no matter what the personal cost. ...more", "price": "\u00a320.44" }
]

// loop & iteration
for (let i = 0; i < dataBook.length; i++) {
    const getBook = dataBook[i];

    // cek apakah categori sudah ada di arryCategory
    // cara 1
    if (arryCategory.includes(getBook.category)) {
       // console.log("Buku sudah di masukan di arryCategory")
    } else {
        arryCategory.push(getBook.category)
    }

    // cara 2
    if (!arryCategory.includes(getBook.category)) {
        arryCategory.push(getBook.category)
    }
}
