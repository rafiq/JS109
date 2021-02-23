let readlinesync = require('readline-sync');
// function getUser(inputParam) {
//   let rlSync = require('readline-sync');
//   return rlSync.question(inputParam);
// }
function howBigIsThisRoom() {
    console.clear();
    let userChoice = readlinesync.question(`Would you like to calculate the area of your room by meters or feet?\n`)

    if (userChoice[0].toLowerCase() === "m") {
        let length = readlinesync.question(`Please enter the length of the room in meters.\n`);
        let width = readlinesync.question(`Please enter the width of the room in meters.\n`);
        let areaSqMt = getArea(length,width);
        let areaSqFt = (areaSqMt * 10.7639).toFixed(2);

        console.log( `The area of this room is ${areaSqMt} square meters (${areaSqFt} square feet)`);
    } else {
        let length = readlinesync.question(`Please enter the length of the room in feet.\n`);
        let width = readlinesync.question(`Please enter the width of the room in feet.\n`);
        let areaSqFt = getArea(length,width);
        let areaSqMt = (areaSqFt / 10.7639).toFixed(2);

        console.log( `The area of this room is ${areaSqFt} square feet (${areaSqMt} square meters)`);
    }
    // console.log(userChoice[0].toLowerCase())
}

function getArea(num1, num2) {
    return num1 * num2;
}

function convertToSqFt(num) {
    return num * 10.7639
}
howBigIsThisRoom();