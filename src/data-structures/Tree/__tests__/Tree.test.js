import { BinarySearchTree } from '../BinarySearchTree';

describe('BinarySearchTree', () => {
  it('should create binary search tree', () => {
    const bst = new BinarySearchTree();

    expect(bst).toBeDefined();
    expect(bst.root).toBeDefined();
  });

  it('should insert values', () => {
    const bst = new BinarySearchTree();

    const insertedNode1 = bst.insert(10);
    const insertedNode2 = bst.insert(20);
    bst.insert(5);

    expect(bst.toString()).toBe('5,10,20');
  });

  it('should check if value exists', () => {
    const bst = new BinarySearchTree();

    bst.insert(10);
    bst.insert(20);
    bst.insert(5);

    expect(bst.exists(20)).toBe(true);
    expect(bst.exists(40)).toBe(false);
  });

  it('should remove nodes', () => {
    const bst = new BinarySearchTree();

    bst.insert(10);
    bst.insert(20);
    bst.insert(5);

    expect(bst.toString()).toBe('5,10,20');

    const removed1 = bst.delete(5);
    expect(bst.toString()).toBe('10,20');

    const removed2 = bst.delete(20);
    expect(bst.toString()).toBe('10');
  });

  it('should be traversed to sorted array', () => {
    const bst = new BinarySearchTree();

    bst.insert(10);
    bst.insert(-10);
    bst.insert(20);
    bst.insert(-20);
    bst.insert(25);
    bst.insert(6);

    expect(bst.toString()).toBe('-20,-10,6,10,20,25');
    expect(bst.height).toBe(3);

    bst.insert(4);

    expect(bst.toString()).toBe('-20,-10,4,6,10,20,25');
    expect(bst.height).toBe(4);
  });
});
