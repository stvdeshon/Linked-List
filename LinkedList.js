class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  size() {
    if (!this.head) return null;
    return console.log(`This linked list is ${this.length} units long.`);
  }

  headNode() {
    let node = this.at(0).value;
    if (!this.head) return null;
    return console.log(`The value of the head node is ${node}.`);
  }

  tailNode() {
    let currentIndex = this.head;
    // if (!this.head) return null;
    while (currentIndex.next != null) {
      currentIndex = currentIndex.next;
    }
    return console.log(`The value of the tail node is ${currentIndex.value}.`);
  }

  prepend(value) {
    // adds a new node containing value to the start of the list
    const newHead = new Node(value, this.head);
    this.head = newHead;
    this.length++;
  }

  append(value) {
    // adds a new node containing value to the end of the list
    let currentIndex = this.head;
    const newNode = new Node(value);
    while (currentIndex.next != null) {
      currentIndex = currentIndex.next;
    }
    currentIndex.next = newNode;
    this.length++;
  }

  pop() {
    // removes the tail node
    let currentIndex = this.head;
    while (currentIndex.next.next != null) {
      currentIndex = currentIndex.next;
    }
    currentIndex.next = null;
    this.length--;
  }

  at(index) {
    if (index < 0 || index >= this.length) return null;

    let currentIndex = this.head;
    for (let i = 0; i < index; i++) {
      currentIndex = currentIndex.next;
    }
    return currentIndex;
  }

  contains(input) {
    let currentIndex = this.head;
    while (currentIndex && currentIndex.value !== input) {
      currentIndex = currentIndex.next;
    }
    return currentIndex == null ? false : true;
  }

  findIndex(value) {
    // returns the index of the node containing value, or null if not found
    let currentIndex = this.head;
    let output = 0;
    while (currentIndex) {
      if (currentIndex.value == value) {
        return console.log(`The value is at index ${output}`);
      }
      output++;
      currentIndex = currentIndex.next;
    }

    return null;
  }

  toString() {
    let string = "";
    let currentIndex = this.head;
    while (currentIndex) {
      string = `${string}${currentIndex.value} -> `;
      currentIndex = currentIndex.next;
    }
    console.log(`${string}null`);
  }

  insertAt(index, value) {
    if (index === 0) return this.prepend(value);
    const previous = this.at(index - 1);
    if (previous == null) return null;
    previous.next = new Node(value, previous.next);
    this.length++;
  }

  removeHead() {
    this.head = this.head.next;
    this.length--;
  }

  removeAt(index) {
    if (index === 0) return this.removeHead();

    const previous = this.at(index - 1);
    if (previous == null) return null;

    previous.next = previous.next.next;
    this.length--;
  }
}

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

const ll = new LinkedList();
ll.prepend(10);
ll.prepend(22);
ll.prepend(55);
ll.append(16);
ll.insertAt(1, 30);
// ll.size();
ll.removeAt(2);
ll.toString();
// ll.size();
ll.at(0);
ll.headNode();
ll.tailNode();
ll.contains(55);
ll.pop();
ll.findIndex(16);
ll.toString();
