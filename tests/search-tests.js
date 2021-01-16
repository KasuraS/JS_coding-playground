const { expect } = require("chai");
const search = require("../algorithms/search-algorithms");

describe("Search Challenge: ", () => {
  it("should return the longest substring with 2 unique chars starting at the 2nd char of a given string", () => {
    expect("aaba").to.be.equal(
      search.twoUniqueCharLongestSubString("2aabacbca")
    );
    expect("dedee").to.be.equal(
      search.twoUniqueCharLongestSubString("2aabacbcadedee")
    );
    expect("zzzeee").to.be.equal(
      search.twoUniqueCharLongestSubString("2aabacbzzzeeefcadedee")
    );
    expect("abaaa").to.be.equal(search.twoUniqueCharLongestSubString("2abaaa"));
    expect("").to.be.equal(search.twoUniqueCharLongestSubString("2"));
  });
});
