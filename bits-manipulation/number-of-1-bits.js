/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let counter = 0

  while (n) {
    // can either using & or %
    if (n & 1) {
      counter++
    }
    n = n >> 1;
  }
  return counter;
};

function dec2bin(dec) {
  return (dec >>> 0).toString(2);
}

n = 00000000000000000000000000001011;

// n = 0011;
function dec2bin(dec) {
  return (dec >>> 0).toString(2);
}
// console.log(dec2bin(0101 >> 1));
console.log(hammingWeight(n));