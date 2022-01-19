function divideBy(firstNumber = 0) {
    return (secondNumber = 0) => secondNumber / firstNumber;
}

function addBy(firstNumber = 0) {
    return (secondNumber = 0) => secondNumber + firstNumber;
}

let addBy100 = addBy(100);
let addBy1000 = addBy(1000);
let divideBy10 = divideBy(10);
let divideBy100 = divideBy(100);