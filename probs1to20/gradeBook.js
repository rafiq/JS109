function getGrade(num1,num2,num3) {
    const letterGrades = {10:"A=",9:"A",8:"B",7:"C",6:"D",5:"F"}

    let rawTotal = [...arguments].reduce((a,b) => a + b);
    let numOfAssignments = [...arguments].length;
    let avgOfGrades = (rawTotal / numOfAssignments).toFixed(2);
    let firstDigit = Math.floor(avgOfGrades / 10);

    if (firstDigit < 5) {
        return "You got to do better!"
    }
    return letterGrades[firstDigit];
}
console.log(
getGrade(95, 90, 93),    // "A"
getGrade(50, 50, 95),    // "D"
getGrade(50, 50, 20),    // "D"
)