import { LinkedList } from '../LinkedList/LinkedList';

export class Stack {
  constructor() {
    this.items = new LinkedList();
  }

  isEmpty() {
    return !this.items.head;
  }

  push(value) {
    this.items.prepend(value);
  }

  pop() {
    return this.items.deleteHead();
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.head.value;
  }

  toArray() {
    return this.items.toArray();
  }

  toString() {
    return this.items.toString();
  }
}
