// const inp = [[10],[8],[6],[2],[1],[5]];
const inp = [[4]];

inp.forEach(x => pattern(x));


function pattern([n]) {
    const len = (2 * n) - 1;
    for (let i = 0; i < len; i++) {
        let str = '';

        for (let j = 0; j < len; j++) {
            const top = i;
            const left = j;
            const right = (len - 1) - j;
            const bottom = (len - 1) - i;
            str += (n - Math.min(top, bottom, left, right));
        }
        console.log(str);
    }

    console.log("-----------------");
}