const testCase = [
    [[73, 74, 75, 71, 69, 72, 76, 73]],
    [[30, 40, 50, 60]],
    [[30, 60, 90]],
];
// 1,2,24,3,15,13,14,26,28
const testInd = 0;
testCase.forEach((e, i) => {
    if (testInd === -1 || testInd === i) console.log(method(e));
});


function method([temperatures]) {

    const stack = [];
    const output = [];
    let lasInd = 0;
    for (let i = temperatures.length - 1; i >= 0; i--) {
        if (!stack.length) {
            stack.push(temperatures[i]);
            output.unshift(0);
            lasInd++;
        } else if (stack.at(-1) > temperatures[i]) {
            stack.push(temperatures[i]);
            output.unshift(1);
            lasInd++;
        } else {
            let j = 1;
            while (stack.length) {
                if (stack.at(-1) < temperatures[i]) {
                    stack.pop();
                } else {
                    lasInd++;
                    stack.push(temperatures[i]);
                    output.unshift(j);
                    break;
                }
                j++;
            }

            if (!stack.length) {
                lasInd++;
                stack.push(temperatures[i]);
                output.unshift(0);
            }
        }

    }


    return output;
}
