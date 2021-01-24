const search = require("./algorithms/search-algorithms");
const array = require("./algorithms/array-algorithms");

console.log(search.KUniqueCharLongestSubString("2aabacbca"));
console.log(search.KUniqueCharLongestSubString("2aabacbcadedee"));
console.log(search.KUniqueCharLongestSubString("2aabacbzzzeeefcadedee"));
console.log(search.KUniqueCharLongestSubString("2abaaa"));
console.log(search.noRepeatCharLongestSubString("gezzezefgijlmm"));
console.log(search.noRepeatCharLongestSubString("aabacbzzzeeefcadedee"));
console.log("----------------------------------------------");

const testArray = [];
for (let i = 1; i <= 1000; i++) testArray.push(i);
console.log(array.threeSum([-5, -1, 0, 2, 4]));
//console.log(array.twoSum([2, 4, 6, 7, 10, 11, 15], 10));
//console.log(array.twoSum(testArray, 4));
console.log(array.treeConstructor("(1,2);(3,2);(2,12);(9,12)"));
console.log(array.treeConstructor("(1,2);(3,2);(2,12);(5,2)"));
