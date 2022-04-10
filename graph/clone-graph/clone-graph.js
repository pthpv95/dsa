function Node(val, neighbors) {
  this.val = val === undefined ? 0 : val
  this.neighbors = neighbors === undefined ? [] : neighbors
}

var cloneGraph = function (node) {
  let visited = {}

  function clone(node) {
    if (!visited[node.val]) {
      // create copy and store it in hash map
      let copy = new Node(node.val);
      visited[copy.val] = copy;

      // clone its neighbors
      copy.neighbors = node.neighbors.map(clone)
    }
    return visited[node.val]
  }

  return node ? clone(node) : []
}

let buildGraph = () => {
  let node1 = new Node(1)
  let node2 = new Node(2)
  let node3 = new Node(3)
  let node4 = new Node(4)

  node1.neighbors = [node2, node4]
  node2.neighbors = [node1, node3]
  node3.neighbors = [node2, node4]
  node4.neighbors = [node1, node3]

  return node1
}
let node = buildGraph()
console.log('source', node)
let result = cloneGraph(node)
console.log('clone', result)
