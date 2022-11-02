class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  size() {
    return this.size;
  }

  head() {
    return this.head;
  }

  tail() {
    return this.tail;
  }

  append(value) {
    // adds a new node containing value to the end of the list
  }

  prepend(value) {
    // adds a new node containing value to the start of the list
    const newHead = new Node(value, this.head);
    this.head = newHead;
    this.size++;
  }

  at(index) {
    if (index < 0 || index >= this.size) return null;

    let currentIndex = this.head;
    for (let i = 0; i < index; i++) {
      currentIndex = currentIndex.next;
    }
    return currentIndex;
  }

  pop() {
    // removes last element from list
  }

  contains(input) {
    let currentIndex = this.head;
    while (currentIndex) {
      currentIndex = currentIndex.next;
      if (currentIndex.value == input) {
        return true;
      } else {
        return false;
      }
    }
  }

  findIndex(value) {
    // returns the index of the node containing value, or null if not found
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
    this.size++;
  }

  removeHead() {
    this.head = this.head.next;
    this.size--;
  }

  removeAt(index) {
    if (index === 0) return this.removeHead();

    const previous = this.at(index - 1);
    if (previous == null) return null;

    previous.next = previous.next.next;
    this.size--;
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
ll.insertAt(1, 30);
ll.removeAt(2);
ll.toString();
