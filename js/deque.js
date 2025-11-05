/**
 * Deque:
 * Deque or Double-ended queue is a generalized version of queue in which data can be added and removed from both the ends.
 * It performs both the combined operations of stack and queue together and can be used as any of them.
 *
 * insertFront(): Inserts an element at the front.
 * insertBack(): Inserts an element at the back.
 * removeFront(): Removes an element from the front.
 * removeBack(): Removes an element from the back.
 * getFront(): Returns the element at the front.
 * getBack(): Returns the element at the back.
 * isEmpty(): Checks if the deque is empty or not.
 * size(): Returns the size of the deque.
 * clear(): Clears the deque.
 * toString(): Returns all the elements concatenated as a string from front to back.
 */

import { DNode } from "./node.js";

class Deque {
  #head;
  #tail;
  #size;

  constructor() {
    this.#head = null;
    this.#tail = null;
    this.#size = 0;
  }

  insertFront(element) {
    const node = new DNode(element);

    if (this.#head === null) {
      this.#head = node;
      this.#tail = node;
    } else {
      node.next = this.#head;
      this.#head.prev = node;
      this.#head = node;
    }

    this.#size++;
  }

  insertBack(element) {
    const node = new DNode(element);

    if (this.#head === null) {
      this.#head = node;
      this.#tail = node;
    } else {
      node.prev = this.#tail;
      this.#tail.next = node;
      this.#tail = node;
    }

    this.#size++;
  }

  removeFront() {
    if (this.isEmpty()) {
      return;
    }

    this.#head = this.#head.next;
    this.#head.prev = null;

    this.#size--;
  }

  removeBack() {
    if (this.isEmpty()) {
      return;
    }

    this.#tail = this.#tail.prev;
    this.#tail.next = null;

    this.#size--;
  }

  toString() {
    let str = "";
    let current = this.#head;

    while (current) {
      str += `${current.val}(prev: ${current?.prev?.val}, next: ${
        current?.next?.val
      }) ${current?.next ? "-> " : ""}`;
      current = current.next;
    }

    return str;
  }

  getFront() {
    return this.#head;
  }

  getBack() {
    return this.#tail;
  }

  isEmpty() {
    return this.#size === 0;
  }

  getSize() {
    return this.#size;
  }
}

const deque = new Deque();

deque.insertFront("A");
deque.insertFront("B");
deque.insertBack("C");
deque.insertFront("E");
deque.insertFront("F");
deque.insertFront("G");

console.log("toString: ", deque.toString());

deque.removeFront();
console.log("toString: ", deque.toString());

deque.removeBack();
console.log("toString: ", deque.toString());
