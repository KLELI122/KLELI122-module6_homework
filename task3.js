function sumNumbers(x) {
    return function(y) {
        return x + y;
    }
}

const result = sumNumbers(5);
let sum = result(5);
console.log(sum);