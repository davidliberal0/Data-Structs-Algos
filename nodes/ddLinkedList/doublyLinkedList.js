const Node = require("./biDirectionalNode");

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // method for adding node to head
  addToHead(data) {
    // create new head to add
    const newHead = new Node(data);
    const currentHead = this.head;
    if (currentHead) {
      currentHead.setPreviousNode(newHead);
      newHead.setNextNode(currentHead);
    }
    this.head = newHead;
    if (this.tail === null) {
      this.tail = newHead;
    }
  }
}
