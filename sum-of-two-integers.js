/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
  while (b != 0) {
    let tmp = (a & b) << 1;
    a = a ^ b;
    b = tmp
  }
  return a;
};

// 0100 0
// 0100 2
// 0100 0
// 0100 0
// 2 -> 2&2 = 1&2=0 -> 10
function numToBinary(num) {
  let neg = num < 0;
  if (neg) {
    num = Math.abs(num)
  }
  let result = ''
  while (num > 0) {
    let remainder = num % 2
    result = remainder + result
    num = parseInt(num / 2)
  }
  return neg ? -Number(result) : Number(result);
}
// 1010
function binaryToDecimal(binary) {
  binary = binary.toString()
  let result = 0
  let idx = 0;
  while (idx < binary.length) {
    result = result + binary[idx] * Math.pow(2, binary.length - idx - 1);
    idx++
  }
  return result;
}

let a = 3, b = 2;
// 11
// 10
// 00
let x = a & b;
console.log(3 % 2);
console.log(numToBinary(-105));
console.log(binaryToDecimal(10011));
// console.log(getSum(1, 2));

console.log(x);
// & return 1 when both are 1
// | return 0 when both are 0
// ~ return 0 when bit is 1 and 1 when bit is 0


// left shifting = value x 2 power of shifting value
let y = 5;
// 0000 0100 -> 0000 1000
console.log(y << 1);