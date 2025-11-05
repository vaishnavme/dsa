/**
 * Queue
 *
 * A queue is an ordered collection of items that follow FIFO (First In First Out) principle
 * also known as 'First come first served'.
 *
 * enqueue(): Adds an item at the tail of the queue.
 * dequeue(): Removes an item from the head of the queue.
 * front(): Retruns the first item in the queue.
 * rear(): Retruns the last item in the queue.
 * size(): Returns the size of the queue.
 * isEmpty(): Returns true if queue is empty, false otherwise.
 */

class Queue {
  #items;

  constructor() {
    this.#items = [];
  }

  enqueue(item) {
    this.#items.push(item);
  }

  dequeue() {
    return this.#items.shift();
  }

  getFront() {
    return this.#items[0];
  }

  getRear() {
    return this.#items[this.#items.length - 1];
  }

  getQueue() {
    return this.#items;
  }

  getSize() {
    return this.#items.length;
  }

  isEmpty() {
    return this.#items.length === 0;
  }

  clear() {
    this.#items = [];
  }
}

const queue = new Queue();

queue.enqueue("A");
queue.enqueue("B");
queue.enqueue("C");

console.log("print: ", queue.getQueue());
console.log("dequeue: ", queue.dequeue());
console.log("front: ", queue.getFront());
console.log("rear: ", queue.getRear());
console.log("size: ", queue.getSize());
console.log("isEmpty: ", queue.isEmpty());
