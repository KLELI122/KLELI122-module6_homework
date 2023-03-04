function countElements (array) {
    let evenCount = 0;
    let oddCount = 0;
    let zeroCount = 0;
    let otherCount = 0;
    for (let i = 0; i < array.length; i++) {
        if ((typeof(array[i]) == 'number') && (!isNaN(array[i]))) {
            if (array[i] == 0){
                zeroCount++;
            } else if (array[i] % 2 === 0) {
                evenCount++; 
            } else if (array[i] % 2 !== 0) {
                oddCount++; 
            }
        } else {
            otherCount++;
        }
    }
    console.log(`Четные: ${evenCount} Нечетные: ${oddCount} Ноль: ${zeroCount} Другие: ${otherCount}`)
};

let array = [3, 4, 'qq', 2, 8, 0, null, 2, 'dd', 0];
countElements(array);
