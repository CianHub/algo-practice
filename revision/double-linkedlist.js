class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(val) {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    const prevTail = this.tail;

    newNode.prev = prevTail;

    if (!prevTail && this.length === 0) this.head = newNode;
    else prevTail.next = newNode;

    this.tail = newNode;
    this.length++;

    return this;
  }
}
