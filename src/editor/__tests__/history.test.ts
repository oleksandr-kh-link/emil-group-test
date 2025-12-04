import {configureStore} from '@reduxjs/toolkit';
import {describe, expect, it} from 'vitest';

import reducer, {
  addNode,
  captureHistorySnapshot,
  deleteSelected,
  moveNode,
  redo,
  setNodeLabel,
  undo,
} from '../diagramSlice';

function makeStore() {
  return configureStore({reducer: {diagram: reducer}});
}

describe('history undo/redo (bounded to 10)', () => {
  it('addNode → undo → redo', () => {
    const store = makeStore();
    store.dispatch(addNode('task', {x: 10, y: 10}, 'A', 'n1'));
    expect(store.getState().diagram.nodes.some((n: any) => n.id === 'n1')).toBe(true);
    store.dispatch(undo());
    expect(store.getState().diagram.nodes.some((n: any) => n.id === 'n1')).toBe(false);
    store.dispatch(redo());
    expect(store.getState().diagram.nodes.some((n: any) => n.id === 'n1')).toBe(true);
  });

  it('label edit undo/redo', () => {
    const store = makeStore();
    store.dispatch(addNode('task', {x: 0, y: 0}, 'Task', 'n'));
    store.dispatch(setNodeLabel({id: 'n', label: 'New Label'}));
    expect(store.getState().diagram.nodes.find((n: any) => n.id === 'n')!.label).toBe('New Label');
    store.dispatch(undo());
    expect(store.getState().diagram.nodes.find((n: any) => n.id === 'n')!.label).toBe('Task');
    store.dispatch(redo());
    expect(store.getState().diagram.nodes.find((n: any) => n.id === 'n')!.label).toBe('New Label');
  });

  it('moveNode with snapshot on drag start is undoable', () => {
    const store = makeStore();
    store.dispatch(addNode('task', {x: 10, y: 10}, 'A', 'n1'));
    // simulate drag start snapshot
    store.dispatch(captureHistorySnapshot());
    store.dispatch(moveNode({id: 'n1', position: {x: 50, y: 80}}));
    expect(store.getState().diagram.nodes.find((n: any) => n.id === 'n1')!.position).toEqual({x: 50, y: 80});
    store.dispatch(undo());
    expect(store.getState().diagram.nodes.find((n: any) => n.id === 'n1')!.position).toEqual({x: 10, y: 10});
  });

  it('deleteSelected is undoable', () => {
    const store = makeStore();
    store.dispatch(addNode('task', {x: 0, y: 0}, 'A', 'n1'));
    // select node by setting selection directly via actions not exposed; instead simulate by label edit which pushes history
    // but we can modify state via addNode selection side effect: addNode selects the new node
    store.dispatch(deleteSelected());
    expect(store.getState().diagram.nodes.length).toBe(0);
    store.dispatch(undo());
    expect(store.getState().diagram.nodes.length).toBe(1);
  });

  it('history is capped at 10', () => {
    const store = makeStore();
    // push more than 10 operations
    for (let i = 0; i < 12; i++) {
      store.dispatch(addNode('task', {x: i * 10, y: 0}, `T${i}`, `n${i}`));
    }
    const pastLen = (store.getState().diagram as any).history.past.length;
    expect(pastLen).toBeLessThanOrEqual(10);
  });
});
