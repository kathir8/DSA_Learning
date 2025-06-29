const testCase = [
    [ 's' ],
    ['()[]{}'],
    ['(]'],
    ['([])']
];
const testInd = 0;
testCase.forEach((e, i) => {
    if (testInd === -1 || testInd === i) console.log(method(e));
});


function method([s]) {
    const stack = [];
   
    const push = function (val) {
        if (!stack.length) {
            stack.push([val, val]);
        } else {
            const lastMinVal = stack.at(-1)[1];
            const minVal = lastMinVal < val ? lastMinVal : val;
            stack.push([val, minVal]);
        }
    };

    const pop = function () {
        stack.pop();
    };
    const top = function () {
        return stack.at(-1)[0];
    };

    const getMin = function () {
        return stack.at(-1)[1];
    };


    push(-2);
    push(0);
    push(-3);
    console.log(getMin());
    pop();
    console.log(top());    
    console.log(getMin());
}
