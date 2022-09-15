import { MaxHeap } from '../Heap/Heap';

export class PriorityQueue extends MaxHeap {
  constructor() {
    super();
    this.priorities = new Map();
    this.compare = this.comparePriorities;
  }

  comparePriorities(a, b) {
    if (this.priorities.get(a) === this.priorities.get(b)) {
      return true;
    }
    return this.priorities.get(a) > this.priorities.get(b) ? true : false;
  }

  enqueue(val, priority) {
    this.priorities.set(val, priority);
    this.insert(val);
  }

  dequeue(val) {
    this.priorities.delete(val);
    return this.extractMax();
  }

  peek() {
    return super.peek();
  }
}
