const { expect } = require("chai");
const search = require("../../algorithms/search-algorithms");

describe("Tests for noRepeatCharLongestSubString algorithm", () => {
  it("should return the longest substring w/o 2 same characters of a given string", () => {
    expect("zefgijlm").to.be.equal(
      search.noRepeatCharLongestSubString("gezzezefgijlmm")
    );
    expect("efcad").to.be.equal(
      search.noRepeatCharLongestSubString("aabacbzzzeeefcadedee")
    );
  });
});

describe("Tests for KUniqueCharLongestSubString algorithm", () => {
  it("should return the longest substring with 2 unique chars of a given string", () => {
    expect("aaba").to.be.equal(search.KUniqueCharLongestSubString("2aabacbca"));
    expect("dedee").to.be.equal(
      search.KUniqueCharLongestSubString("2aabacbcadedee")
    );
    expect("zzzeee").to.be.equal(
      search.KUniqueCharLongestSubString("2aabacbzzzeeefcadedee")
    );
    expect("abaaa").to.be.equal(search.KUniqueCharLongestSubString("2abaaa"));
  });

  it("should return the longest substring with 4 unique chars starting at the 2nd character of a given string", () => {
    expect("aabacbcad").to.be.equal(
      search.KUniqueCharLongestSubString("4aabacbcadedee", 4, 1)
    );
    expect("aabacbzzz").to.be.equal(
      search.KUniqueCharLongestSubString("4aabacbzzzeeefcadedee", 4, 1)
    );
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
