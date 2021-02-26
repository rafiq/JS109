// function getRandomAge(min, max) {
//     let [upperLimit,lowerLimit] = [Math.max(min,max),Math.min(min,max)]

//     let random = Math.floor((Math.random() * (upperLimit - lowerLimit) + 1)) + 20;
//     if (random < 20 || random > 120) return `Whoa!!!`;
//     return `Teddy is ${random} years old!\n`;
// }

// console.log(
//     getRandomAge(100,20),
//     getRandomAge(100,200)
// )

function removeLastChar(str) {

    return str.slice(0,str.length - 1)
}
console.log(
removeLastChar('ciao!'), // 'ciao'
removeLastChar('hello'), // 'hell'
)