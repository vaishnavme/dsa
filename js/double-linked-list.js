/**
 * Double Linked List
 *
 * However, in the single linked list we can only move forward to the next element but cannot go back.
 * But in the doubly linked list, we maintain two pointers
 * 1. For the next element.
 * 2. For the previous element.
 *
 * append(element): Adds a new element in the list.
 * toString(): Joins all the elements of the list and returns it as a string.
 * toArray(): Converts the linked list to the array and returns it.
 * removeAt(position): Removes an element from the given position in the list and returns it.
 * indexOf(element): Returns the position of the given element in the list.
 * delete(element): Removes the given element from the list.
 * deleteHead(): Removes the first element from the list.
 * deleteTail(): Removes the last element from the list.
 * isPresent(element): Returns true if element is present in the list, false otherwise.
 * isEmpty(): Returns true if the list is empty, false otherwise.
 * size(): Returns the size of the list.
 * getHead(): Returns the whole list to iterate in forward direction.
 * getTail(): Returns the whole list to itreate in backward direction.
 * insert(position, element): Adds an element at the given position in the list.
 */

import { DNode } from "./node.js";

class DoubleLinkedList {
  #head;
  #tail;
  #size;

  constructor() {
    this.#head = null;
    this.#tail = null;
    this.#size = 0;
  }

  append(item) {
    const node = new DNode(item);

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

  insert(position, element) {
    if (position < 0 || position > this.#size) {
      return;
    }

    const node = new DNode(element);

    // at 0
    if (position === 0) {
      if (this.#size === 0) {
        this.#head = node;
        this.#tail = node;
      } else {
        this.#head.prev = node;
        node.next = this.#head;
        this.#head = node;
      }
    } else if (position === this.#size) {
      // A B C.  Z
      node.prev = this.#tail;
      this.#tail.next = node;
      this.#tail = node;
    } else {
      let previous = null;
      let current = this.#head;
      let index = 0;

      while (index++ < position) {
        previous = current;
        current = current.next;
      }

      node.prev = previous;
      node.next = current;

      previous.next = node;
      current.prev = node;
    }

    // at end size-1

    this.#size++;
  }

  removeAt(position) {
    if (position < 0 || position > this.#size) {
      return false;
    }
    let removedItem;

    if (position === 0) {
      removedItem = this.#head.val;

      this.#head = this.#head.next;

      if (this.#size === 1) {
        this.#tail = null;
      } else {
        this.#head.prev = null;
      }
    } else if (position === this.#size - 1) {
      removedItem = this.#tail.val;

      this.#tail = this.#tail.prev;
      this.#tail.next = null;
    } else {
      let index = 0;
      let current = this.#head;
      let previous = null;

      while (index++ < position) {
        previous = current;
        current = current.next;
      }

      removedItem = current.val;
      previous.next = current.next;
      current.next.prev = previous;
    }

    this.#size--;
    return removedItem;
  }

  indexOf(element) {
    let index = 0;
    let current = this.#head;

    while (current) {
      if (
        (typeof current.val === "object" &&
          JSON.stringify(element) === JSON.stringify(current.val)) ||
        element === current.val
      ) {
        return index;
      }
      index++;
      current = current.next;
    }

    return -1;
  }

  delete(element) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }

  deleteHead() {
    return this.removeAt(0);
  }

  deleteTail() {
    return this.removeAt(this.#size - 1);
  }

  toString() {
    let str = "";
    let current = this.#head;

    while (current) {
      str += `${current.val} (prev: ${current?.prev?.val}, next: ${
        current?.next?.val
      }) ${current.next === null ? "" : "-> "}`;
      current = current.next;
    }

    return str;
  }

  toArray() {
    let array = [];
    let current = this.#head;

    while (current) {
      array.push(current.val);
      current = current.next;
    }

    return array;
  }

  getSize() {
    return this.#size;
  }

  getHead() {
    return this.#head;
  }

  getTail() {
    return this.#tail;
  }

  isPresent(element) {
    const index = this.indexOf(element);
    return index !== -1;
  }

  isEmpty() {
    return this.#size === 0;
  }
}

const doubleList = new DoubleLinkedList();

doubleList.append("A");
doubleList.append("B");
doubleList.append("C");

doubleList.insert(0, "X");
doubleList.insert(4, "Z");
doubleList.insert(2, "YYY");
console.log("toString: ", doubleList.toString());
console.log("getSize: ", doubleList.getSize());
console.log("toArray: ", doubleList.toArray());

console.log("toString: ", doubleList.toString());
console.log("toArray: ", doubleList.toArray());

doubleList.removeAt(1);
console.log("toString: ", doubleList.toString());

doubleList.append("P");
doubleList.append("Q");
doubleList.append("R");

console.log("toArray: ", doubleList.toArray());

console.log("indexOf: ", doubleList.indexOf("Q"));
console.log("delete: ", doubleList.delete("Q"));

console.log("toArray: ", doubleList.toArray());
console.log("delete: ", doubleList.deleteTail());

console.log("toArray: ", doubleList.toArray());
