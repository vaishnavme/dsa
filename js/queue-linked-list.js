/**
 * Queue using Linked List
 *
 * enqueue(): Adds an item at the tail of the queue.
 * dequeue(): Removes an item from the head of the queue.
 * front(): Retruns the first item in the queue.
 * rear(): Retruns the last item in the queue.
 * size(): Returns the size of the queue.
 * isEmpty(): Returns true if queue is empty, false otherwise.
 */

import { Node } from "./node.js";

class QueueLinkedList {
  #head;
  #size;

  constructor() {
    this.#head = null;
    this.#size = 0;
  }

  enqueue(item) {
    const node = new Node(item);

    if (this.#head === null) {
      this.#head = node;
    } else {
      let current = this.#head;

      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }

    this.#size++;
  }

  dequeue() {
    this.#head = this.#head.next;
    this.#size--;
  }

  getFront() {
    return this.#head.val;
  }

  getRear() {
    let current = this.#head;

    while (current.next) {
      current = current.next;
    }

    return current.val;
  }

  getSize() {
    return this.#size;
  }

  isEmpty() {
    return this.#size === 0;
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
}

const queueList = new QueueLinkedList();

queueList.enqueue("A");
queueList.enqueue("B");
queueList.enqueue("C");

console.log("toString: ", queueList.toString());
queueList.dequeue();
console.log("toString: ", queueList.toString());

console.log("getFront: ", queueList.getFront());
console.log("getRear: ", queueList.getRear());
