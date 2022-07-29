class Stack {
  constructor() {
    this.array = [];
    this.count = 0;
  }

  addItem(element) {
    this.array[this.count] = element; // add element
    console.log(`${this.array[this.count]}`);
    this.count = this.count + 1; // increment count on each push
  }

  removeItem() {
    let opArray = [];

    for (let i = 0; i < this.count; i++) {
      opArray[i] = this.array[i];
    }

    this.array = [];

    this.count = this.count - 1;

    for (let i = 0; i < this.count; i++) {
      this.array[i] = opArray[i];
    }

    opArray = [];

    console.log(this.array);
  }
}

const stack = new Stack();

stack.addItem(13);
stack.addItem(14);
stack.addItem(15);

stack.removeItem();
stack.removeItem();
