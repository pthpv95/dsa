/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
    if (n === 0) {
        return 0
    }
    let res = 0
    for (let index = 0; index < 32; index++) {
        // res <<= 1
        // if ((n & 1) === 1) {
        //     res++
        // }
        // n >>= 1
        res <<= 1
        res = res | n & 1
        n >>= 1
    }
    return res
};

n = 964176192
result = reverseBits(964176192)
console.log(result);
// TODO: Need visualization