function countOccurrences(array) {
    let obj = {};

    for (let i = 0; i < array.length; i++) {
        if (obj[array[i]]) obj[array[i]]++;
        else obj[array[i]] = 1
    }

    Object.entries(obj).forEach(array => {
        printInventory(array[0],array[1]);
    });
}

function printInventory(key,prop) {
    console.log(`${key} => ${prop}`)
}


let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
car => 4
truck => 3
SUV => 1
motorcycle => 2