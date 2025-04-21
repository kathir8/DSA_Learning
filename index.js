const inp = [[1], [2], [10], [12], [36], [153], [371], [4554], [7789], [12345], [9, 12], [20, 15]];

// inp.forEach(x => console.log(pattern(x, 'count')));

function pattern([a, b], type) {

    if (type === 'count') {
        return Math.floor(Math.log10(a)) + 1;

    } else if (type === 'reverse') {
        let rev = 0;
        while (a > 0) {
            rev = (rev * 10) + a % 10;
            a = Math.floor(a / 10);
        }
        return rev;
        // TC : O(1)
        // SC : O(1)
    } else if (type === 'palindrome') {
        let rev = 0;
        let org = a;
        while (a > 0) {
            rev = (rev * 10) + a % 10;
            a = Math.floor(a / 10);
        }
        return rev === org;
        // TC : O(log10(N) +1)
        // SC : O(1)
    } else if (type === 'armstrong') {
        let cnt = Math.floor(Math.log10(a)) + 1;
        let opt = 0;
        let org = a;
        while (a > 0) {
            opt += Math.pow(a % 10, cnt);
            a = Math.floor(a / 10);
        }
        return opt === org;
        // TC : O(log10(N) +1)
        // SC : O(1)
    } else if (type === 'divisor') {
        let mid = Math.floor(Math.sqrt(a));
        let i = 2;
        const opt = [1, a];
        while (i <= mid) {
            if (!(a % i)) { // divisible
                opt.push(i);
                if (a / i !== i) opt.push(a / i);
            }
            i++;
        }
        return opt.sort((a, b) => a - b);
        // TC : O(sqrt(N))
        // SC : O(2*sqrt(N))
    } else if (type === 'prime') {
        let mid = Math.floor(Math.sqrt(a));
        let i = 2;
        if (a === 1) return false;
        while (i < mid) {
            if (!(a % i)) { // divisible
                return false;
            }
            i++;
        }
        return true;
        // TC : O(sqrt(N))
        // SC : O(1)
    } else if (type === 'gcd' || type === 'hcf') { // Euclidean Algorithm
        while (a > 0 && b > 0) {
            if (a > b) {
                a = a % b
            } else {
                b = b % a;
            }
        }
        if (!a) {
            return b;
        }
        return a;
        // TC : O(min(a,b))
        // SC : O(1)
    }
}

// let n = 3;
// console.log(factorial(n));

// function factorial(n) {
//     if (n === 1) return n;
//     return n * factorial(n - 1);
// }

// console.log(sumFormula(3))
// function sumFormula(n) {
//     return n * (n + 1) / 2
// }

const arr = [1, 2, 3,4,5];

const mid = Math.round(arr.length / 2);

for (let i = 0, j = arr.length - 1; i < mid; i++, j--) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}
console.log(arr);
