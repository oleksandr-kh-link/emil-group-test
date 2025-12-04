import {describe, expect, it} from 'vitest';

import {exportToExampleJson, safeImportFromExampleJson} from '../types';
import type {DiagramState} from '../types';

describe('JSON round-trip', () => {
  it('export then import produces equivalent nodes and edges', () => {
    const state: DiagramState = {
      nodes: [
        {id: 'StartEvent_1', type: 'start', position: {x: 100, y: 120}, label: 'Start'},
        {id: 'Task_1', type: 'task', position: {x: 260, y: 110}, label: 'Do Work'},
        {id: 'EndEvent_1', type: 'end', position: {x: 480, y: 120}, label: 'End'},
      ],
      edges: [
        {id: 'Flow_1', source: 'StartEvent_1', target: 'Task_1', label: ''},
        {id: 'Flow_2', source: 'Task_1', target: 'EndEvent_1', label: ''},
      ],
    };

    const json = exportToExampleJson(state);
    const imported = safeImportFromExampleJson(json);

    // Compare by id and positions; order should be preserved by export
    expect(imported.nodes.map((n) => ({id: n.id, type: n.type, x: n.position.x, y: n.position.y, label: n.label}))).toEqual(
        state.nodes.map((n) => ({id: n.id, type: n.type, x: n.position.x, y: n.position.y, label: n.label})),
    );
    expect(imported.edges).toEqual(state.edges);
  });
});
