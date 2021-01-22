import Node from "./node.js";

export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  /**
   * @param {Number} value
   * @return returns linkedlist with the inserted node at tail
   */
  insertNodeAtHead(value) {
    // linkedlist empty
    if (!this.head) {
      this.head = new Node(value);
      this.tail = this.head;
    } else {
      // contains 1 node at least
      const nextNode = this.head;
      this.head = new Node(value, nextNode);
    }
    return this;
  }

  /**
   * @param {Number} value
   * @return returns linkedlist with the inserted node at tail
   */
  insertNodeAtTail(value) {
    // linkedlist empty
    if (!this.tail) {
      this.tail = new Node(value);
      this.head = this.tail;
    } else {
      // contains 1 node at least
      const endNode = new Node(value);
      this.tail.next = endNode;
      this.tail = endNode;
    }
    return this;
  }

  /**
   * @return returns deleted node at head ; otherwise null if linkedlist empty
   */
  deleteNodeAtHead() {
    if (!this.head) return null;
    else {
      const deletedNode = this.head;
      // if nextNode of the node to delete exists
      if (deletedNode.next) this.head = deletedNode.next;
      // otherwise no node
      else this.head = this.tail = null;
      return deletedNode;
    }
  }

  /**
   * @return returns deleted node at tail ; otherwise null if linkedlist empty
   */
  deleteNodeAtTail() {
    if (!this.tail) return null;
    else {
      const deletedNode = this.tail;
      // one and same node
      if (this.head === deletedNode) this.head = this.tail = null;
      else {
        let currentNode = this.head;
        // traverse all the nodes
        while (currentNode.next) {
          if (!currentNode.next.next) {
            currentNode.next = null;
          } else {
            currentNode = currentNode.next;
          }
        }
        // to assign the previous node of the node to delete
        // as new tail of the linkedlist
        this.tail = currentNode;
      }
      return deletedNode;
    }
  }

  /**
   * @return returns node to find ; otherwise null if node not found or linkedlist empty
   */
  findNode(value) {
    if (this.head) {
      let currentNode = this.head;
      while (currentNode) {
        if (currentNode.value === value) {
          return currentNode;
        } else {
          currentNode = currentNode.next;
        }
      }
    }
    // if no node found or linkedlist empty
    return null;
  }
}
