class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  get size() {
    // returns the total number of nodes in the list
  }

  get head() {
    // returns first node
  }

  get tail() {
    // returns last node
  }

  append(value) {
    // adds a new node containing value to the end of the list
  }

  prepend(value) {
    // adds a new node containing value to the start of the list
  }

  at(index) {
    // returns node at given index
  }

  pop() {
    // removes last element from list
  }

  contains(value) {
    // returns true if the passed in value is in the list and otherwise returns false
  }

  find(value) {
    // returns the index of the node containing value, or null if not found
  }

  toString() {
    // represents your LinkedList objects as strings, so you can print them out
    // and preview them in the console. The format should be:
    // ( value ) -> ( value ) -> ( value ) -> null
  }

  insertAt(value, index) {
    // inserts a new node with the provided value at the given index
  }

  removeAt(index) {
    // removes the node at the given index
  }
}

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}
