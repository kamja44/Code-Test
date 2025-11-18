function preorder(nodes, index) {
  if (index < nodes.length) {
    let ret = `${nodes[index]} `;
    ret += preorder(nodes, index * 2 + 1);
    ret += preorder(nodes, index * 2 + 2);
    return ret;
  }
  return "";
}

function inorder(nodes, index) {
  if (index < nodes.length) {
    let ret = inorder(nodes, index * 2 + 1);
    ret += `${nodes[index]} `;
    ret += inorder(nodes, index * 2 + 2);
    return ret;
  }
  return "";
}

function postorder(nodes, index) {
  if (index < nodes.length) {
    let ret = postorder(nodes, index * 2 + 1);
    ret += postorder(nodes, index * 2 + 2);
    ret += `${nodes[index]} `;
    return ret;
  }
  return "";
}

function solution(nodes) {
  return [
    preorder(nodes, 0).slice(0, -1),
    inorder(nodes, 0).slice(0, -1),
    postorder(nodes, 0).slice(0, -1),
  ];
}

console.log(solution([1, 2, 3, 4, 5, 6, 7]));
// [ '1 2 4 5 3 6 7', '4 2 5 1 6 3 7', '4 5 2 6 7 3 1' ]
