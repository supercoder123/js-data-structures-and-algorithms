import { Queue } from '../Queue';

describe('Queue', () => {
  it('should create empty queue', () => {
    const queue = new Queue();
    expect(queue).not.toBeNull();
    expect(queue.linkedList).not.toBeNull();
  });

  it('should enqueue data to queue', () => {
    const queue = new Queue();

    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.size()).toBe(2);

    expect(queue.toString()).toBe('1 2');
  });

  it('should peek data from queue', () => {
    const queue = new Queue();

    expect(queue.peek()).toBeNull();

    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.size()).toBe(2);

    expect(queue.peek()).toBe(1);
    expect(queue.peek()).toBe(1);
  });

  it('should check if queue is empty', () => {
    const queue = new Queue();

    expect(queue.isEmpty()).toBe(true);

    queue.enqueue(1);

    expect(queue.isEmpty()).toBe(false);
  });

  it('should dequeue from queue in FIFO order', () => {
    const queue = new Queue();

    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.size()).toBe(0);

    expect(queue.dequeue()).toBeNull();
    expect(queue.isEmpty()).toBe(true);
  });
});
