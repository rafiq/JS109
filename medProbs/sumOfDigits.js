function sum(num) {
    return num.toString().split("").reduce((acc,curr) => acc += Number(curr), 0);
}

console.log(
sum(23),           // 5
sum(496),          // 19
sum(123456789),    // 45
)