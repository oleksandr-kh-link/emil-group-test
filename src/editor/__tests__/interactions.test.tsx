import {configureStore} from '@reduxjs/toolkit';
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import React from 'react';
import {Provider} from 'react-redux';
import {beforeEach, describe, expect, it} from 'vitest';

import diagramReducer, {addNode, completeConnectionTo, startConnectionFrom} from '../diagramSlice';
import NodeView from '../NodeView';

function makeStore() {
  return configureStore({reducer: {diagram: diagramReducer}});
}

describe('Node interactions', () => {
  let store = makeStore();

  beforeEach(() => {
    store = makeStore();
    store.dispatch(addNode('task', {x: 10, y: 20}, 'Task A', 'n1'));
    store.dispatch(addNode('task', {x: 200, y: 20}, 'Task B', 'n2'));
  });

  it('edits task label with newline on Enter and commits on blur', () => {
    render(
        <Provider store={store}>
          <svg>
            {store.getState().diagram.nodes.map((n) => (
              <NodeView key={n.id} node={n} />
            ))}
          </svg>
        </Provider>,
    );

    // Double click on label text to start editing
    const label = screen.getByText('Task A');
    fireEvent.doubleClick(label);

    // Textarea should appear; type line 1, press Enter to insert newline, type line 2, then blur to commit
    const textarea = screen.getByDisplayValue('Task A') as HTMLTextAreaElement;
    fireEvent.change(textarea, {target: {value: 'Line 1'}});
    fireEvent.keyDown(textarea, {key: 'Enter'}); // should insert a newline rather than commit
    fireEvent.change(textarea, {target: {value: 'Line 1\nLine 2'}});
    fireEvent.blur(textarea);

    // State should be updated with a newline preserved
    const state = store.getState().diagram;
    expect(state.nodes.find((n) => n.id === 'n1')!.label).toBe('Line 1\nLine 2');
  });

  it('connects two nodes by starting from n1 then completing to n2 (reducer-backed)', async () => {
    render(
        <Provider store={store}>
          <svg>
            {store.getState().diagram.nodes.map((n) => (
              <NodeView key={n.id} node={n} />
            ))}
          </svg>
        </Provider>,
    );

    // Use reducers to start and complete a connection to avoid SVG event flakiness in JSDOM
    store.dispatch(startConnectionFrom('n1'));
    store.dispatch(completeConnectionTo('n2'));

    await waitFor(() => {
      const state = store.getState().diagram;
      expect(state.edges.length).toBe(1);
      expect(state.edges[0]).toMatchObject({source: 'n1', target: 'n2'});
    });
  });
});
