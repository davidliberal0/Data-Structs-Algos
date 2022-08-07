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
    // store the list's current head
    const currentHead = this.head;
    // check the current existence of a head in list
    if (currentHead) {
      currentHead.setPreviousNode(newHead);
      newHead.setNextNode(currentHead);
    }
    // set the new head of list to our new head
    this.head = newHead;
    // if tail does not exist, then make new head the tail
    if (this.tail === null) {
      this.tail = newHead;
    }
  }

  addToTail(data) {
    // create new tail
    const newTail = new Node(data);
    // store the list's current tail
    const currentTail = this.tail;
    // check for the current existence of a tail in the list
    if (currentTail) {
      currentTail.setNextNode(newTail);
      newTail.setPreviousNode(currentTail);
    }
    // set the newtail to our list's tail
    this.tail = newTail;
    // if the head does not exist, then make newtail the head
    if (this.head === null) {
      this.head = newTail;
    }
  }

  removeHead() {
    // store the current head of the list to be removed
    const removedHead = this.head;
    // if there is no head, return - do nothing
    if (!removedHead) {
      return;
    }

    // set the head of the list to the next node of the removedHead
    this.head = removedHead.getNextNode();
    // set the head of list's previous node to null, if it contains a value
    if (this.head) {
      this.head.setPreviousNode(null);
    }

    // if the list has only a 1 item in it, we must also remvoed the tail
    // along with the head
    if (removedHead === this.tail) {
      this.removedTail;
    }

    // retur the removedHead data
    return removedHead.data;
  }
}
