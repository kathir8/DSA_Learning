var createCounter = function(n) {
    let num = n;
    return function() {
        
        return ++num;
    };
};
const counter = createCounter(10);
console.log(counter());
console.log(counter());


const index = 3;
let arrayOfObj = [
    [["remain", "leading", "dealing", "airmen", "marine", "aligned"]],
    [["abets", "bead", "remain", "betas", "abed", "baste", "airline", "leading", "beast", "dealing", "beats", "airmen", "marine", "single", "bade", "aligned"]],
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
    const map = {};

    for (let i = 0; i < strs.length; i++) {
        const freq = Array(26).fill(0);
        const str = strs[i];
        for (let j = 0; j < str.length; j++) {
            const index = str[j].charCodeAt() - 'a'.charCodeAt();
            ++freq[index];
        }

        let key = '';
        for (let k = 0; k < freq.length; k++) {
            key += String.fromCharCode(k) + freq[k];

        }


        if (!map[key]) {
            map[key] = [str];
        }else{
            map[key].push(str);
        }
    }

    return Object.values(map);

    for (const word of strs) {
        const key = word.split('').sort().join('');
        if (!map[key]) {
            map[key] = [];
        }
        map[key].push(word);
    }

    return Object.values(map);

    const outputObj = {};
    const anagramMap = {};
    for (let i = 0; i < strs.length; i++) {
        let noMatch = true;
        for (const key of Object.keys(anagramMap)) {
            // console.time("validAnagram");
            if (validAnagram(key, strs[i])) {
                outputObj[key].push(strs[i]);
                noMatch = false;
                // console.timeEnd("validAnagram");
                break;
            }
            // console.timeEnd("validAnagram");
        }
        if (noMatch) constructAnagramMap(strs[i]);
    }
    const output = [];
    console.time("output");
    Object.keys(outputObj).forEach(key => output.push(outputObj[key]));
    console.timeEnd("output");
    return output;

    function validAnagram(key, t) {
        if (key.length !== t.length) return false;
        const object = structuredClone(anagramMap[key]);

        for (let i = 0; i < t.length; i++) {
            if (!object[t[i]]) return false;
            const value = object[t[i]] - 1;
            if (value) {
                object[t[i]] = value;
            } else {
                delete object[t[i]];
            }
        }
        return true;
    }

    function constructAnagramMap(str) {
        //  console.time("constructAnagramMap");
        anagramMap[str] = {};
        for (let i = 0; i < str.length; i++) {
            anagramMap[str][str[i]] ? anagramMap[str][str[i]]++ : anagramMap[str][str[i]] = 1
        }
        outputObj[str] = [str];
        // console.timeEnd("constructAnagramMap");
    }
    
}



/*

 */