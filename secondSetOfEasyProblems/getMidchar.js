function centerOf(string) {
    let midpoint = Math.floor(string.length / 2);
    if (string.length % 2 === 0) return string[midpoint - 1] + string[midpoint];
    return string[midpoint]
}

console.log(
centerOf('I Love JavaScript'), // "a"
centerOf('Launch School'),     // " "
centerOf('Launch'),            // "un"
centerOf('Launchschool'),      // "hs"
centerOf('x'),                 // "x"
)

// The LS answer uses slice method which is always a good way to deal with strings. I have to remember that. I could even use reduce as well.