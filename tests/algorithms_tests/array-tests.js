const { expect } = require("chai");
const array = require("../../algorithms/array-algorithms");

describe("Tests for treeConstructor algorithm", () => {
  it("should return true if it is a valid binary tree", () => {
    expect(true).to.be.equal(
      array.treeConstructor("(1,2);(3,2);(2,12);(9,12)")
    );
  });

  it("should return false if it is not a valid binary tree", () => {
    expect(false).to.be.equal(
      array.treeConstructor("(1,2);(3,2);(2,12);(9,2)")
    );
  });
});
