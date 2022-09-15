import { LinkedList } from '../../LinkedList/LinkedList';

describe('LinkedList', () => {
  test('Should prepend node', () => {
    const l = new LinkedList();
    l.prepend(34);
    expect(l.toString()).toBe('34');
    l.prepend(54);
    l.prepend(90);
    expect(l.toString()).toBe('90 54 34');
    expect(l.length).toBe(3);
  });

  test('Should append node', () => {
    const l = new LinkedList();
    l.append(34);
    expect(l.toString()).toBe('34');
    l.append(54);
    l.append(90);
    expect(l.toString()).toBe('34 54 90');
    expect(l.length).toBe(3);
  });

  test('Should insert node after', () => {
    const linkedList = new LinkedList();

    linkedList.insertAfter(4, 3);
    expect(linkedList.head.value).toBe(4);

    linkedList.insertAfter(3, 2);
    linkedList.insertAfter(2, 1);
    linkedList.insertAfter(1, -7);
    linkedList.insertAfter(10, 9);
    linkedList.insertAfter(5, 5);
    // 4 1 3 2 10 5
    expect(linkedList.toString()).toBe('4 1 3 2 10 5');
  });

  test('Should insert node at given position', () => {
    const linkedList = new LinkedList();

    linkedList.insertAt(4, 3);
    expect(linkedList.head.value).toBe(4);

    linkedList.insertAt(3, 2);
    linkedList.insertAt(2, 1);
    linkedList.insertAt(1, -7);
    linkedList.insertAt(10, 9);
    linkedList.insertAt(5, 5);
    expect(linkedList.toString()).toBe('1 4 2 3 10 5');
  });

  test('Should find given node', () => {
    const linkedList = new LinkedList();

    linkedList.insertAt(4, 3);
    expect(linkedList.head.value).toBe(4);

    linkedList.insertAt(3, 2);
    linkedList.insertAt(2, 1);
    linkedList.insertAt(1, -7);
    linkedList.insertAt(10, 9);
    linkedList.insertAt(5, 5);
    expect(linkedList.toString()).toBe('1 4 2 3 10 5');

    expect(linkedList.find(10).value).toBe(10);
    expect(linkedList.find(2).value).toBe(2);
    expect(linkedList.find(1).value).toBe(1);
    expect(linkedList.find(5).value).toBe(5);
    expect(linkedList.find(100)).toBe(null);
  });

  test('Should delete tail', () => {
    const linkedList = new LinkedList();

    linkedList.insertAt(4, 3);
    expect(linkedList.head.value).toBe(4);

    linkedList.insertAt(3, 2);
    linkedList.insertAt(2, 1);
    linkedList.insertAt(1, -7);
    linkedList.insertAt(10, 9);
    linkedList.insertAt(5, 5);
    expect(linkedList.toString()).toBe('1 4 2 3 10 5');
    linkedList.deleteTail();
    expect(linkedList.toString()).toBe('1 4 2 3 10');
    linkedList.deleteTail();
    expect(linkedList.toString()).toBe('1 4 2 3');
    linkedList.deleteTail();
    expect(linkedList.toString()).toBe('1 4 2');
  });

  test('Should delete head', () => {
    const linkedList = new LinkedList();

    linkedList.insertAt(4, 3);
    expect(linkedList.head.value).toBe(4);

    linkedList.insertAt(3, 2);
    linkedList.insertAt(2, 1);
    linkedList.insertAt(1, -7);
    linkedList.insertAt(10, 9);
    linkedList.insertAt(5, 5);
    expect(linkedList.toString()).toBe('1 4 2 3 10 5');
    linkedList.deleteHead();
    expect(linkedList.toString()).toBe('4 2 3 10 5');
    linkedList.deleteHead();
    expect(linkedList.toString()).toBe('2 3 10 5');
    linkedList.deleteHead();
    expect(linkedList.toString()).toBe('3 10 5');
  });

  test('Should delete given value', () => {
    const linkedList = new LinkedList();

    linkedList.insertAt(4, 3);
    expect(linkedList.head.value).toBe(4);

    linkedList.insertAt(3, 2);
    linkedList.insertAt(2, 1);
    expect(linkedList.toString()).toBe('4 2 3');
    linkedList.delete(4);
    expect(linkedList.toString()).toBe('2 3');
    linkedList.delete(3);
    expect(linkedList.toString()).toBe('2');
    linkedList.delete(2);
    expect(linkedList.toString()).toBe('');
  });

  test('Should reverse a list', () => {
    const linkedList = new LinkedList();

    linkedList.insertAt(4, 3);
    expect(linkedList.head.value).toBe(4);

    linkedList.insertAt(3, 2);
    linkedList.insertAt(2, 1);
    expect(linkedList.toString()).toBe('4 2 3');
    linkedList.reverse();
    expect(linkedList.toString()).toBe('3 2 4');
  });
});
