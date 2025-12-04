import {configureStore} from '@reduxjs/toolkit';
import {fireEvent, render, screen} from '@testing-library/react';
import React from 'react';
import {Provider} from 'react-redux';
import {beforeEach, describe, expect, it} from 'vitest';

import diagramReducer, {addEdge, addNode} from '../diagramSlice';
import EdgeView from '../EdgeView';
import NodeView from '../NodeView';

function makeStore() {
  return configureStore({reducer: {diagram: diagramReducer}});
}

function selectNodeById(id: string) {
  // Helper harness that selects a node from store and passes it down to NodeView
  return function NodeHarness() {
    return (
      <Provider store={store}>
        <NodeView node={store.getState().diagram.nodes.find((n) => n.id === id)!} />
      </Provider>
    ) as JSX.Element;
  };
}

let store = makeStore();

describe('component interactions', () => {
  beforeEach(() => {
    store = makeStore();
    store.dispatch(addNode('task', {x: 10, y: 20}, 'Task A', 'n1'));
    store.dispatch(addNode('start', {x: 300, y: 20}, 'Start', 's'));
    store.dispatch(addNode('end', {x: 400, y: 20}, 'End', 't'));
    store.dispatch(addEdge('s', 't', 'flow', 'e1'));
  });

  it('NodeView selects on keyboard Enter', () => {
    const Harness = selectNodeById('n1');
    render(<Harness />);
    const group = screen.getByRole('button', {name: /task node/i});
    group.focus();
    fireEvent.keyDown(group, {key: 'Enter'});
    const state = store.getState().diagram;
    expect(state.selection.nodeIds).toEqual(['n1']);
  });

  it('EdgeView selects on click', () => {
    const nodes = Object.fromEntries(store.getState().diagram.nodes.map((n) => [n.id, n]));
    render(
        <Provider store={store}>
          <svg>
            <EdgeView edge={store.getState().diagram.edges[0]} nodes={nodes} />
          </svg>
        </Provider>,
    );
    const edgeButton = screen.getByRole('button', {name: /connection from/i});
    fireEvent.click(edgeButton);
    const state = store.getState().diagram;
    expect(state.selection.edgeIds).toEqual(['e1']);
  });
});
