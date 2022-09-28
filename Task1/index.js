function multiplyTwoNumbers(firstNum) {
    return function (secondNum) {
        return firstNum * secondNum;
    }
}

console.log(multiplyTwoNumbers(5)(2));