function fridayThe13ths(num) {
    let count = 0;
    let checkThisDate = [];

    for (let i = 0; i < 12; i++) {
        checkThisDate.push(  num +  ", "  + i + ", 13");
    }

    checkThisDate.forEach(month => {
        if (new Date(month).getDay() === 5) {
            count++;
        }
    });
    return count;
}

function getMonth(num) {
    let month = ["Jan","Feb", "Mar","Apr","May","Jun","Jul","Aug","Sept","Aug","Nov","Dec"]
    return month[num]

}
console.log(
fridayThe13ths(1986),      // 1
fridayThe13ths(2015),      // 3
fridayThe13ths(2017),      // 2
)