const Node = require("./Node");

const Node = require("./Node");

class LinkedList {
  constructor() {
    this.head = null;
  }

  addToHead(data) {
    // store the new head
    const newHead = new Node(data);
    // store the current head of the linkedList
    const currentHead = this.head;
    // change the head of the linkedList to our newHead
    this.head = newHead;
    // check if there is a current head to the list, if so, set the list's head next node to currentHead
    // this.head (our new head) --> currentHead
    if (currentHead) {
      this.head.setNextNode(currentHead);
    }
  }

  addToTail(data) {
    // store the list's head in tail
    let tail = this.head;
    // check if tail has a value, basically checks if the list has a head
    if (!tail) {
      this.head = new Node(data);
    } else {
      // if list has a head, then loop through the beginning of list to end
      // up at the end of the list
      while (tail.getNextNode()) {
        tail = tail.getNextNode();
      }
      // after we loop to find the end of the list, create our next node after our tail
      tail.setNextNode(new Node(data));
    }
  }

  removeHead() {
    // store the list's head
    const removedHead = this.head;
    // if the list is empty, do nothing
    if (!removedHead) {
      return;
    }
    // change head of list, to the next node of the removedHead
    this.head = removedHead.getNextNode();
    // return the head we removed
    return removedHead.data;
  }

  printList() {
    let currentNode = this.head;
    let output = "<head> ";

    // traverse all nodes in linkedList
    while (currentNode !== null) {
      // output the current node
      output += currentNode.data + " ";
      // change the current node to the next node
      currentNode = currentNode.getNextNode();
    }

    output = output + "<tail>";
    console.log(output);
  }
}

module.exports = LinkedList;
