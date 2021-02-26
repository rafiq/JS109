function repeat(num,str) {
    let final = "";

    for (let i = 0; i < num; i++) {
        final += str;
    }
    return final;
}

console.log(
repeat(3, 'ha ha ha '), // 'hahaha'
repeat(4, 'ha'), // 'hahaha'
repeat(5, 'ha'), // 'hahaha'
)