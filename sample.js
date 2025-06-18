const index = 0;
let arrayOfObj = [
    [["eat", "tea", "tan", "ate", "nat", "bat"]], // [-1,0,0,1,2,2,3,3,3]
    [[""]], // [-1,0,0,1,2,2,3,3,3]
    [["a"]], // [-1,0,0,1,2,2,3,3,3]

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
function method([strs]) {
    const sortedMap = {};
    const sMap = {};
    const str = strs[0];
    sMap[str] = {};
    for (let i = 0; i < strs[0].length; i++) {
        sMap[str][str[i]] ? sMap[str][str[i]]++ : sMap[str][str[i]] = 1
    }
    return sMap;
    sortedMap[strs[0]] = [strs[0]];
    const output = [];
    for (let i = 1; i < strs.length; i++) {
        Object.keys(sortedMap).forEach(key => {
            validAnagram(sortedMap[key], strs[i]);

        });
        const sortedStr = strs[i].split("").sort().join("");
        if (sortedMap[sortedStr]) {
            sortedMap[sortedStr].push(strs[i]);
        } else {
            sortedMap[sortedStr] = [strs[i]];
        }
    }

    Object.keys(sortedMap).forEach(key => {
        output.push(sortedMap[key])
    })
    return output;

    function validAnagram(s, t) {


        const sMap = new Map();
        for (let i = 0; i < s.length; i++) {
            sMap.set(s[i], (sMap.get(s[i]) || 0) + 1);
        }

        for (let i = 0; i < t.length; i++) {
            if (!sMap.has(t[i])) return false;
            const value = sMap.get(t[i]) - 1;
            value ? sMap.set(t[i], value) : sMap.delete(t[i]);
        }
        return true;
    }
}

/*

 */