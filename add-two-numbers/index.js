
function ListNode(val, next) {
  this.val = val;
  this.next = next;
}
// l1 = [2,4,3], l2 = [5,6,4]
// l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
// l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output:     [8,9,9,9,0,0,0,1]

function getAt(list, idx) {
  let node = list
  let counter = 0
  while (node) {
    if (idx === counter) {
      return node.val
    }
    counter++
    node = node.next
  }
  return null
}

function getLast(list) {
  let node = list
  while (node) {
    if (!node.next) {
      return node
    }
    node = node.next
  }
  return null
}

function getSize(list) {
  let node = list;
  let counter = 0
  while (node) {
    node = node.next;
    counter++
  }
  return counter
}

function addToList(output, value) {
  if (!output) {
    output = new ListNode(value)
  } else {
    let last = getLast(output);
    last.next = new ListNode(value);
    return output
  }
  return output
}

var addTwoNumbers1 = function (l1, l2) {
  let l1size = getSize(l1)
  let l2size = getSize(l2)
  let size = l1size;
  let index = 0
  let firstNode = l1;
  let secondNode = l2

  if (l1size < l2size) {
    size = l2size;
    firstNode = l2
    secondNode = l1
  }

  let changes = 0
  let output

  while (firstNode) {
    let sum = firstNode.val + getAt(secondNode, index) + changes
    if (sum >= 10) {
      let value = sum === 10 ? 0 : +sum.toString()[1]
      output = addToList(output, value)

      if (size - 1 === index && changes > 0) {
        output = addToList(output, changes)
      }
      changes = 1
    } else {
      output = addToList(output, sum)
      changes = 0;
    }
    firstNode = firstNode.next
    index++
  }

  return output
}

var addTwoNumbers = function (l1, l2) {
  let curr = new ListNode(0)
  let result = curr
  let sum = 0
  while (l1 || l2) {
    if (l1) {
      sum = sum + l1.val
      l1 = l1.next
    }

    if (l2) {
      sum = sum + l2.val
      l2 = l2.next
    }

    curr.next = new ListNode(sum % 10)

    // reassign curr
    curr = curr.next
    sum = sum > 9 ? 1 : 0
  }

  // last node
  if (sum > 0) {
    curr.next = new ListNode(sum)
  }

  return result.next
}

module.exports = {
  addTwoNumbers,
  addToList,
  ListNode
}