function checkPrimeNumber(number) {
    if ((number < 2) || (number > 1000)) {
        return 'Данные неверны';
    } else {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                return 'Составное число';
            }
        }
        return 'Простое число';
    }
}

let number = 25;
console.log(checkPrimeNumber(number));