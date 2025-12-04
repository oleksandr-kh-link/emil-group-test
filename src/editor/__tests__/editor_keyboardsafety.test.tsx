import {render, fireEvent} from '@testing-library/react';
import React from 'react';
import {Provider} from 'react-redux';
import {describe, it, expect} from 'vitest';

import {store} from '../../store';
import {addNode, selectNode} from '../diagramSlice';
import Editor from '../Editor';

describe('keyboard safety: global delete should ignore editable inputs', () => {
  it('Backspace in a focused input does not delete the selected node', () => {
    // Render editor
    render(
        <Provider store={store}>
          <Editor />
        </Provider>,
    );

    const nodeId = 'node_for_edit_test';
    store.dispatch(addNode('task', {x: 50, y: 50}, 'My Task', nodeId));
    store.dispatch(selectNode(nodeId));

    // Create a regular input (simulates the inline editor or any editable element)
    const input = document.createElement('input');
    document.body.appendChild(input);
    input.focus();

    // Press Backspace while the input is focused
    fireEvent.keyDown(input, {key: 'Backspace'});

    // The node should still exist (not deleted by the global shortcut)
    const nodes = store.getState().diagram.nodes;
    expect(nodes.some((n) => n.id === nodeId)).toBe(true);
  });
});
