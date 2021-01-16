const search = require("./algorithms/search-algorithms");
const array = require("./algorithms/array-algorithms");

console.log(search.twoUniqueCharLongestSubString("2aabacbca"));
console.log(search.twoUniqueCharLongestSubString("2aabacbcadedee"));
console.log(search.twoUniqueCharLongestSubString("2aabacbzzzeeefcadedee"));
console.log(search.twoUniqueCharLongestSubString("2abaaa"));
console.log(search.twoUniqueCharLongestSubString("2"));
console.log(array.treeConstructor("(1,2);(3,2);(2,12);(9,12)"));
console.log(array.treeConstructor("(1,2);(3,2);(2,12);(5,2)"));
