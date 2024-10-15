/**
 * Checking the type of a variable
 * can be done as follows:
 */

//String:
typeof variable === "string"
//Number:
typeof variable === "number"
//Boolean:
typeof variable === "boolean"
//Object:
typeof variable === "object"
//null:
variable === null
//null or undefined:
variable == null

/**
 * Obj constructor
 * 
 * yg pake constructor new,
 * dia sifat nya obj kalo di typeof
 */
variable = String("string obj")

const apiComents = {
    id: String("1234sdfsafd"),

    // bener tapi kurang tepat: obj
    // variable: new String("str obj"),

    // bener
    // variable: String("str pass"),

    // Salah
    variable: Number(1000)
}

// if (apiComents.variable != null)
if (!apiComents.variable) {

    if (typeof apiComents.variable == "object") {

        console.log("handle str obj")

    } else if (typeof apiComents.variable == "string") {

        console.log("handle str normal")

    } else {
        console.log("handle variable yg kemungkinan tdk sesuai tipe nya")
    }
}

/**
 * Array case
 */
const arryComments = []

// 1.
if (typeof arryComments === "object") {
    console.log("handle kurang pasti")

    if (Array.isArray(arryComments)) {
        console.log("handle array yg valid")

    } else {
        console.log("tipe obj yg bkn array")
    }

}

// 2.
if (Array.isArray(arryComments)) {
    console.log("handle array yg valid")
}
