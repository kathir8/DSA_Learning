const testCase = [
    [[4, 1, 2], [1, 3, 4, 2]],
    [[2, 4], [1, 2, 3, 4]],
    [[3, 4, 2, 6], [1, 5, 0, 3, 4, 9, 2, 6, 8]],
];
const testInd = -1;
testCase.forEach((e, i) => {
    if (testInd === -1 || testInd === i) console.log(method(e));
});


function method([nums1, nums2]) {
    // const obj = {};
    // for (let i = 0; i < nums2.length; i++) {
    //     obj[nums2[i]] = -1;
    //     for (let j = i + 1; j < nums2.length; j++) {
    //         if (nums2[i] < nums2[j]) {
    //             obj[nums2[i]] = nums2[j];
    //             break;
    //         }
    //     }
    // }
    const output = [];

    for (let i = 0; i < nums1.length; i++) {
        const ind = nums2.indexOf(nums1[i]);
        let val = -1;
        for (let j = ind + 1; j < nums2.length; j++) {
            if (nums1[i] < nums2[j]) {
                val = nums2[j];
                break;
            }
        }
        output.push(val);
    }
    return output;
}
