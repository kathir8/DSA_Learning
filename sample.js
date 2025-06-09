const index = 0;
let arrayOfObj = [
    [[8, 4, 5, 6, 9, 1, 3, 2]], // [-1,0,0,1,2,2,3,3,3]
    [[3, 1, 5, 7]],
    [[1, 2, 5, 7],],

];
const original = structuredClone(arrayOfObj);
arrayOfObj.forEach((x, i) => {
    if (index === -1 || i === index) {
        console.time("time");
        console.log(method(x));
        // console.log(x);
        console.timeEnd("time");
        console.log("--------------------------");
    }
});
// O(n(n-1))
// O(n-1)
function method([arr]) {

    const mSort = () => {
        if (arr.length === 1) return arr;
        return mSort(arr.splice(0, Math.floor(arr.length / 2)), arr);

    }

    function sort(){

    }

    return mSort(arr);
}

/*

 */