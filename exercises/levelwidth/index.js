// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  let result = [];
  let array = [root];
  let aux = [];

  let count = 0;
  while(array.length){
    const node = array.shift();
    count++;
    if(node.children){
      aux.push(...node.children);
    }
    if(!array.length){
      result.push(count);
      array.push(...aux);
      aux = [];
      count = 0;
    }
  }
  return result;
}


module.exports = levelWidth;
