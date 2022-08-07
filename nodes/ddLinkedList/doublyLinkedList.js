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

  removeTail() {
    // store the tail to be removed
    const removedTail = this.tail;
    // if there is no tail, return - do nothing
    if (!removedTail) {
      return;
    }

    // set the tail of the list to the previous node of the tail we removed
    this.tail = removedTail.getPreviousNode();
    // if list has a tail, set next node to null
    if (this.tail) {
      this.tail.setNextNode(null);
    }

    // if the list has only a 1 item in it, we must also remove
    // the head along with the tail
    if (removedTail === this.head) {
      this.removeHead();
    }

    return removedTail.data;
  }

  removeByData(data) {
    let nodeToRemove;
    let currentNode = this.head; // iterator for looping through LinkedList
    // loop through the list
    while (currentNode !== null) {
      // check if currentNode's data matches the data we want to remove
      if (currentNode.data === data) {
        // set nodeToTemove to currentNode
        nodeToRemove = currentNode;
        break;
      }
      // iterate to next node (update current node)
      currentNode = currentNode.getNextNode();
    }

    // if not found, return null
    if (!nodeToRemove) {
      return null;
    }
    // check the nodeToRemove
    if (nodeToRemove === this.head) {
      this.removeHead();
    } else if (nodeToRemove === this.tail) {
      this.removeTail();
    } else {
      // store the nodeToRemove's next node
      const nextNode = nodeToRemove.getNextNode();
      // store the nodeToRemove's previous node
      const previousNode = nodeToRemove.getPreviousNode();
      // rearrange nodes
      nextNode.setPreviousNode(previousNode);
      previousNode.setNextNode(nextNode);
    }

    return nodeToRemove;
  }
}
