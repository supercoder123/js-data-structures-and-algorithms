import { Graph } from './src/data-structures';

const g = new Graph();
Graph.isDirected = false;
// g.addEdge('1', '3', 6);
// g.addEdge('1', '4', 3);
// g.addEdge('2', '1', 3);
// g.addEdge('4', '2', 1);
// g.addEdge('4', '3', 1);
// g.addEdge('3', '4', 2);
// g.addEdge('5', '2', 4);
// g.addEdge('5', '4', 2);

g.addEdge(1, 2);
g.addEdge(1, 5);
g.addEdge(1, 9);
g.addEdge(2, 3);
g.addEdge(5, 6);
g.addEdge(5, 8);
g.addEdge(9, 10);
g.addEdge(3, 4);
g.addEdge(6, 7);

// console.log('getNeighbors', g.getNeighbors('1'));
// console.log('getNeighbors', g.getNeighbors('4'));
// g.removeVertex('1');
// g.removeEdge('2', '1');
// g.removeEdge('4', '2');
g.breadthFirstSearch(1);
g.depthFirstSearch(1);

// console.log(g.isAdjacent('4', '2'));

console.log(g);

// g.printGraph();
