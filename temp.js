Array.prototype.myReduce = function (callback, initialValue) {
    if (typeof callback !== 'function') {
        throw new TypeError(`${callback} is not a function`);
    }

    const arr = this;

    const hasInitialValue = arguments.length > 1;

    if (arr.length === 0 && !hasInitialValue) {
        throw new TypeError('Reduce of empty array with no initial value');
    }

    let accumulator = hasInitialValue ? initialValue : arr[0];
    let startIndex = hasInitialValue ? 0 : 1;

    for (let i = startIndex; i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i], i, arr);
    }

    return accumulator;
};

//   console.log([1, 2, 3].myReduce((acc, val) => acc + val));       // 6
console.log([].myReduce((acc, val) => acc + val, 10));   // 16
// console.log([].myReduce((acc, val) => acc + val, 5));           // 5
/*
try {
  [].myReduce((acc, val) => acc + val);                         // Throws
} catch (e) {
  console.error(e); // TypeError
}
*/