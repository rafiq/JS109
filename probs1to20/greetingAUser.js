function getUserChoice(message) {
    let rlsync = require("readline-sync");
    return rlsync.question(message);
}

function greetUser() {
    console.clear();
    let name = getUserChoice(`\n\n\n\n\n\n\n\nWhat is your name?\n`);
    if (name.includes("!")) {
        console.clear();
        console.log(`\n\n\n\n\n\n\n\nHELLO ${name.toUpperCase()}! WHY ARE YOU YELLING!\n\n\n\n\n\n`)
    } else {
        console.clear();
        console.log(`\n\n\n\n\n\n\n\nHello ${name}.\n\n\n\n\n\n\n\n\n`)
    }
}

greetUser();
// What is your name? Bob
// Hello Bob.
