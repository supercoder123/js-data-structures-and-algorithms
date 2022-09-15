import TreeNode from '../Tree/TreeNode';

export class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    this.root = this.insertHelper(this.root, value);
  }

  insertHelper(node, value) {
    if (!node) {
      return new TreeNode(value);
    } else if (value < node.value) {
      node.left = this.insertHelper(node.left, value);
      return node;
    } else if (value > node.value) {
      node.right = this.insertHelper(node.right, value);
      return node;
    }
  }

  delete(value) {
    this.root = this.deleteHelper(this.root, value);
  }

  deleteHelper(node, value) {
    if (!node) {
      return this.root;
    } else if (value < node.value) {
      node.left = this.deleteHelper(node.left, value);
      return node;
    } else if (value > node.value) {
      node.right = this.deleteHelper(node.right, value);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        return null;
      } else if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      } else {
        // both children exist
        // get smallest node in right subtree so that once replaced all nodes to the right are greater than the chosen value
        // and bst property is maintained
        const temp = this.getSmallestNode(node.right);
        node.value = temp.value;
        node.right = this.deleteHelper(node.right, temp.value);
        return node;
      }
    }
  }

  getSmallestNode(node) {
    while (node.left) {
      node = node.left;
    }
    return node;
  }

  getLargestNode(node) {
    while (node.right) {
      node = node.right;
    }
    return node;
  }

  find(value) {
    if (!this.root) {
      return null;
    }
    return this.findHelper(this.root, value);
  }

  findHelper(node, value) {
    if (!node) {
      return null;
    }
    if (node.value === value) {
      return node;
    } else if (value < node.value) {
      return this.findHelper(node.left, value);
    } else if (value > node.value) {
      return this.findHelper(node.right, value);
    }
  }

  exists(value) {
    const node = this.find(value);
    return node ? true : false;
  }

  traverse(callback) {
    const nodesVisited = [];
    callback(this.root, nodesVisited);
    return nodesVisited;
  }

  inorder = (node, nodesVisited) => {
    if (node) {
      this.inorder(node.left, nodesVisited);
      nodesVisited.push(node.value);
      this.inorder(node.right, nodesVisited);
    }
  };

  preorder = (node, nodesVisited) => {
    if (node) {
      nodesVisited.push(node.value);
      this.preorder(node.left, nodesVisited);
      this.preorder(node.right, nodesVisited);
    }
  };

  postorder = (node, nodesVisited) => {
    if (node) {
      this.postorder(node.left, nodesVisited);
      this.postorder(node.right, nodesVisited);
      nodesVisited.push(node.value);
    }
  };

  toString() {
    return this.traverse(this.inorder).join(',');
  }

  get height() {
    return this.heightHelper(this.root);
  }

  // some definitions show height as number of nodes from root to leaf whereas some show height as number of edges
  // to count number of edges return -1 in the base condition
  // to count number of nodes return 0 in the base condition
  heightHelper(node) {
    if (!node) {
      return 0;
    }

    let leftHeight = this.heightHelper(node.left);
    let rightHeight = this.heightHelper(node.right);

    return Math.max(leftHeight, rightHeight) + 1;
  }
}
