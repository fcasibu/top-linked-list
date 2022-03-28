class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.nextNode = node;
      this.tail = node;
    }

    this.length += 1;
    return this.toString();
  }

  prepend(value) {
    const node = new Node(value);
    if (!this.length) {
      this.head = node;
      this.tail = node;
    } else {
      node.nextNode = this.head;
      this.head = node;
    }

    this.length += 1;
    return this.toString();
  }

  at(index) {
    if (index < 0 || index >= this.length) return null;
    let currentNode = this.head;
    let counter = 0;

    while (counter !== index) {
      currentNode = currentNode.nextNode;
      counter += 1;
    }

    return currentNode;
  }

  pop() {
    if (!this.tail) return null;
    const currentNode = this.at(this.length - 1);
    this.tail = this.at(this.length - 2);
    this.length -= 1;
    if (!this.length) {
      this.head = null;
      this.tail = null;
      return currentNode;
    }
    this.tail.nextNode = null;
    return this.toString();
  }

  contains(value) {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) return true;
      currentNode = currentNode.nextNode;
    }

    return false;
  }

  find(value) {
    if (this.head.value === value) return 0;
    if (this.tail.value === value) return this.length - 1;
    let currentNode = this.head;
    let counter = 1;

    while (currentNode.nextNode) {
      if (currentNode.nextNode.value === value) return counter;
      currentNode = currentNode.nextNode;
      counter += 1;
    }

    return null;
  }

  toString() {
    let currentNode = this.head;
    let str = "";
    while (currentNode) {
      str += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.nextNode;
    }

    return (str += " null");
  }

  insert(value, index) {
    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      const previousNode = this.at(index - 1);
      node.nextNode = previousNode.nextNode;
      previousNode.nextNode = node;
      this.length += 1;
    }

    return this.toString();
  }

  remove(index) {
    const previousNode = this.at(index - 1);
    const removedNode = previousNode.nextNode;
    previousNode.nextNode = removedNode.nextNode;
    this.length -= 1;
    return this.toString();
  }
}

const linkedList = new LinkedList();
function createArr(length) {
  return Array.from({ length }).map(() => Math.floor(Math.random() * 20));
}

const array = createArr(10);

for (let i = 0; i < array.length; i++) {
  linkedList.append(array[i]);
}

console.log(linkedList.toString());
