class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  // add element to the top of stack
  push(element) {
    // add element according to the count (position)
    this.items[this.count] = element;
    console.log(`${element} added to ${this.count}`);
    // increment count on each usage to add number to the end of the list
    this.count += 1;
    return this.count - 1;
  }

  // return and remove the top element in stack
  // return undefined if stack is empty
  pop() {
    if (this.count == 0) {
      return undefined;
    }

    let deleteItem = this.items[this.count - 1];
    this.count -= 1;
    console.log(`${deleteItem} removed`);
    return deleteItem;
  }

  // check top element in stack
  peek() {
    console.log(`Top element is ${this.items[this.count - 1]}`);
    return this.items[this.count - 1];
  }

  // check if stack is empty
  isEmpty() {
    console.log(this.count == 0 ? "Stack is empty" : "Stack is NOT empty");
    return this.count == 0;
  }
}

// create stack
const stack = new Stack();

stack.push(100);
stack.push(200);
stack.push(300);

stack.pop();
stack.pop();

stack.isEmpty();
