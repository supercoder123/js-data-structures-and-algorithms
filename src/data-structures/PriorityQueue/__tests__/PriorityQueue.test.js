import { PriorityQueue } from '../../PriorityQueue/PriorityQueue';

describe('Priority Queue', () => {
  test('should create empty queue', () => {
    const queue = new PriorityQueue();
    expect(queue).not.toBeNull();
    expect(queue.values).not.toBeNull();
  });

  test('insertion in queue', () => {
    const queue = new PriorityQueue();
    queue.enqueue('switch', 3);
    queue.enqueue('ps4', 6);
    queue.enqueue('ps5', 7);
    queue.enqueue('xbox one', 5);
    queue.enqueue('xbox 360', 4);
    expect(queue.values).toEqual(['ps5', 'xbox one', 'ps4', 'switch', 'xbox 360']);
  });

  test('dequeue', () => {
    const queue = new PriorityQueue();
    queue.enqueue('switch', 3);
    queue.enqueue('ps4', 6);
    queue.enqueue('ps5', 7);
    queue.enqueue('xbox one', 5);
    queue.enqueue('xbox 360', 4);
    expect(queue.dequeue()).toBe('ps5');
    expect(queue.dequeue()).toBe('ps4');
    expect(queue.dequeue()).toBe('xbox one');
    expect(queue.dequeue()).toBe('xbox 360');
    expect(queue.dequeue()).toBe('switch');
  });

  test('peek', () => {
    const queue = new PriorityQueue();
    queue.enqueue('switch', 3);
    queue.enqueue('ps4', 6);
    queue.enqueue('ps5', 7);
    queue.enqueue('xbox one', 5);
    queue.enqueue('xbox 360', 4);
    expect(queue.peek()).toBe('ps5');
    expect(queue.peek()).toBe('ps5');
    expect(queue.peek()).toBe('ps5');
  });
});
