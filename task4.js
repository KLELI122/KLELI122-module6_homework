function printNumbers(number1, number2) {
    function delayTime() {
        console.log(number1);
        if (number1 == number2) {
            clearInterval(timerId);
        }
        number1++;
    };
    delayTime();
    let timerId = setInterval(delayTime, 1000);
}

let number1 = +prompt('Введите первое число');
let number2 = +prompt('Введите второе число');
printNumbers(number1, number2);