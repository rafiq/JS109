function century(year) {
    let centuryNumber = Math.floor(year / 100);
    let addOneOrNot = year % 100;

    if (addOneOrNot >= 1) {
        return getCardinalEndings(centuryNumber + 1);
    }
    return getCardinalEndings(centuryNumber);
}
function getCardinalEndings(num) {
    if (num % 10 === 1 && num !== 11) return num + "st";
    else if (num % 10 === 2 && num !== 12) return num + "nd";
    else if (num % 10 === 3 && num !== 13) return num + "rd";
    return num + "th";
}
console.log(
century(2000),        // "20th"
century(2001),        // "21st"
century(1965),        // "20th"
century(256),         // "3rd"
century(5),           // "1st"
century(10103),       // "102nd"
century(1052),        // "11th"
century(1127),        // "12th"
century(11201),       // "113th"
)