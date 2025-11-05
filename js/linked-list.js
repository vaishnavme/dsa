/**
 * Linked List
 *
 * Linked list stores the collection of data, but unlike arrays data are not stored in contagious memory,
 * instead each element in the linked list consists of a node which stores the data and
 * a reference(pointer or link) to the next element.
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
 * getHead(): Returns the whole list.
 * insert(position, element): Adds an element at the given position in the list.
 */

import { Node } from "./node.js";

class LinkedList {
  #head;
  #size;

  constructor() {
    this.#head = null;
    this.#size = 0;
  }

  append(item) {
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

  insert(position, element) {
    if (position < 0 || position > this.#size) {
      return false;
    }

    const node = new Node(element);

    if (position === 0) {
      node.next = this.#head;
      this.#head = node;
    } else {
      let index = 0;
      let previous = null;
      let current = this.#head;

      while (index++ < position) {
        previous = current;
        current = current.next;
      }

      node.next = current;
      previous.next = node;
    }

    this.#size++;
  }

  removeAt(position) {
    if (position < 0 || position > this.#size) {
      return false;
    }

    let removeItem;

    if (position === 0) {
      removeItem = this.#head.val;
      this.#head = this.#head.next;
    } else {
      let current = this.#head;
      let previous;
      let index = 0;

      while (index++ < position) {
        previous = current;
        current = current.next;
      }

      removeItem = current.val;
      previous.next = current.next;
    }

    this.#size--;
    return removeItem;
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

  indexOf(element) {
    let index = 0;
    let current = this.#head;

    while (current) {
      if (
        (typeof element === "object" &&
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

  isPresent(element) {
    const index = this.indexOf(element);
    return index > -1;
  }

  isEmpty() {
    return this.#size === 0;
  }

  getHead() {
    return this.#head;
  }

  getSize() {
    return this.#size;
  }

  toString() {
    let listStr = "";
    let current = this.#head;

    while (current) {
      listStr += `${current.val} ${current.next === null ? "" : "-> "}`;
      current = current.next;
    }

    return listStr;
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
}

const linkedList = new LinkedList();

linkedList.append("A");
linkedList.append("B");
linkedList.append("C");

console.log("toString: ", linkedList.toString());
console.log("toArray: ", linkedList.toArray());
console.log("removeAt: ", linkedList.removeAt(1));
console.log("toString: ", linkedList.toString());

linkedList.append("P");
linkedList.append("Q");
linkedList.append("R");
console.log("toString: ", linkedList.toString());

console.log("indexOf: ", linkedList.indexOf("Q"));
console.log("delete: ", linkedList.delete("Q"));
console.log("toString: ", linkedList.toString());

console.log("deleteTail: ", linkedList.deleteTail());
console.log("toString: ", linkedList.toString());

console.log("isPresent: ", linkedList.isPresent("C"));

linkedList.insert(0, "X");
console.log("toString: ", linkedList.toString());

linkedList.insert(2, "Y");
console.log("toString: ", linkedList.toString());

linkedList.insert(6, "Z");
console.log("toString: ", linkedList.toString());
