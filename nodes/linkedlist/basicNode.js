class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  setNextNode(node) {
    if (node instanceof Node || node === null) {
      this.next = node;
    } else {
      return new Error("NOT a Node");
    }
  }

  getNextNode() {
    return this.next;
  }
}
