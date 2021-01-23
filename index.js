const search = require("./algorithms/search-algorithms");
const array = require("./algorithms/array-algorithms");

console.log(search.KUniqueCharLongestSubString("2aabacbca"));
console.log(search.KUniqueCharLongestSubString("2aabacbcadedee"));
console.log(search.KUniqueCharLongestSubString("2aabacbzzzeeefcadedee"));
console.log(search.KUniqueCharLongestSubString("2abaaa"));
console.log(search.noRepeatCharLongestSubString("gezzezefgijlmm"));
console.log(search.noRepeatCharLongestSubString("aabacbzzzeeefcadedee"));
console.log("----------------------------------------------");
console.log(array.treeConstructor("(1,2);(3,2);(2,12);(9,12)"));
console.log(array.treeConstructor("(1,2);(3,2);(2,12);(5,2)"));
