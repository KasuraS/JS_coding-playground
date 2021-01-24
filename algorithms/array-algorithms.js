module.exports = {
  twoSum,
  threeSum,
  treeConstructor,
};

/**
 * @param {Array<Number>} intArray sorted array of integers
 * @param {Number} target the sum of three elements in the given array
 * @return returns an array of all possible combinations with the three operands that gives the sum of 0
 */
function threeSum(intArray) {
  let refIndex = 0;
  let startIndex = 1;
  let endIndex = intArray.length - 1;
  let solutions = {};

  // in case of unsorted array, use:
  // intArray.sort()

  while (true) {
    if (startIndex == endIndex) {
      refIndex++;
      startIndex = refIndex + 1;
      endIndex = intArray.length - 1;
    } else if (startIndex > endIndex) return Object.values(solutions);
    else {
      let a = intArray[refIndex];
      let b = intArray[startIndex];
      let c = intArray[endIndex];
      let sum = a + b + c;

      if (sum == 0) {
        let solution = [a, b, c];

        let key = `${a};${b};${c}`;

        if (!Object.keys(solutions).includes(key)) solutions[key] = solution;
        startIndex++;
      } else {
        if (sum > 0) endIndex--;
        else {
          startIndex++;
        }
      }
    }
  }
}

/**
 * @param {Array<Number>} intArray sorted array of strictly positive unique integers (> 0)
 * @param {Number} target the sum of two elements in the given array
 * @return returns an array of indexes of the two operands
 */
function twoSum(intArray, target) {
  let startIndex = 0;
  let endIndex = intArray.length - 1;

  // in case of unsorted array, use:
  // intArray.sort()

  while (true) {
    if (startIndex > endIndex) return [];
    else {
      let sum = intArray[startIndex] + intArray[endIndex];

      if (sum === target) {
        return [startIndex, endIndex];
      } else {
        if (sum > target) endIndex--;
        else {
          startIndex++;
        }
      }
    }
  }
}

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
