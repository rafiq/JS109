function triangle(...nums) {
    // let allAngles = 360;
    let sortedArray = nums.sort((a,b) => a - b);
    let max = sortedArray[2];
    let min = sortedArray[0];
    let middleAngle = sortedArray[1];
    let total = max + min + middleAngle;

    if (total !== 180) return "invalid";
    if (max === 0 || min === 0 || middleAngle === 0) return "invalid";

    return total;
}

// Right: One angle is a right angle (exactly 90 degrees).
// Acute: All three angles are less than 90 degrees.
// Obtuse: One angle is greater than 90 degrees.
console.log(
triangle(60, 70, 50),       // "acute"
triangle(30, 90, 60),       // "right"
triangle(120, 50, 10),      // "obtuse"
triangle(0, 90, 90),        // "invalid"
triangle(50, 50, 50),       // "invalid"
)

// The LS answer below did a great job seperating the validation criteria to its own function and simple returned a comparison of if the input was 180 total and it had no zeros as opposed to making those if conditionals in the original funciton.  That is really advanced how they made the some method to iterate over each element and then they used another helper function to get if it were a right angle and the shape of the triangle. Very complicated, but very clear for someone reading the code later.
function triangle(angle1, angle2, angle3) {
    const angles = [angle1, angle2, angle3];
    if (isValid(angles)) {
      return getTriangleType(angles);
    } else {
      return "invalid";
    }
  }

  function isValid(angles) {
    const totalAngle = angles.reduce((total, angle) => total + angle);

    const allNonZero = angles.every(angle => angle > 0);

    return totalAngle === 180 && allNonZero;
  }

  function getTriangleType(angles) {
    if (angles.some(testRightTriangle)) {
      return "right";
    } else if (angles.every(testAcuteTriangle)) {
      return "acute";
    } else {
      return "obtuse";
    }
  }

  function testRightTriangle(angle) {
    return angle === 90;
  }

  function testAcuteTriangle(angle) {
    return angle < 90;
  }