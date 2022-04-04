function fibonacci(value) {
    let previous = 0;
    let nextNumber = 1;
    let all = 0;
    for (let i = 1; i <= value; i++) {
        console.log(`so thu ${i} la ${previous}`);
        all += previous;
        let sum = previous + nextNumber;
        previous = nextNumber;
        nextNumber = sum;
    }
    console.log(`tong la ${all}`);
}
fibonacci(5);
//# sourceMappingURL=fibonacci.js.map