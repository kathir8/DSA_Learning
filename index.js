// const inp = [[10],[8],[6],[2],[1],[5]];
const inp = [[6]];

inp.forEach(x => pattern(x));


function pattern([n]) {
    const charA = 'A'.charCodeAt(0);

    for (let i = 1; i <= n; i++) {
        let str = '';
        for (let j = 1; j <= n; j++) {
            str += (i >= j) ? '*' : ' ';
        }
        for (let j = n; j >= 1; j--) {
            str += (i >= j) ? '*' : ' ';
        }
        console.log(str);

    }

    console.log("-----------------");
}