import { QueueClassic } from '../QueueClassic';

describe('QueueClassic', () => {
  it('should create empty queue', () => {
    const queue = new QueueClassic();
    expect(queue).not.toBeNull();
    expect(queue.toString()).toBe('');
  });

  it('enqueue', () => {
    const queue = new QueueClassic();
    expect(queue.size()).toBe(0);
    queue.enqueue(2);
    expect(queue.toString()).toBe('2');
    queue.enqueue(3);
    expect(queue.toString()).toBe('2 3');
    queue.enqueue(4);
    expect(queue.size()).toBe(3);
    expect(queue.toString()).toBe('2 3 4');
  });

  it('dequeue', () => {
    const queue = new QueueClassic();
    expect(queue.size()).toBe(0);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    queue.dequeue();
    queue.dequeue();
    expect(queue.size()).toBe(1);
    expect(queue.toString()).toBe('4');

    queue.enqueue(8);
    expect(queue.size()).toBe(2);
    expect(queue.toString()).toBe('4 8');

    queue.dequeue();
    queue.dequeue();

    queue.enqueue(4);
    expect(queue.toString()).toBe('4');
  });

  it('isEmpty', () => {
    const queue = new QueueClassic();
    expect(queue.isEmpty()).toBe(true);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.isEmpty()).toBe(false);
    queue.enqueue(4);
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    expect(queue.isEmpty()).toBe(true);
  });

  it('size()', () => {
    const queue = new QueueClassic();
    expect(queue.size()).toBe(0);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.size()).toBe(2);

    queue.dequeue();

    expect(queue.size()).toBe(1);

    queue.dequeue();

    expect(queue.size()).toBe(0);

    queue.dequeue();
    queue.dequeue();

    expect(queue.size()).toBe(0);
  });
});
