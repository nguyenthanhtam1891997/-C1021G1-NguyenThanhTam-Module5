let money = 10000;
const buyACar = (car: any) => {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            if (money >= 10000) {
                resolve("can by " + car);
            } else {
                reject("do not enough money");
            }
        }, 100);
    }))
}
money = 1000000001;
const promise = buyACar("Vinfast").then(value => {
    console.log(value)
}, error => {
    console.log(error)
});