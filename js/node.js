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

export class PriorityNode {
  data;
  priority;

  constructor(data, priority) {
    this.data = data;
    this.priority = priority;
  }
}
