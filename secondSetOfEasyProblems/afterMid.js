function timeOfDay(num) {
    const MINUTES_PER_DAY = 1440;
    const HOURS_PER_DAY = 24;
    const MIN_PER_HOUR = 60;
    let hours = num / MIN_PER_HOUR;
    const daysOfWeek = ["Sun","Mon","Tues","Wed","Thur","Fri","Sat"];
    let minutes = Math.floor((hours - Math.floor(hours)) * MIN_PER_HOUR);
    minutes = ((minutes + "").split(".")[0]).padStart(2,"0")
    let dayCount = 0;
    let pluralEnding = "s";

    if (num > 0) {
        while (hours >= HOURS_PER_DAY) {
            dayCount++;
            hours -= HOURS_PER_DAY;
        }
    } else if (num < 0) {
        while (Math.abs(hours) >= HOURS_PER_DAY) {
            dayCount--;
            hours += 24;
        }
        hours += 24;
    }
    hours = ((hours + "").split(".")[0]).padStart(2,"0");

    if (dayCount === 1) pluralEnding = "";
    if (dayCount < 0) dayCount += 6;
    return `${daysOfWeek[dayCount]} ${hours}:${minutes}`;
    // return dayCount


    // return num % MINUTES_PER_DAY
}

// console.log(timeOfDay(0) === "00:00");
// console.log(timeOfDay(-3) === "23:57");
// console.log(timeOfDay(35) === "00:35");
// console.log(timeOfDay(-1437) === "00:03");
// console.log(timeOfDay(3000) === "02:00");
// console.log(timeOfDay(800) === "13:20");
// console.log(timeOfDay(-4231) === "01:29");
console.log(timeOfDay(0))//"00:00");
console.log(timeOfDay(-3))//"23:57");
console.log(timeOfDay(35))//"00:35");
console.log(timeOfDay(-1437))//"00:03");
console.log(timeOfDay(3000))//"02:00");
console.log(timeOfDay(800))//"13:20");
console.log(timeOfDay(1540))//"13:20");
console.log(timeOfDay(-4231))//"01:29");

