function callFunc (number) {
    return sumNumbers(number);
};
  
function sumNumbers (number) {
    let result = number + number;
    return result;
};
  
let number = 10;
console.log(callFunc(number));