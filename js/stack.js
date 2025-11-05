/**
 * Stack
 *
 * push(): Adds a single or multiple items to the top of the Stack.
 * pop(): Removes and Returns the top item of the Stack.
 * peek(): Returns the top item of the Stack.
 * clear(): Removes all the items of the Stack.
 * size(): Returns the length of the stack.
 * isEmpty(): Returns true if stack is empty, false otherwise
 */

class Stack {
  #items;
  #size;
  constructor() {
    this.#items = [];
    this.#size = 0;
  }

  push(item) {
    this.#items[this.#size] = item;
    this.#size++;
  }

  pop() {
    const item = this.#items[this.#size - 1];
    this.#items.length = this.#size - 1;
    this.#size = this.#items.length;
    return item;
  }

  peek() {
    return this.#items[this.#size - 1];
  }

  getStack() {
    return this.#items;
  }

  getSize() {
    return this.#size;
  }

  clear() {
    this.#items = [];
    this.#size = 0;
  }
}

const stack = new Stack();

stack.push("A");
stack.push("B");
stack.push("C");

console.log("print: ", stack.getStack());
console.log("size: ", stack.getSize());
console.log("peek: ", stack.peek());
console.log("pop: ", stack.pop());
console.log("print: ", stack.getStack());
console.log("size: ", stack.getSize());
