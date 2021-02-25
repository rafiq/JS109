function triangle(size) {
    for (let i = 1; i <= size; i++) {
      console.log('*'.repeat(i).padStart(size));
    }
  }
// I really like Mr. Rodes answer above which uses padStart, and I didn't know that padStart will automatically pad your answer with the number of the argument passed to it.
// My answer below worked just fine. I did need to subtract one from the emptySpace in order to have the right number of empty spaces.

// function triangle(num) {
//     let pattern = "*"
//     let count = num;
//     let emptySpace = num - 1;

//     while (count > 0) {
//         console.log("-".repeat(emptySpace) + pattern);
//         count--;
//         pattern += "*";
//         emptySpace--;
//     }

// }


triangle(5);

//     *
//    **
//   ***
//  ****
// *****

triangle(9);

//         *
//        **
//       ***
//      ****
//     *****
//    ******
//   *******
//  ********
// *********