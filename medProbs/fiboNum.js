function fibonacci(num) {
    if (num <= 2) return 1;

        return fibonacci(num - 1) + fibonacci(num - 2)

    // let array = Array(num).fill(1);
    // let array = [1,1];
    // let first = 1;
    // let second = 1;
    // let third = 0;
    // if (num <= 2) return 1;
    // for (let i = 3; i <= num; i++) {
    //     third = first + second;
    //     array.push(third);
    //     first = second;
    //     second = third;
    // }
    // return array[array.length - 1];
}

console.log(
fibonacci(1),       // 1
fibonacci(2),       // 1
fibonacci(3),       // 2
fibonacci(4),       // 3
fibonacci(5),       // 5
fibonacci(12),      // 144
fibonacci(20),      // 6765
)