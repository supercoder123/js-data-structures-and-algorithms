import { LinkedList } from '../LinkedList/LinkedList';

export class Queue {
  constructor() {
    this.queue = new LinkedList();
  }

  isEmpty() {
    return !this.queue.head;
  }

  enqueue(value) {
    this.queue.append(value);
  }

  dequeue() {
    return this.queue.deleteHead();
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.queue.head.value;
  }

  toString() {
    return this.queue.toString();
  }
}
