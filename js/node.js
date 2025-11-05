export class Node {
  val;
  next;

  constructor(element) {
    this.val = element;
    this.next = null;
  }
}

export class DNode {
  val;
  next;
  prev;

  constructor(element) {
    this.val = element;
    this.next = null;
    this.prev = null;
  }
}
