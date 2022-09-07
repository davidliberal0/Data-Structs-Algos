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

const swapNodes = (list, data1, data2) => {
  // define and initialize node1 and node2 to the beginning of the list
  let node1 = list.head;
  let node2 = list.head;

  // define variables for keeping track of previous nodes
  let node1Prev = null;
  let node2Prev = null;

  // loop through the linked-list until we find the node that matches the given data
  while (node1 !== null) {
    if (node1.data === data1) {
      break;
    }

    // if node does not match data, then go to the next node while keeping track of the prevous node
    node1Prev = node1; // set the previous node value to node1's current before iterating ( or finding the next node)
    node1.getNextNode(); // get the next node of the list
  }

  while (node2 !== null) {
    if (node2.data === data2) {
      break;
    }

    // if node does not match data, then go to the next node while keeping track of the prevous node
    node2Prev = node2; // set the previous node value to node1's current before iterating ( or finding the next node)
    node2.getNextNode(); // get the next node of the list
  }

  // Edge case handling - if one or more of the ndoes is not found in the list
  if (node1 === null || node2 === null) {
    console.log("Swap not possible - one or more element is not in the list");
    return;
  }

  // Edge case handling - if the data1 and 2 are the same
  if (data1 === data2) {
    console.log("Elements are the same - no swap needed.");
    return;
  }

  // first, check if node1's prevous node is null, if so, node1 was the head and we can just set node2 as the new head.
  // If node1 was not the head, we just use node1's previous node to place node2 where node1 was located in the lis. ]
  // ( which was after its prevous node(node1Prev))
  if (node1Prev === null) {
    list.head = node2;
  } else {
    node1Prev.setNextNode(node2);
  }

  if (node2Prev === null) {
    list.head = node1;
  } else {
    node2Prev.setNextNode(node1);
  }

  // Updating the Node's Pointers
  let temp = node1.getNextNode();

  node1.setNextNode(node2.getNextNode());
  node2.setNextNode(temp);
};

module.exports = LinkedList;
