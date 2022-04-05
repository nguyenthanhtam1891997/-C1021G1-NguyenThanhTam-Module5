function fibonacci(value: number): number {
    // let previous = 0;
    // let nextNumber = 1;
    // let all = 0;

    // for (let i = 1; i <= value; i++) {
    // console.log(`so thu ${i} la ${previous}`);
    // all+=previous;
    // let sum = previous + nextNumber;
    // previous = nextNumber;
    // nextNumber = sum;

    // }

    // console.log(`tong la ${all}`)

    if (value ==0||value==1 ) {
        return value;
    }
    return fibonacci(value - 1)+fibonacci(value - 2);
}


for (let i = 0; i <5 ; i++) {
    console.log(fibonacci(i));
}
