/**
 * Priority Queue
 *
 * In this elements are added and removed based on their priorities.
 * It is an abstract data type that captures the idea of a container whose
 * elements have priorities attached to them.
 * An element of highest priority always appears at the front of the queue.
 * If that element is removed, the next highest priority element advances to the front.
 *
 * enqueue(): Adds an item at the tail of the queue.
 * dequeue(): Removes an item from the head of the queue.
 * front(): Returns the first item in the queue.
 * rear(): Returns the last item in the queue.
 * size(): Returns the size of the queue.
 * isEmpty(): Returns true if queue is empty, false otherwise.
 *
 */

import { PriorityNode } from "./node.js";

class PriorityQueue {
  #items;

  constructor() {
    this.#items = [];
  }

  enqueue(data, priority) {
    const node = new PriorityNode(data, priority);

    let isAdded = false;

    for (let i = 0; i < this.#items.length; i++) {
      const currentQueuedNode = this.#items[i];

      if (node.priority > currentQueuedNode.priority) {
        this.#items.splice(i, 0, node);
        isAdded = true;
        break;
      }
    }

    if (!isAdded) {
      this.#items.push(node);
    }
  }

  dequeue() {
    return this.#items.shift();
  }

  toString() {
    let str = "";

    for (let i in this.#items) {
      const node = this.#items[i];
      str += `${node.data}(${node.priority}) -> `;
    }

    console.log(str);
  }

  getFront() {
    return this.#items[0];
  }

  getRear() {
    return this.#items[this.#items.length - 1];
  }

  getSize() {
    return this.#items.length;
  }

  isEmpty() {
    return this.getSize() === 0;
  }
}

const pqueue = new PriorityQueue();

pqueue.enqueue("ABC", 4);
pqueue.enqueue("PQR", 2);
pqueue.enqueue("XZY", 10);
pqueue.enqueue("MNO", 4);
pqueue.toString();

console.log("dequeue: ", pqueue.dequeue());
pqueue.toString();

console.log("front: ", pqueue.getFront());
console.log("rear: ", pqueue.getRear());

// XYZ ABC PQR
// XYZ ABC MNO PQR
