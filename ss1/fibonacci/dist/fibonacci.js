function fibonacci(value) {
    if (value == 0 || value == 1) {
        return value;
    }
    return fibonacci(value - 1) + fibonacci(value - 2);
}
for (let i = 0; i < 5; i++) {
    console.log(fibonacci(i));
}
//# sourceMappingURL=fibonacci.js.map