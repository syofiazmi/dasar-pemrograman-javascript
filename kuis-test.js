function findMin(a, b, c) {
    if (a < b) {
        if (a < c) {
            return a;
        } else {
            return c;
        }
    } else if (b < a) {
        if (b < c) {
            return b;
        } else {
            return c;
        }
    } else {
        return c;
    }
}


const result = findMin(2,2,2);

console.log(result);