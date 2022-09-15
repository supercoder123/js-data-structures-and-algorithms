/**
 * A binary heap is a binary tree which also satisfies two additional constraints:
 * - **Shape property**: a binary heap is a complete binary tree; that is, all levels of the tree, except
 * possibly the last one (deepest) are completely filled, and, if the last level of the tree is not
 * complete, the nodes of that level are filled from left to right.
 * - **Heap property**: if P is a parent node of child node C, then the value of P is either greater than
 * or equal to (in a max heap) or less than or equal to (in a min heap) the key of C.
 * |Peek | Poll | Add | Remove|
 * |-----|-----|-----|-----|
 * | O(1) | O(log(n)) | O(log(n)) | O(log(n)) |
 *
 * If the tree root is at index 0, with valid indices 0 through n − 1, then each element
 * a at index i (parent) has:
 * - children at indices 2i + 1 and 2i + 2,
 * - its parent at index floor((i − 1) / 2)
 */

export class Heap {
  constructor(compare = (root, child) => root > child) {
    this.compare = compare;
    this.values = [];
  }

  exists(i) {
    if (i >= this.size || i < 0) {
      return false;
    }
    return true;
  }

  parent(i) {
    return Math.floor((i - 1) / 2);
  }

  leftChildIndex(i) {
    return Math.round(2 * i + 1);
  }

  leftChild(i) {
    return this.values[this.leftChildIndex(i)];
  }

  rightChildIndex(i) {
    return Math.round(2 * i + 2);
  }

  rightChild(i) {
    return this.values[this.rightChildIndex(i)];
  }

  getLargestChildIndex(i) {
    // dont have to check if left exists since it is a complete binary tree
    // nodes are always filled from left first
    return this.rightChildIndex(i) < this.size && this.compare(this.rightChild(i), this.leftChild(i)) ? this.rightChildIndex(i) : this.leftChildIndex(i);
  }

  insert(val) {
    this.values.push(val);
    this.heapifyUp();
  }

  peek() {
    return this.values[0];
  }

  get size() {
    return this.values.length;
  }

  /**
   * choose last node since new nodes are added at the end
   * keep on swapping child nodes with parent whereever heap condition (max or min) is not satisfied
   */
  /** also known as bubbleUp */
  heapifyUp() {
    let currIdx = this.size - 1;
    while (this.parent(currIdx) >= 0 && !this.compare(this.values[this.parent(currIdx)], this.values[currIdx])) {
      this.swap(this.parent(currIdx), currIdx);
      currIdx = this.parent(currIdx);
    }
  }

  /** also known as bubbleDown */
  heapifyDown(index = 0) {
    let curr = index;
    const leftChildExists = (curr) => this.leftChildIndex(curr) < this.size;

    // checking if left child child exists is sufficient enough, so that we do not visit extra nodes
    while (leftChildExists(curr) && !this.compare(this.values[curr], this.values[this.getLargestChildIndex(curr)])) {
      const largestChildIdx = this.getLargestChildIndex(curr);
      this.swap(curr, largestChildIdx);
      curr = largestChildIdx;
    }
  }

  swap(i1, i2) {
    [this.values[i1], this.values[i2]] = [this.values[i2], this.values[i1]];
  }

  remove(i) {
    if (!this.size) return null;
    this.swap(i, this.size - 1);
    const value = this.values.pop();
    this.heapifyDown(i);
    return value;
  }

  removeVal(val) {
    const idx = this.values.indexOf(val);
    if (idx >= 0) {
      return this.remove(idx);
    }
    return null;
  }
}

export class MaxHeap extends Heap {
  constructor() {
    super((a, b) => a > b);
  }

  extractMax() {
    return this.remove(0);
  }
}

export class MinHeap extends Heap {
  constructor() {
    super((a, b) => a < b);
  }

  extractMin() {
    return this.remove(0);
  }
}
