class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  add(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }
}

function detectLoop(head) {
  let seen = new Set();

  while (head != null) {
    if (seen.has(head)) {
      return true;
    }

    seen.add(head);

    head = head.next;
  }

  return false;
}
