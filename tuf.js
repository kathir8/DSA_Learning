function selectionSort(arr) {
    // select minimum and swap
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j; // select minimum
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // swap it
    }
}

function bubbleSort(arr) {
    // push maximum to the last by adjacent swapping
    let swapped;
    for (let i = 0; i < arr.length - 1; i++) {
        swapped = false;
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) { // check adjacent values
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // swap it
                swapped = true;
            }
        }
        if (!swapped) break; // No swaps = array is sorted
    }
}

function recursiveBubbleSort(arr, n = arr.length){
    if(n === 1)  return arr;
    
    for (let j = 0; j < n - 1; j++) {
        if (arr[j] > arr[j + 1]) { // check adjacent values
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // swap it
        }
    }
    return recursiveBubbleSort(arr, n - 1);
}

function insertionSort(arr) {
    let t = 0;
    // takes an element and place it in it's correct position
    for (let i = 0; i < arr.length - 1; i++) {
        t++;
        let j = i;
        while (j > 0 && arr[j - 1] > arr[j]) { // execute until placing the element in correct position
            [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]; // swap it
            j--;
        }
    }
    console.log(t);
    
}

function recursiveInsertionSort(arr){
    for (let i = 0; i < arr.length; i++) {

        if(arr[i] > arr[i+1]){
            let j = i+1;
            while(j > 0 && arr[j] < arr[j-1]){
                [arr[j], arr[j-1]] = [arr[j-1],arr[j]];
                j--;
            }
        }
    }
    return arr
}

// Create a large random array
const arr = [13,2,9,6,3,4,8];
// const arr = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 10000));
const arr1 = [...arr];
const arr2 = [...arr];
const arr3 = [...arr];

// console.log(recursiveBubbleSort([...arr1]));
console.log(recursiveInsertionSort([...arr1]));
// console.log(arr1);

return
console.log(selectionSort([...arr3])); // warm up
console.log(bubbleSort([...arr2])); // warm up
console.log(insertionSort([...arr1])); // warm up

const arr4 = [...arr]; // Clone for fair test
const arr5 = [...arr]; // Clone for fair test
const arr6 = [...arr]; // Clone for fair test


console.time("selectionSort");
console.log(selectionSort([...arr3]));
console.timeEnd("selectionSort");

console.time("bubbleSort");
console.log(bubbleSort([...arr2]));
console.timeEnd("bubbleSort");

console.time("insertionSort");
console.log(insertionSort([...arr1]));
console.timeEnd("insertionSort");