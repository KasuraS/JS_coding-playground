const { expect } = require("chai");
import LinkedList from "../../data_structures/linked_list.js";
import Node from "../../data_structures/node.js";

describe("Tests for Node class", () => {
  it("should be equal to 3", () => {
    const node = new Node(3);
    expect(3).to.be.equal(node.value);
  });

  it("should be null", () => {
    const node = new Node(3);
    expect(null).to.be.equal(node.next);
  });

  it("should be the same next node", () => {
    const nextNode = new Node(4);
    const node = new Node(3, nextNode);
    expect(nextNode).to.be.equal(node.next);
  });
});

describe("Tests for LinkedList class", () => {
  it("insertNodeAtHead: both head + tail should be equal to 1", () => {
    const linkedlist = new LinkedList();
    linkedlist.insertNodeAtHead(1);
    expect(1).to.be.equal(linkedlist.head.value);
    expect(1).to.be.equal(linkedlist.tail.value);
  });

  it("insertNodeAtHead: head should be equal to 3, tail to 1", () => {
    const linkedlist = new LinkedList();
    linkedlist.insertNodeAtHead(1);
    linkedlist.insertNodeAtHead(2);
    linkedlist.insertNodeAtHead(3);
    expect(3).to.be.equal(linkedlist.head.value);
    expect(1).to.be.equal(linkedlist.tail.value);
  });

  it("insertNodeAtTail: both head + tail should be equal to 1", () => {
    const linkedlist = new LinkedList();
    linkedlist.insertNodeAtTail(1);
    expect(1).to.be.equal(linkedlist.head.value);
    expect(1).to.be.equal(linkedlist.tail.value);
  });

  it("insertNodeAtTail: head should be equal to 1, tail to 3", () => {
    const linkedlist = new LinkedList();
    linkedlist.insertNodeAtTail(1);
    linkedlist.insertNodeAtTail(2);
    linkedlist.insertNodeAtTail(3);
    expect(1).to.be.equal(linkedlist.head.value);
    expect(3).to.be.equal(linkedlist.tail.value);
  });

  it("deleteNodeAtHead: should return null", () => {
    const linkedlist = new LinkedList();
    expect(null).to.be.equal(linkedlist.deleteNodeAtHead());
  });

  it("deleteNodeAtHead: should return 1", () => {
    const linkedlist = new LinkedList();
    linkedlist.insertNodeAtTail(1);
    linkedlist.insertNodeAtTail(2);
    linkedlist.insertNodeAtTail(3);
    expect(1).to.be.equal(linkedlist.deleteNodeAtHead().value);
  });

  it("deleteNodeAtTail: should return null", () => {
    const linkedlist = new LinkedList();
    expect(null).to.be.equal(linkedlist.deleteNodeAtTail());
  });

  it("deleteNodeAtTail: should return 1", () => {
    const linkedlist = new LinkedList();
    linkedlist.insertNodeAtTail(1);
    expect(1).to.be.equal(linkedlist.deleteNodeAtTail().value);
  });

  it("deleteNodeAtTail: should return 3", () => {
    const linkedlist = new LinkedList();
    linkedlist.insertNodeAtTail(1);
    linkedlist.insertNodeAtTail(2);
    linkedlist.insertNodeAtTail(3);
    expect(3).to.be.equal(linkedlist.deleteNodeAtTail().value);
  });

  it("findNode: should return 2", () => {
    const linkedlist = new LinkedList();
    linkedlist.insertNodeAtTail(1);
    linkedlist.insertNodeAtTail(2);
    linkedlist.insertNodeAtTail(3);
    expect(2).to.be.equal(linkedlist.findNode(2).value);
  });

  it("findNode: should return null", () => {
    const linkedlist = new LinkedList();
    linkedlist.insertNodeAtTail(1);
    linkedlist.insertNodeAtTail(2);
    linkedlist.insertNodeAtTail(3);
    expect(null).to.be.equal(linkedlist.findNode(5));
  });
});
