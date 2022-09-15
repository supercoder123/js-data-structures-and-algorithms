import { Graph } from '../Graph';

describe('Graph', () => {
  beforeEach(() => {
    Graph.isDirected = true;
    jest.restoreAllMocks();
  });

  test('Initialize a graph', () => {
    const g = new Graph();
    expect(g).toBeDefined();
  });

  test('addVertex to graph', () => {
    const g = new Graph();

    g.addVertex(1);
    expect(g.graph.has(1)).toBe(true);
    expect(g.graph.get(1).size).toBe(0);

    g.addVertex(2);
    expect(g.graph.has(2)).toBe(true);

    g.addVertex(1);
    expect(g.graph.size).toBe(2);
  });

  test('add edge', () => {
    const g = new Graph();

    g.addEdge(1, 2);
    expect(g.graph.has(1)).toBe(true);
    expect(g.graph.has(2)).toBe(true);
    expect(g.graph.get(1).size).toBe(1);
    expect(g.graph.get(1).get(2)).toBe(0);

    g.addEdge(1, 2);
    expect(g.graph.get(1).size).toBe(1);
    expect(g.graph.get(1).get(2)).toBe(0);

    Graph.isDirected = false;

    g.addEdge(1, 3);
    expect(g.graph.get(1).size).toBe(2);
    expect(g.graph.get(3).size).toBe(1);
  });

  test('add edge with weights', () => {
    const g = new Graph();

    g.addEdge(1, 2, 5);
    expect(g.graph.has(1)).toBe(true);
    expect(g.graph.has(2)).toBe(true);
    expect(g.graph.get(1).size).toBe(1);
    expect(g.graph.get(1).get(2)).toBe(5);

    g.addEdge(1, 2, 7);
    expect(g.graph.get(1).size).toBe(1);
    expect(g.graph.get(1).get(2)).toBe(7);
    expect(g.getEdgeWeight(1, 2)).toBe(7);
    expect(g.isAdjacent(1, 2)).toBe(true);

    Graph.isDirected = false;

    g.addEdge(1, 3, 6);
    expect(g.graph.get(1).size).toBe(2);
    expect(g.graph.get(3).size).toBe(1);
    expect(g.graph.get(3).get(1)).toBe(6);
    expect(g.isAdjacent(1, 3)).toBe(true);

    expect(g.getEdgeWeight(1, 3)).toBe(6);
  });

  test('remove edge', () => {
    const g = new Graph();
    g.addEdge(1, 2, 5);
    g.addEdge(1, 3, 2);
    g.addEdge(2, 3, 2);

    g.removeEdge(1, 2);
    expect(g.graph.has(1)).toBe(true);
    expect(g.graph.has(2)).toBe(true);
    expect(g.graph.get(1).has(2)).toBe(false);
    expect(g.graph.get(2).has(1)).toBe(false);
    // expect(g.graph.get(1).has(3)).toBe(true);
  });

  test('get neighbors', () => {
    const g = new Graph();

    g.addVertex(3);
    expect(g.getNeighbors(3)).toEqual([]);

    g.addEdge(1, 2);
    expect(g.getNeighbors(1)).toEqual([2]);

    g.addEdge(1, 5);
    expect(g.getNeighbors(1)).toEqual([2, 5]);

    g.addEdge(1, 9);
    expect(g.getNeighbors(1)).toEqual([2, 5, 9]);
  });

  test('remove vertex', () => {
    const g = new Graph();
    g.addEdge(1, 2, 5);
    g.addEdge(2, 1, 5);
    g.addEdge(1, 3, 2);
    g.addEdge(2, 3, 2);
    g.removeVertex(1);

    expect(g.graph.has(1)).toBe(false);
    g.graph.forEach((v, k, map) => {
      expect(v.has(1)).toBe(false);
    });
  });

  test('bfs', () => {
    jest.spyOn(console, 'log').mockImplementation(() => {});
    const g = new Graph();
    g.addEdge(1, 2);
    g.addEdge(1, 5);
    g.addEdge(1, 9);
    g.addEdge(2, 3);
    g.addEdge(5, 6);
    g.addEdge(5, 8);
    g.addEdge(9, 10);
    g.addEdge(3, 4);
    g.addEdge(6, 7);

    const bfsSet = g.breadthFirstSearch(1);
    const bfs = [...bfsSet.values()];
    expect(bfs).toEqual([1, 2, 5, 9, 3, 6, 8, 10, 4, 7]);
  });

  test('dfs', () => {
    jest.spyOn(console, 'log').mockImplementation(() => {});
    const g = new Graph();
    g.addEdge(1, 2);
    g.addEdge(1, 5);
    g.addEdge(1, 9);
    g.addEdge(2, 3);
    g.addEdge(5, 6);
    g.addEdge(5, 8);
    g.addEdge(9, 10);
    g.addEdge(3, 4);
    g.addEdge(6, 7);

    const dfsSet = g.depthFirstSearch(1);
    const dfs = [...dfsSet.values()];
    expect(dfs).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
