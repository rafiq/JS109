const MIN_PER_HOUR = 60;

function beforeMidnight(str) {
    let hours = str.split(":")[0] * 1;
    let minutes = str.split(":")[1] * 1;
    if (hours === 24) return 0;
    hours = hours * MIN_PER_HOUR;

    return hours - minutes;
}
function afterMidnight(str) {
    let hours = str.split(":")[0] * 1;
    let minutes = str.split(":")[1] * 1;
    if (hours === 24) return 0;
    hours = hours * MIN_PER_HOUR;
    return hours + minutes;
}

console.log(afterMidnight("00:00"))//0);
console.log(beforeMidnight("00:00"))//0);
console.log(afterMidnight("12:34"))//754);
console.log(beforeMidnight("12:34"))//686);
console.log(afterMidnight("24:00"))//0);
console.log(beforeMidnight("24:00"))//0);
console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);

// I like how the LS answer put the const in the global scope so they did not have to rewrite for each function. I could have put the hours and mintues variables in the global scope as well. I also like how they destructured the time array set to [hours, minutes] because that does save a some typing.
// const HOURS_PER_DAY = 24;
// const MINUTES_PER_HOUR = 60;
// const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

// function afterMidnight(timeStr) {
//   let [hours, minutes] = timeStr.split(":").map(num => Number(num));
//   return ((hours * MINUTES_PER_HOUR) + minutes) % MINUTES_PER_DAY;
// }

// function beforeMidnight(timeStr) {
//   let deltaMinutes = MINUTES_PER_DAY - afterMidnight(timeStr);
//   if (deltaMinutes === MINUTES_PER_DAY) {
//     deltaMinutes = 0;
//   }
//   return deltaMinutes;
// }