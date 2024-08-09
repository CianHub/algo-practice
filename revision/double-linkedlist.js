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

  pop() {
    if (this.length === 0) return undefined;

    let lastNode = this.tail;

    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      const newTail = this.tail.prev;
      newTail.next = null;
      this.tail = newTail;
    }

    this.length--;
    return lastNode;
  }

  shift() {
    if (this.length === 0) return undefined;

    let firstNode = this.head;

    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      const newHead = firstNode.next;
      newHead.prev = null;
      this.head = newHead;
    }

    this.length--;
    return firstNode;
  }
}
