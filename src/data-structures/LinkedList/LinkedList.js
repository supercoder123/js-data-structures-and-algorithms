import LinkedListNode from './LinkedListNode';

export class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  /**
   * time - O(1)
   * space - O(1)
   */
  prepend(value) {
    const node = new LinkedListNode(value, this.head);
    this.head = node;

    this.length++;

    return this;
  }

  /**
   * Time - O(n)
   * Space - O(1)
   */
  append(value) {
    const node = new LinkedListNode(value);

    if (!this.head) {
      this.head = node;
    } else {
      let curr = this.head;
      while (curr && curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }

    this.length++;
    return this;
  }

  /** Inserts after given position */
  /**
   * Time - O(n)
   */
  insertAfter(value, rawIndex) {
    const index = rawIndex < 0 || !rawIndex ? 0 : rawIndex;
    const node = new LinkedListNode(value);

    if (!this.head) {
      this.head = node;
    } else {
      let count = 0;
      let curr = this.head;
      while (curr && curr.next && count !== index) {
        curr = curr.next;
        count++;
      }

      if (curr) {
        node.next = curr.next;
        curr.next = node;
      }
    }

    this.length++;

    return this;
  }

  /** Inserts at the given position */
  /**
   * Time - O(n)
   */
  insertAt(value, rawIndex) {
    const index = rawIndex < 0 || !rawIndex ? 0 : rawIndex;
    const node = new LinkedListNode(value);

    if (!this.head) {
      this.head = node;
    } else {
      if (index === 0) {
        node.next = this.head;
        this.head = node;
      } else {
        let count = 0;
        let curr = this.head;
        while (curr && curr.next && count !== index - 1) {
          curr = curr.next;
          count++;
        }
        if (curr) {
          node.next = curr.next;
          curr.next = node;
        }
      }
    }

    this.length++;

    return this;
  }

  delete(value) {
    if (!this.head) {
      return null;
    }
    if (this.head.value === value) {
      this.deleteHead();
      return;
    }
    let curr = this.head;
    while (curr && curr.next && curr.next.value !== value) {
      curr = curr.next;
    }
    if (curr) {
      curr.next = curr.next.next;
    }
    this.length--;
  }

  /**
   * Time - O(1)
   */
  deleteHead() {
    if (!this.head) {
      return null;
    }
    const deletedElement = this.head;
    this.head = this.head.next;
    this.length--;
    return deletedElement?.value;
  }

  /**
   * Time - O(n)
   */
  deleteTail() {
    if (!this.head) {
      return null;
    }
    let curr = this.head;
    let prev = null;
    while (curr && curr.next) {
      prev = curr;
      curr = curr.next;
    }
    prev.next = null;
    this.length--;
    return this;
  }

  /**
   * Time - O(n)
   */
  find(value) {
    if (!this.head) {
      return null;
    }

    let curr = this.head;
    while (curr && curr.value !== value) {
      curr = curr.next;
    }
    return curr ? curr : null;
  }

  reverse() {
    let curr = this.head;
    let prev = null;
    let next = null;
    while (curr) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    // since curr will be null prev will be in the last postion
    this.head = prev;
    return this;
  }

  toArray() {
    let start = this.head;
    const arr = [];
    while (start) {
      arr.push(start.value);
      start = start.next;
    }
    return arr;
  }

  toString() {
    return this.toArray().join(' ');
  }
}
