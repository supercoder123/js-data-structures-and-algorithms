export class QueueClassic {
  constructor() {
    this.queue = {};
    this.head = 0;
    this.tail = 0;
  }

  enqueue(value) {
    this.queue[this.tail] = value;
    this.tail++;
  }

  dequeue() {
    if (this.isEmpty()) return;
    const deletedElement = this.queue[this.head];
    delete this.queue[this.head];
    this.head++;
    return deletedElement;
  }

  isEmpty() {
    if (this.size() === 0) {
      return true;
    }
    return false;
  }

  size() {
    return this.tail - this.head;
  }

  toString() {
    return Object.values(this.queue).join(' ');
  }
}
