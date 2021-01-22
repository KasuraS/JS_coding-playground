module.exports = {
  treeConstructor,
};

/**
 * @param {Number} value
 */
class Node {
  constructor(value) {
    this.value = value;
    this.leftChild = null;
    this.rightChild = null;
  }
}

/**
 * @param {String} strArray
 * @return {Boolean} returns true if it is a valid binary tree ; otherwise false
 */
function treeConstructor(strArray) {
  let nodePairsArray = strArray.split(";");
  let nodes = {};
  let result = true;

  nodePairsArray.forEach((node) => {
    let startIndex = 1;
    let endIndex = node.indexOf(",");
    let value = node.substring(startIndex, endIndex);
    let childNode = new Node(value);

    // store child node if not included
    if (!Object.keys(nodes).includes(value)) nodes[value] = childNode;

    startIndex = node.indexOf(",") + 1;
    endIndex = node.length - 1;
    value = node.substring(startIndex, endIndex);

    // store parent node if not included
    if (!Object.keys(nodes).includes(value)) {
      let parentNode = new Node(value);
      nodes[value] = parentNode;
      // assign child node as left child of parent node if its value is less than the latter
      if (parentNode.value > childNode.value) parentNode.leftChild = childNode;
      // assign child node as right child of parent node if its value is greater than the latter
      else if (parentNode.value < childNode.value)
        parentNode.rightChild = childNode;
      else {
        // it is not possible to have two nodes with the same value
        result = false;
        return;
      }
    } else {
      // retrieve parent node if exists
      let parentNode = nodes[value];
      if (childNode.value < parentNode.value) {
        // assign child node as left child of parent node if free
        if (!parentNode.leftChild) parentNode.leftChild = childNode;
        else {
          // assign child node as right child of parent node if free
          if (!parentNode.rightChild) parentNode.rightChild = childNode;
          else {
            // if parent node has two children
            result = false;
            return;
          }
        }
      } else if (childNode.value > parentNode.value) {
        // assign child node as right child of parent node if free
        if (!parentNode.rightChild) parentNode.rightChild = childNode;
        else {
          // assign child node as left child of parent node if free
          if (!parentNode.leftChild) parentNode.leftChild = childNode;
          else {
            // if parent node has two children
            result = false;
            return;
          }
        }
      } else {
        // it is not possible to have two nodes with the same value
        result = false;
        return;
      }
    }
  });

  return result;
}
