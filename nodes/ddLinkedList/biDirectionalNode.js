// this node is bidirectional
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.previous = null;
  }

  // method for setting the next node
  setNextNode(node) {
    if (node instanceof Node || node === null) {
      this.next = node;
    } else {
      throw new Error("Next node must be a member of the Node class");
    }
  }

  // method for setting the previous node
  setPreviousNode(node) {
    if (node instanceof Node || node === null) {
      this.previous = node;
    } else {
      throw new Error("Next node must be a member of the Node class");
    }
  }

  getNextNode() {
    return this.next;
  }

  getPreviousNode() {
    return this.previous;
  }
}

module.exports = Node;
