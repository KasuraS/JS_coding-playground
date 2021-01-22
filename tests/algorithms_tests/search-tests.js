const { expect } = require("chai");
const search = require("../../algorithms/search-algorithms");

describe("Tests for twoUniqueCharLongestSubString algorithm", () => {
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
  });

  it("should return empty if string contains at most 1 char", () => {
    expect("").to.be.equal(search.twoUniqueCharLongestSubString("2"));
  });
});

describe("Tests for bracketMatcher algorithm", () => {
  it("should return 1 if no leftBrackets in the stack", () => {
    expect(1).to.be.equal(search.bracketMatcher("H(ello)((W)orld)!"));
  });

  it("should return 0 if the stack contains at least one element", () => {
    expect(0).to.be.equal(search.bracketMatcher("H(ello)((World)!"));
    expect(0).to.be.equal(search.bracketMatcher("H(ello)((W)orld)))!"));
  });
});
