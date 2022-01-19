function countPrimeNumbers() {
    let primes = 0;
    for (i = 2; i <= 100; i++) {

        if ((i == 2 || i == 3 || i == 5 || i == 7) ||
            (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0)) {
            primes += 1;
        }
    }
    return primes;
}
let t0 = performance.now();
primes = countPrimeNumbers();
let t1 = performance.now();
console.log(`Execution time of printing countPrimeNumbers was ${(t1 - t0)} milliseconds.`);
