import { Stack } from '../Stack';

describe('Stack', () => {
  it('should create empty stack', () => {
    const stack = new Stack();
    expect(stack).not.toBeNull();
    expect(stack.linkedList).not.toBeNull();
  });

  it('should stack data to stack', () => {
    const stack = new Stack();

    stack.push(1);
    stack.push(2);

    expect(stack.toString()).toBe('2 1');
  });

  it('should have proper size() value', () => {
    const stack = new Stack();

    stack.push(1);
    stack.push(2);
    expect(stack.size()).toBe(2);

    stack.push(4);
    expect(stack.size()).toBe(3);

    stack.pop();
    expect(stack.size()).toBe(2);
  });

  it('should peek data from stack', () => {
    const stack = new Stack();

    expect(stack.peek()).toBeNull();

    stack.push(1);
    stack.push(2);

    expect(stack.peek()).toBe(2);
    expect(stack.peek()).toBe(2);
  });

  it('should check if stack is empty', () => {
    const stack = new Stack();

    expect(stack.isEmpty()).toBe(true);

    stack.push(1);

    expect(stack.isEmpty()).toBe(false);
  });

  it('should pop data from stack', () => {
    const stack = new Stack();

    stack.push(1);
    stack.push(2);

    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.pop()).toBeNull();
    expect(stack.isEmpty()).toBe(true);
  });

  it('should be possible to convert stack to array', () => {
    const stack = new Stack();

    expect(stack.peek()).toBeNull();

    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.toArray()).toEqual([3, 2, 1]);
  });
});
