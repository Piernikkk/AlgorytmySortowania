function bubbleSort(arr) {
    let result = arr;
    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < result.length - 1; j++) {
            if (result[j] % 10 > result[j + 1] % 10) {
                var temp = result[j];
                result[j] = result[j + 1];
                result[j + 1] = temp;
            }
        }
    }
    return result;
}


function selectionSort(arr) {
    let result = arr;
    let minIndex = 0;
    for (let i = 0; i < result.length; i++) {
        minIndex = i;
        for (let j = i; j < result.length; j++) {
            if (result[minIndex] % 10 > result[j] % 10) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            var temp = result[i];
            result[i] = result[minIndex];
            result[minIndex] = temp;
        }
    }
    return result;
}

const notsorted = [23, 45, 12, 9, 34, 56];

const time1 = Date.now();
console.log(bubbleSort(notsorted));
console.log("time: ", Date.now() - time1);

const time2 = Date.now();
console.log(selectionSort(notsorted));
console.log("time: ", Date.now() - time2);
