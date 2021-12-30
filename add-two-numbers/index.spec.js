const { addTwoNumbers, ListNode } = require('./index')
it('should work first case', () => {
  let l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
  let l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
  let expectResult = new ListNode(7, new ListNode(0, new ListNode(8)));
  let result = addTwoNumbers(l1, l2);
  expect(result).toEqual(expectResult)
})

it('should work second case', () => {
  let l1 = new ListNode(0);
  let l2 = new ListNode(0);
  let expectResult = new ListNode(0);
  let result = addTwoNumbers(l1, l2);
  expect(result).toEqual(expectResult)
})

it('should work third case', () => {
  let l1 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))))));
  let l2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));
  let expectResult = new ListNode(8, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(1))))))));
  let result = addTwoNumbers(l2, l1);
  expect(result).toEqual(expectResult)
})

it('should work 4th case', () => {
  let l1 = new ListNode(5);
  let l2 = new ListNode(5);
  let expectResult = new ListNode(0, new ListNode(1));
  let result = addTwoNumbers(l1, l2);
  console.log('result', JSON.stringify(result, null, 2));
  expect(result).toEqual(expectResult)
})