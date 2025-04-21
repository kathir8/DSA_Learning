let type = 'waterLog';
let arr = [];
let t = 0;
console.log(type);

switch (type) {
    case "pairSum":
        arr = [5, 2, 7, 4, 3, 8];
        const target = 10;
        t = 0;
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                t++;

                if (arr[i] + arr[j] === target) {
                    console.log(arr[i], arr[j] + '...' + i, j);
                }
            }
        }
        console.log(t); // O(n^2)
        console.log("------------");

        t = 0;

        const map = new Map(); // Hashmap technique
        for (let i = 0; i < arr.length; i++) {
            t++;
            const reqd = target - arr[i];
            if (map.has(reqd)) {
                console.log(arr[i], reqd + '...' + i, arr.indexOf(reqd));
            }
            map.set(arr[i], i);
        }
        console.log(t); // O(n)

        break;
    case "waterWall":
        arr = [1, 5, 7, 3, 1];
        let max = 0;
        t = 0;
        let out = [];
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                t++;
                const l = j - i;
                const b = Math.min(arr[i], arr[j]);
                const area = l * b;
                if (max < area) {
                    max = area;
                    out = [arr[i], arr[j]];
                }
            }
        }
        console.log(max);
        console.log(out);
        console.log(t); // O(n^2)

        console.log("--------------");

        max = 0;
        t = 0;
        out = [];
        let i = 0;
        let j = arr.length - 1;
        while (i < j) { // two pointer technique
            t++;
            let p1 = arr[i];
            let p2 = arr[j];

            const l = j - i;
            const b = Math.min(p1, p2);
            const area = l * b;

            if (max < area) {
                max = area;
                out = [p1, p2];
            }
            p1 < p2 ? i++ : j--;
        }

        console.log(max);
        console.log(out);
        console.log(t);

        break;

    case "waterLog":
        arr = [0,1,2,0,5,3,0,4];
        let total = 0;
        t=0;
        // cb = ch - Min(LLB,RLB);
        for (let i = 0; i < arr.length; i++) {
            let left = arr[0];
            let right = arr[0];
            for (let j = 0; j < arr.length; j++) {
                if(j < i){
                    left = Math.max(left, arr[j]);
                }else{
                    right = Math.max(right, arr[j]);
                }
                t++;                
            }
            const leftRightWall = Math.min(left, right);
            if(leftRightWall > arr[i]){
                total += leftRightWall - arr[i];           
            }
        }
        console.log(total); // O(n^2)
        console.log(t);
        
        console.log("--------------");
        
        break;

    default:
        break;
}