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
