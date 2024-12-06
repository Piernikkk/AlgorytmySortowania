function mergeSort(array, compare) {
    if (array.length === 1) return array;

    const mid = Math.floor(array.length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid);

    return merge(mergeSort(left, compare), mergeSort(right, compare), compare);
}

function merge(left, right, compare) {
    let leftIndex = 0;
    let rightIndex = 0;
    const result = [];

    while (leftIndex < left.length && rightIndex < right.length) {
        // if (left[leftIndex] < right[rightIndex]) {
        if (compare(left[leftIndex], right[rightIndex])) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    while (leftIndex < left.length) {
        result.push(left[leftIndex]);
        leftIndex++;
    }

    while (rightIndex < right.length) {
        result.push(right[rightIndex]);
        rightIndex++;
    }

    return result;
}

function buildObject(arr, compare) {
    const newObject = arr.map((a) => ({
        value: a,
        vovels: a.match(/[aeioyąóęu]/gi)?.length ?? 0
    }))
    return mergeSort(newObject, compare);
}

function compareVovels(left, right) {
    return left.vovels < right.vovels;
}

const arr = ["echooooo", "abc", "island", "elephant", "xyz"];

const time1 = Date.now();
console.log(buildObject(arr, compareVovels));
console.log("time: ", Date.now() - time1);