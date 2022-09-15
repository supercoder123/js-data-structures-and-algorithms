/**
 * For weighted graphs we will keep the weight value inside the node
 * Adjacency List representation of weighted graph
 * https://www.tutorialspoint.com/weighted-graph-representation-in-data-structure
 */

export class Graph {
  static isDirected = true;

  constructor() {
    this.graph = new Map();
  }

  addVertex(vertex) {
    if (!this.graph.has(vertex)) {
      this.graph.set(vertex, new Map());
    }
    return this;
  }

  removeVertex(vertex) {
    if (!this.graph.has(vertex)) {
      return null;
    }
    this.graph.delete(vertex);
    this.graph.forEach((value) => {
      value.delete(vertex);
    });
  }

  addEdge(source, destination, weight = 0) {
    this.addVertex(source);
    this.addVertex(destination);
    this.graph.get(source).set(destination, weight);
    if (!Graph.isDirected) {
      this.graph.get(destination).set(source, weight);
    }
  }

  removeEdge(source, destination) {
    this.graph.get(source).delete(destination);
  }

  /** out neighbors in case of directed graph */
  getNeighbors(vertex) {
    if (!this.graph.has(vertex)) {
      return null;
    }

    const neighbors = [];
    this.graph.get(vertex).forEach((value, key, map) => {
      neighbors.push(key);
    });
    return neighbors;
  }

  getEdgeWeight(source, destination) {
    if (!this.graph.has(source)) {
      return null;
    }
    return this.graph.get(source).get(destination);
  }

  printGraph() {
    for (let [key, value] of this.graph.entries()) {
      console.log(key, '==>', ...value.keys());
    }
  }

  isAdjacent(source, destination) {
    return this.graph.get(source).has(destination);
  }

  breadthFirstSearch(source) {
    const visited = new Set();
    const queue = [];
    queue.push(source);
    visited.add(source);

    while (queue.length > 0) {
      const visitedNode = queue.shift();
      console.log('bfs', visitedNode);
      const neighbors = this.getNeighbors(visitedNode);
      if (neighbors) {
        neighbors.forEach((node) => {
          if (visitedNode && !visited.has(node)) {
            queue.push(node);
            visited.add(node);
          }
        });
      }
    }

    return visited;
  }

  depthFirstSearch(source) {
    const visited = new Set();
    this.dfsUtil(source, visited);
    return visited;
  }

  dfsUtil(source, visited) {
    if (!visited.has(source)) {
      visited.add(source);
      console.log('dfs', source);
      const neighbors = this.getNeighbors(source);
      if (neighbors) {
        neighbors.forEach((vertex) => this.dfsUtil(vertex, visited));
      }
    }
  }
}
