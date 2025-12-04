import {describe, expect, it} from 'vitest';

import reducer, {
  addEdge,
  addNode,
  deleteSelected,
  moveNode,
  selectNode,
} from '../diagramSlice';

describe('diagramSlice reducers', () => {
  it('adds a node and selects it', () => {
    const state = reducer(undefined as any, {type: 'init'});
    const s1 = reducer(state, addNode('task', {x: 10, y: 20}, 'My Task', 'n1'));
    expect(s1.nodes).toHaveLength(1);
    expect(s1.nodes[0]).toMatchObject({id: 'n1', position: {x: 10, y: 20}, label: 'My Task'});
    expect(s1.selection.nodeIds).toEqual(['n1']);
  });

  it('moves a node', () => {
    let state = reducer(undefined as any, {type: 'init'});
    state = reducer(state, addNode('task', {x: 0, y: 0}, 'A', 'n1'));
    state = reducer(state, moveNode({id: 'n1', position: {x: 50, y: 60}}));
    expect(state.nodes[0].position).toEqual({x: 50, y: 60});
  });

  it('adds an edge and selects it', () => {
    let state = reducer(undefined as any, {type: 'init'});
    state = reducer(state, addNode('start', {x: 0, y: 0}, 'S', 's'));
    state = reducer(state, addNode('end', {x: 100, y: 0}, 'E', 't'));
    state = reducer(state, addEdge('s', 't', 'flow', 'e1'));
    expect(state.edges).toHaveLength(1);
    expect(state.edges[0]).toMatchObject({id: 'e1', source: 's', target: 't'});
    expect(state.selection.edgeIds).toEqual(['e1']);
  });

  it('does not add duplicate edges between same source and target', () => {
    let state = reducer(undefined as any, {type: 'init'});
    state = reducer(state, addNode('start', {x: 0, y: 0}, 'S', 's'));
    state = reducer(state, addNode('end', {x: 100, y: 0}, 'E', 't'));
    state = reducer(state, addEdge('s', 't', 'flow', 'e1'));
    state = reducer(state, addEdge('s', 't', 'flow', 'e2'));
    expect(state.edges).toHaveLength(1);
    expect(state.edges[0].id).toBe('e1');
  });

  it('ignores self-loop edge (source === target)', () => {
    let state = reducer(undefined as any, {type: 'init'});
    state = reducer(state, addNode('task', {x: 0, y: 0}, 'A', 'n1'));
    state = reducer(state, addEdge('n1', 'n1', 'flow', 'e1'));
    expect(state.edges).toHaveLength(0);
  });

  it('deleteSelected removes selected node and its connected edges', () => {
    let state = reducer(undefined as any, {type: 'init'});
    state = reducer(state, addNode('task', {x: 0, y: 0}, 'A', 'n1'));
    state = reducer(state, addNode('task', {x: 100, y: 0}, 'B', 'n2'));
    state = reducer(state, addEdge('n1', 'n2', 'flow', 'e1'));
    state = reducer(state, selectNode('n1'));
    state = reducer(state, deleteSelected());
    expect(state.nodes.map((n) => n.id)).toEqual(['n2']);
    expect(state.edges).toHaveLength(0);
  });
});
