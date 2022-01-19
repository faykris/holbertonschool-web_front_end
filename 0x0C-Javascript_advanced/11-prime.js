function countPrimeNumbers() {
    let primes = 0;
    for (let i = 2; i <= 100; i++) {

        if ((i == 2 || i == 3 || i == 5 || i == 7) ||
            (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0)) {
            primes += 1;
        }
    }
    return primes;
}
let t0 = performance.now();

setTimeout(() => {
    for (let i = 1; i <= 100; i++) {
        primes = countPrimeNumbers();
    }
    console.log(`Execution time of calculating prime numbers 100 times was ${(performance.now() - t0)} milliseconds.`)
}, 0);
