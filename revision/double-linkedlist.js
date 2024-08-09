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

  unshift(value) {
    const newNode = new Node(value);
    const prevHead = this.head;

    newNode.next = prevHead;

    if (!prevHead && this.length === 0) this.tail = newNode;
    else prevHead.prev = newNode;

    this.head = newNode;
    this.length++;

    return this;
  }

  get(index) {
    if (index + 1 > this.length) return null;

    let currentNode = this.head;

    while (index > 0) {
      currentNode = currentNode.next;
      index--;
    }

    return currentNode;
  }

  set(index, value) {
    if (index + 1 > this.length) return false;

    let currentNode = this.head;

    while (index > 0) {
      currentNode = currentNode.next;
      index--;
    }

    currentNode.val = value;

    return true;
  }

  remove(index) {
    if (index + 1 > this.length) return undefined;

    let currentNode = this.head;

    while (index > 0) {
      currentNode = currentNode.next;
      index--;
    }

    const prev = currentNode.prev;
    const next = currentNode.next;

    prev.next = next;
    next.prev = prev;
    this.length--;

    return currentNode;
  }

  insert(index, value) {
    if (index + 1 > this.length) return false;
    else if (index + 1 === this.length) return this.push(value);
    else if (index === 0) return this.unshift(value);

    const newNode = new Node(value);

    let currentNode = this.head;

    while (index > 0) {
      currentNode = currentNode.next;
      index--;
    }

    const prev = currentNode.prev;

    prev.next = newNode;
    currentNode.prev = newNode;
    newNode.next = currentNode;

    this.length++;

    return true;
  }

  reverse() {
    if (this.length < 2) return this.head;

    let len = this.length;
    let currentNode = this.tail;

    while (len > 0) {
      const prev = currentNode.prev;
      const next = currentNode.next;

      currentNode.next = prev;
      currentNode.prev = next;

      currentNode = prev;
      len--;
    }

    const newTail = this.head;
    this.head = this.tail;
    this.tail = newTail;

    return this;
  }
}
