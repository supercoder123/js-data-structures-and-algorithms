import { Heap, MaxHeap, MinHeap } from '../Heap';

const insertMockValues = (heap) => {
  const str = '2,7,26,25,19,17,1,90,3,36';
  str.split(',').forEach((val) => {
    heap.insert(Number(val));
  });
  return heap;
};

describe('Heap', () => {
  let heap;

  beforeEach(() => {
    heap = new Heap();
  });

  test('initialize the heap', () => {
    expect(heap.peek()).toBe(undefined);
  });

  test('insert values into heap', () => {
    insertMockValues(heap);
    expect(heap.values).toEqual([90, 36, 17, 25, 26, 7, 1, 2, 3, 19]);
  });

  test('left child exists', () => {
    insertMockValues(heap);
    expect(heap.leftChildIndex(0)).toBe(1);
    expect(heap.leftChildIndex(1)).toBe(3);
  });

  test('remove value at given index', () => {
    insertMockValues(heap);
    expect(heap.remove(0)).toBe(90);
    expect(heap.remove(0)).toBe(36);
    expect(heap.remove(0)).toBe(26);
    expect(heap.remove(0)).toBe(25);
  });

  test('remove value from heap', () => {
    insertMockValues(heap);
    expect(heap.removeVal(0)).toBe(null);
    expect(heap.removeVal(90)).toBe(90);
    expect(heap.values).toEqual([36, 26, 17, 25, 19, 7, 1, 2, 3]);
  });
});

describe('Max Heap', () => {
  let heap;

  beforeEach(() => {
    heap = new MaxHeap();
  });

  test('insert values into heap', () => {
    insertMockValues(heap);
    expect(heap.values).toEqual([90, 36, 17, 25, 26, 7, 1, 2, 3, 19]);
  });

  test('Extract Max', () => {
    insertMockValues(heap);
    expect(heap.extractMax()).toBe(90);
    expect(heap.extractMax()).toBe(36);
    expect(heap.extractMax()).toBe(26);
    expect(heap.extractMax()).toBe(25);
    expect(heap.extractMax()).toBe(19);
    expect(heap.extractMax()).toBe(17);
    expect(heap.extractMax()).toBe(7);
    expect(heap.extractMax()).toBe(3);
    expect(heap.extractMax()).toBe(2);
    expect(heap.extractMax()).toBe(1);
  });
});

describe('Min Heap', () => {
  let heap;

  beforeEach(() => {
    heap = new MinHeap();
  });

  test('Extract Min', () => {
    insertMockValues(heap);
    expect(heap.extractMin()).toBe(1);
    expect(heap.extractMin()).toBe(2);
    expect(heap.extractMin()).toBe(3);
    expect(heap.extractMin()).toBe(7);
    expect(heap.extractMin()).toBe(17);
    expect(heap.extractMin()).toBe(19);
    expect(heap.extractMin()).toBe(25);
    expect(heap.extractMin()).toBe(26);
    expect(heap.extractMin()).toBe(36);
    expect(heap.extractMin()).toBe(90);
  });
});
