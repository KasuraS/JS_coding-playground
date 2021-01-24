const { expect } = require("chai");
const array = require("../../algorithms/array-algorithms");

describe("Tests for twoSum algorithm", () => {
  it("should return no indexes", () => {
    expect(0).to.be.equal(array.twoSum([2, 7, 11, 15], 10).length);
  });

  it("should return 2 indexes: [1, 2]", () => {
    const result = array.twoSum([2, 4, 6, 7, 10, 11, 15], 10);
    expect(2).to.be.equal(result.length);
    expect(1).to.be.equal(result[0]);
    expect(2).to.be.equal(result[1]);
  });
});

describe("Tests for threeSum algorithm", () => {
  it("should return no solution", () => {
    expect(0).to.be.equal(array.threeSum([-5, -1, 0, 2, 4]).length);
  });

  it("should return the following solutions: [-1, -1, 2], [-1, 0, 1]", () => {
    let solutions = [
      [-1, -1, 2],
      [-1, 0, 1],
    ];
    let count = 0;
    const result = array.threeSum([-4, -1, -1, 0, 1, 2]).forEach((solution) => {
      expect(3).to.be.equal(solution.length);
      expect(solutions[count][0]).to.be.equal(solution[0]);
      expect(solutions[count][1]).to.be.equal(solution[1]);
      expect(solutions[count][2]).to.be.equal(solution[2]);
      count++;
    });
  });
});

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
