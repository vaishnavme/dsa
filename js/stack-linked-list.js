/**
 * Stack using Linked List
 *
 * Push: Adds the item in the stack at the top.
 * Pop: Removes the top item from the stack and returns it.
 * Peek: Shows the top item from the stack.
 * toArray: Convert the stack to the array.
 * size: Returns the size of the stack.
 * isEmpty: Returns true if stack is empty, false other wise.
 * clear: Clears the stack.
 */

import { Node } from "./node.js";

class StackLinkedList {
  #head;
  #size;

  constructor() {
    this.#head = null;
    this.#size = 0;
  }

  push(item) {
    const node = new Node(item);

    node.next = this.#head;
    this.#head = node;

    this.#size++;
  }

  pop() {
    const currentHead = this.#head;

    this.#head = this.#head.next;
    this.#size--;
    return currentHead.val;
  }

  peek() {
    return this.#head.val;
  }

  toString() {
    let current = this.#head;
    let str = "";

    while (current) {
      str += `${current.val} ${current?.next === null ? "" : "-> "}`;
      current = current.next;
    }

    return str;
  }

  toArray() {
    let current = this.#head;
    let array = [];

    while (current) {
      array.push(current.val);
      current = current.next;
    }

    return str;
  }

  isEmpty() {
    return this.#size === 0;
  }

  clear() {
    this.#head = null;
    this.#size = 0;
  }
}

const stackList = new StackLinkedList();

stackList.push("A");
stackList.push("B");
stackList.push("C");

console.log("toString: ", stackList.toString());
stackList.pop();
console.log("toString: ", stackList.toString());
console.log("peek: ", stackList.peek());
